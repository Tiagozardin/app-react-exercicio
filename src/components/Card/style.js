import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.bgground || ""};
  display: flex;
  flex-direction: column; /* make main axis horizontal (default setting) */
  justify-content: center; /* center items horizontally, in this case */
  align-items: center; /* center items vertically, in this case */
  height: ${(props) => props.height || "80px"};
  width: ${(props) => props.width || "300px"};
  text-align: center;
  color: black;
  font-size: 16px;
  padding: 10px;
`;

export const Title = styled.div`
  text-align: center;
  color: black;
  font-size: 20px;
  font-weight: bold;
`;

export const Subtitle = styled.div`
  text-align: center;
  color: ${(props) => props.color ||"black"};
  font-size: 15px;
 
`;
