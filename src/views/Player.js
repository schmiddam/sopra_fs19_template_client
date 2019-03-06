import React from "react";
import styled from "styled-components";
import {Button} from "./design/Button";

const Container = styled.div`
  margin: 6px 0;
  width: 500px;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  border: 1px solid #ffffff26;
`;

const Birthday = styled.div`
  font-weight: lighter;
  color: #06c4ff;
`;

const Id = styled.div`
  margin-left: auto;
  margin-right: 10px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;


/**
 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */

const Player = ({ user }) => {
  return (
    <Container>
        <ButtonContainer>
            <Button
            width = "100%"
            onClick ={() => {this.props.history.push("/profile")}}
            >
                {user.username}
            </Button>
        </ButtonContainer> <Birthday> Birthday: {user.birthday}</Birthday>
      <Id>Id: {user.id}</Id>
    </Container>
  );
};

export default Player;
