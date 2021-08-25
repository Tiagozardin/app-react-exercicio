import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column; /* make main axis horizontal (default setting) */
  justify-content: center; /* center items horizontally, in this case */
  align-items: center; /* center items vertically, in this case */
  background-color: white;
  height: ${(props) => props.height || "300px"};
  width: ${(props) => props.width || "98.77vw"};
`;
