import React from 'react';
import styled from 'styled-components';
import { fakeAuth } from '../Auth/Auth';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = {
    redirectToReferrer: false,
  };
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true,
      }));
    });
  };
  render() {
    const { from } = this.props.location.state || {
      from: { pathname: '/home' },
    };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <ContainerLogin>
        <Title> Đăng nhập</Title>
        <Title> Email </Title>
        <InputText />
        <Title> Password </Title>
        <InputText type='password'></InputText>
        <Button onClick={this.login}> Login </Button>
      </ContainerLogin>
    );
  }
}

export default Login;

const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: min(100%, 350px);
  height: auto;
  background: blue;
  border: 1px solid black;
  padding: 5px;
  margin: 0 auto;
`;

const Title = styled.label`
  color: black;
  font-size: 13px;
`;

const InputText = styled.input`
  line-height: 2rem;
  width: min(90%, 350px);
  color: gray;
  height: 20px;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background: #06effe;
  color: #000;
  padding: 5px 10px;
  border-radius: 5px;
  width: 3rem;
  margin: 0 auto;
  border: none;
  text-align: center;
  margin-top: 1rem;
`;
