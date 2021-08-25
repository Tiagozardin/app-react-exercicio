import React from "react";
import Row from "../../components/Row";
import Card from "../../components/Card";
import ImageCoverRow from "../../components/ImageCoverRow";
import Footer from "../../components/Footer";

import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineDatabase,
  AiOutlineDesktop,
  AiOutlineCheck
} from "react-icons/ai";


//Importar Imagem
import ocean from "../../assets/img/ocean.jpg";
import celular from "../../assets/img/celular.jpg";
import html from "../../assets/img/html.jpg";
import crianca from "../../assets/img/criança.jpg";

const HomeScreen = () => {
  return (
    <>
      <ImageCoverRow image={ocean} title={"Minha primeira página em React"} height={"350px"} />
      <Row>
        <Card
          icon={<AiOutlineDesktop size={50} color={"blue"} />}
          title={"Somente para desktop"}
          subtitle={"Vamos aprender como utilizar um framework."}
        />
        <Card
          icon={<AiOutlineDatabase size={40} color={"blue"} />}
          title={"Criando com componentes"}
          subtitle={"Utilizando o Styled Components."}
        />
        <Card
          icon={<AiOutlineCheck size={50} color={"blue"} />}
          title={"Facíl aproveitamento"}
          subtitle={"Estamos no caminho."}
        />
      </Row>
      <Row height={"450px"}>
        <Card
          width={"50%"}
          title={"Lorem Ipsum"}
          subtitle={"Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        />
        <ImageCoverRow image={celular} width={"50%"} />
      </Row>
      <Row height={"400px"}>
        <ImageCoverRow image={html} width={"50vw"} />
        <Card
          width={"50vw"}
          title={"Lorem Ipsum"}
          subtitle={"Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        />
      </Row>
      <Row height={"450px"}>
        <Card
          width={"50%"}
          title={"Lorem Ipsum"}
          subtitle={"Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        />
        <ImageCoverRow image={crianca} width={"50%"} />
      </Row>
      <ImageCoverRow image={ocean} title={"contato"} height={"250px"} />
      <Footer height={"150px"}>
        <Card 
         width={"15%"}
         subtitle={"About"}
         color={"blue"}
         />
        <Card 
        width={"15%"}
        subtitle={"Contact"}
        color={"blue"}
        />
        <Card 
        width={"15%"}
        subtitle={"Terms of Use"}
        color={"blue"}
        />
        <Card 
        width={"15%"}
        subtitle={"Privacy Policy"}
        color={"blue"}
        />
       <Card
          icon={<AiOutlineGithub size={40} color={"blue"} />}
          width={"70px"}
          height={"70px"}
        />

        <Card
          icon={<AiOutlineInstagram size={40} color={"blue"} />}
          width={"70px"}
          height={"70px"}
        />
        <Card
          icon={<AiOutlineFacebook size={40} color={"blue"} />}
          width={"70px"}
          height={"70px"}
        />
      </Footer>
    </>
  );
};
// é isso aí moçada
export default HomeScreen;
