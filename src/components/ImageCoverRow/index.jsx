import { Container } from "./style";

export default function ImageCoverRow(props) {
  const { title, height, width, image } = props;
  return (
    <Container height={height} image={image} width={width}>
      <div className="overlay"></div>
      <h1>{title}</h1>
    </Container>
  );
}
