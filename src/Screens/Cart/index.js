import React from "react";
import { FlatList, View } from "react-native";
import { CardGeneric, ContainerFavoritos, FotoEstilizada, Shadow, Title } from "./styles";
import { TextLink } from './../Login/styles';
import Gradient from './../../components/Gradient/index';

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
    <View>
        <TextLink>{produto}</TextLink>
        <TextLink>Preço R$ {preco}</TextLink>
        <TextLink>{estoque} unidades em estoque</TextLink>
    </View>
);

const Cart = () => {
    const itemRenderizado = ({ item }) => (
        <Item produto={item.produto} preco={item.preco} estoque={item.estoque} />
    );

    return (
        <>
            <ContainerFavoritos>
                <Gradient position='top' />
                <Shadow>
                    <CardGeneric>
                        <Title>
                            <TextLink>Produto</TextLink>
                            <TextLink>Quantidade</TextLink>
                            <TextLink>Preço Unitário</TextLink>
                            <TextLink>Total</TextLink>
                        </Title>
                        <FlatList
                            data={Lista}
                            renderItem={itemRenderizado}
                            keyExtractor={(item) => item.id}
                            numColumns={4}
                        />
                    </CardGeneric>
                </Shadow>
                <Gradient position='bottom' />
            </ContainerFavoritos>
        </>
    );
};

export default Cart;
