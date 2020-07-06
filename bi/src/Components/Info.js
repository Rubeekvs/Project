import React, { Component } from 'react';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

export default class Info extends Component {
  state = {
    coin: this.props.item.coin,
    isEdit: false,
  };
  handleOnEditing = () => {
    this.setState({ isEdit: true });
  };
  handleChangeText = (event) => {
    this.setState({ coin: event.target.value });
  };

  render() {
    const { name, coin, _id } = this.props.item;
    const handleDelete = () => {
      this.props.delete(_id);
      console.log('id', _id);
    };
    let handleEdit = () => {
      this.props.edit(this.state.coin, _id);
      this.setState({ isEdit: false });
    };
    return (
      <TaskWrapper>
        <Content>
          <LableTitle> Người Vay </LableTitle> <Lable> {name} </Lable>
        </Content>
        <Content>
          <LableTitle> Số tiền </LableTitle>
          {!this.state.isEdit ? (
            <Lable onDoubleClick={this.handleOnEditing}> {coin} </Lable>
          ) : (
            <InputEdit
              value={this.state.coin}
              onChange={this.handleChangeText}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  handleEdit();
                  console.log(this.state.coin);
                }
              }}
            ></InputEdit>
          )}
        </Content>
        <CustomButton onClick={handleDelete}>
          <FaTrash />
        </CustomButton>
      </TaskWrapper>
    );
  }
}

const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background: #c4c4c4;
  width: min(90%, 350px);
  min-height: 50px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 350px;
`;
const Lable = styled.label`
  width: 100%;
  max-width: 80%;
  margin-right: auto;
  margin-left: 4px;
  line-height: 1rem;
  border: none;
`;

const LableTitle = styled.label`
  width: 100%;
  max-width: 80%;
  margin-right: auto;
  background: black;
  color: white;
  padding: 5px 10px;
  margin-top: 0px;
`;
const CustomButton = styled.button`
  background: yellow;
  width: 40px;
  height: 40px;
  color: ${(props) => (props.delete ? 'red' : 'blue')};
  font-size: 1.2rem;
  margin-right: 4px;
  cursor: pointer;
  background: transparent;
  &:hover {
    opacity: 0.8;
  }
  border: none;
  &:focus {
    outline: none;
  }
`;
const InputEdit = styled.input`
  width: 100%;
  max-width: 80%;
  border: none;
  margin-right: auto;
  margin-left: 4px;
  line-height: 2rem;
`;
