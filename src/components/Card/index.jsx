import { Container, Title, Subtitle } from "./style";

export default function Card(props) {
  const { title, height, subtitle, width, icon, bgground, color } = props;
  return (
    <Container height={height} width={width} bgground={bgground}>
      <div>{icon}</div>
      <Title>{title}</Title>
      <Subtitle color={color}>{subtitle}</Subtitle>
    </Container>
  );
}
