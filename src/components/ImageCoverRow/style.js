import styled from "styled-components";
import ocean from "../../assets/img/ocean.jpg";

export const Container = styled.div`
  position: relative;
  padding-top: 100px;
  background-color: #343a40;
  background: url(${(props) => props.image || ocean}) no-repeat center center;
  background-size: cover;
  height: ${(props) => props.height || "100%"};
  width: ${(props) => props.width || "98.77vw"};
  text-align: center;
  vertical-align: middle;
  line-height: ${(props) =>
    props.height || "200px"}; /* The same as your div height */
  color: white;
  font-size: 2rem;

  h1 {
    position: relative;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
