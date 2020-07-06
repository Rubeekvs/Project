import React, { useState } from 'react';
import styled from 'styled-components';

const AddPerson = (props) => {
  const [name, setName] = useState('');
  const [coin, setMoney] = useState(0);
  return (
    <Container>
      <Title> Người vay </Title>
      <Input onChange={(event) => setName(event.target.value)} />
      <Title> Số tiền </Title>
      <Input onChange={(event) => setMoney(event.target.value)} />
      <ButtonAdd onClick={() => props.add(name, coin)}> Add </ButtonAdd>
    </Container>
  );
};
export default AddPerson;

const Container = styled.div`
  width: 960px;
  background: #f2c94c;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 1.5rem;
`;
const Input = styled.input`
  width: 30rem;
  height: 3rem;
  line-height: 2rem;
  margin-bottom: 1rem;
  margin: 0 auto;
`;

const ButtonAdd = styled.button`
  border: none;
  background: #06effe;
  width: 3rem;
  padding: 5px 10px;
  margin: 0 auto;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;
