import { Container } from "./style";

export default function Row(props) {
  const { height, children } = props;
  return <Container height={height}>{children}</Container>;
}
