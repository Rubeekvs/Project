import React from 'react';
import styled from 'styled-components';
import Branch from './Branch';
import { Link, withRouter } from 'react-router-dom';
import { fakeAuth } from '../Auth/Auth';

// const Navbar = (props) => {
//   return (
//     <Container>
//       <Branch />
//       <ListCategory>
//         <Item>
//           <Link to='/home'>Home</Link>
//         </Item>
//         <Item>
//           <Link to='/login'>Login</Link>
//         </Item>
//       </ListCategory>
//     </Container>
//   );
// };
const Navbar = withRouter(({ history }) =>
  fakeAuth.isAuthenticated ? (
    <Container>
      <Branch />
      <ListCategory>
        <Item>
          <Link to='/home'> Home </Link>
        </Item>
        <Item>
          <Button
            onClick={() => {
              fakeAuth.signout(() => history.push('/'));
            }}
          >
            Sign out
          </Button>
        </Item>
      </ListCategory>
    </Container>
  ) : (
    <Container>
      <Branch />
      <ListCategory>
        <Item>
          <Link to='/home'> Home </Link>
        </Item>
        <Item>
          <Link to='/login'> Login </Link>
        </Item>
      </ListCategory>
    </Container>
  )
);
export default Navbar;

const Container = styled.div`
  width: min(100%, 960px);
  height: 90px;
  background: white;
  display: flex;
  flex-wrap: inherit;
  flex-direction: row;
  margin: 0 auto;
`;

const ListCategory = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  line-height: 1.2rem;
  background: transparent;
  margin-left: auto;
`;
const Item = styled.li`
  text-decoration: none;
  margin-left: 1rem;
  border: 1px solid red;
  padding: 5px 10px;
  &:hover {
    background: yellow;
  }
`;

const Button = styled.button`
  margin-left: 1rem;
  border: 1px solid red;
  padding: 5px 10px;
  &:hover {
    background: yellow;
  }
  background: none;
  border: none;
  color: green;
  font-size: 1rem;
`;
