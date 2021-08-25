import { Container } from "./style";

export default function Column(props) {
  const { height, children } = props;
  return <Container height={height}>{children}</Container>;
}
