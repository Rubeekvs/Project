import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Welcome = (props) => {
  return (
    <Container>
      <Title>Chào mừng đến trang web của Bee!</Title>
      <Title>Làm ơn đăng nhập để sử dụng?</Title>
      <LoginButton>
        <Link to='/login'>Login</Link>
      </LoginButton>
    </Container>
  );
};

export default Welcome;
const Container = styled.div`
  margin: 0 auto;
  width: min(100%, 960px);
  height: auto;
  display: flex;
  flex-direction: column;
  background: #f2c94c;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #06effe;
`;

const LoginButton = styled.button`
  background: #06effe;
  color: black;
  padding: 5px 10px;
`;
