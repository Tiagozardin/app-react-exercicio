import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color:white;
  height: ${(props) => props.height || "100px"};
  width: ${(props) => props.width || "98.77vw"};
  align-items: center; /* center items vertically, in this case */
  justify-content: space-between; center items horizontally, in this case */
  color: black;
  font-size: 16px;
  &:after {
    content: "";
    padding: 20px;
  }
`;
