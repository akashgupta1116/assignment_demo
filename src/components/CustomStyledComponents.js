import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: black;
  padding: 15px 30px;
  border-radius: 2px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  color: ${(props) => (props.color ? props.olor : "black")};
  background-color: ${(props) => (props.bg ? props.bg : "#fbc330")};
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  outline: none;
  color: white;
  padding: 20px 10px;
  &::placeholder {
    text-align: center;
  }
`;
