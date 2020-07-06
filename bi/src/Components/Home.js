import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Info from './Info';
import AddPerson from './AddPerson';
import { useHistory } from 'react-router-dom';

const Home = (props) => {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    try {
      loadData();
    } catch (err) {
      alert('error', err);
    }
  });
  const loadData = async () => {
    const res = await fetch('http://localhost:5001/api/coin');
    const data = await res.json();
    setData(data.coinAll);
  };

  const deleteItem = async (_id) => {
    try {
      const data = await fetch(`http://localhost:5001/api/coin/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      alert('error delete');
    }
  };
  const add = async (name, coin) => {
    try {
      const data = await fetch('http://localhost:5001/api/coin', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          coin,
        }),
      });
      const resData = await data.json();
      history.push('/home');
    } catch (err) {
      alert('Something wrong add new user!', err);
    }
  };

  const edit = async (coin, _id) => {
    try {
      const data = await fetch(`http://localhost:5001/api/coin/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          coin,
        }),
      });
      history.push('/home');
    } catch (err) {
      alert('error update');
    }
  };
  console.log('object', data);
  return (
    <HomeContainer>
      <AddPerson add={add} /> <Title> Thông tin người vay tiền </Title>
      <ListPerson>
        {data.map((item) => (
          <Item key={item._id}>
            <Info item={item} edit={edit} delete={deleteItem} />
          </Item>
        ))}
      </ListPerson>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: min(100%, 960px);
  height: 1000px;
  background: #f2c94c;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  border: 1px solid black;
  padding: 1rem;
  background: #56ccf2;
  height: 2rem;
  width: 96.5%;
  text-align: center;
`;

const ListPerson = styled.ul`
  list-style-type: none;

  text-align: center;
  margin: 0 auto;
  width: 30rem;
`;
const Item = styled.li`
  margin-top: 1rem;
`;
