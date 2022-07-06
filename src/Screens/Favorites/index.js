import React from "react";
import { FlatList, View } from "react-native";
import { FotoEstilizada } from "./styles";
import { TextLink } from './../../components/Text/index';
import Gradient from './../../components/Gradient/index';
import { Container } from "../../components/Container";
import { Section } from './../../components/Section/index';
import { Shadow } from './../../components/Shadow/styles';
import { CardGeneric } from './../../components/Cards/styles';

const Lista = [
  {
    id: 1,
    produto: "Produto 2",
    preco: "50,00",
    estoque: 1,
    foto: "https://decisaosistemas.com.br/wp-content/uploads/2021/06/tecnologia-na-gestao-das-empresas.jpg"
  },
  {
    id: 2,
    produto: "Produto 5",
    preco: "40,00",
    estoque: 20,
    foto: "https://img.olhardigital.com.br/wp-content/uploads/2021/04/Tecnologia-da-informacao.jpg"
  },
  {
    id: 3,
    produto: "Produto 6",
    preco: "70,00",
    estoque: 8,
    foto: "https://universo.uniateneu.edu.br/wp-content/uploads/2022/05/Profissional-de-TI.jpeg"
  }
];

const Item = ({ produto, preco, estoque, foto }) => (
  <Shadow>
    <CardGeneric>
      <FotoEstilizada
        source={{ uri: foto }}
      />
      <View>
        <TextLink>{produto}</TextLink>
        <TextLink>Preço R$ {preco}</TextLink>
        <TextLink>{estoque} unidades em estoque</TextLink>
      </View>
    </CardGeneric>
  </Shadow>
);

const Favorites = () => {
  const itemRenderizado = ({ item }) => (
    <Item produto={item.produto} preco={item.preco} estoque={item.estoque} />
  );

  return (
    <Container>
      <Gradient position='top' />
      <Section>
        <FlatList
          data={Lista}
          renderItem={itemRenderizado}
          keyExtractor={(item) => item.id}
        />
      </Section>
      <Gradient position='bottom' />
    </Container>
  );
};

export default Favorites;
