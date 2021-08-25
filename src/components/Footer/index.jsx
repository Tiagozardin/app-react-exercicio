import { Container } from "./style";

export default function Footer(props) {
  const { height, width, children } = props;
  return (
    <Container height={height} width={width}>
      {children}
    </Container>
  );
}
