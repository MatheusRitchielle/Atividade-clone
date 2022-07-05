import React from "react";
import { FlatList, View } from "react-native";
import { CardGeneric, ContainerFavoritos, Shadow, Title, Column, Total } from "./styles";
import { TextLink } from './../Login/styles';
import Gradient from './../../components/Gradient/index';
import { ButtonPrimary } from './../../components/CustomButton/styles';
import { MaterialIcons } from '@expo/vector-icons';

const Lista = [
    {
        id: 1,
        produto: "Produto 1",
        preco: 25.00,
        estoque: 2,
    },
    {
        id: 2,
        produto: "Produto 4",
        preco: 100.00,
        estoque: 1,
    },
    {
        id: 3,
        produto: "Produto 6",
        preco: 40,
        estoque: 1,
    }
];

const Item = ({ produto, preco, estoque }) => (
    <View style={{ flexDirection: "row" }}>
        <Column>
            <TextLink>{produto}</TextLink>
        </Column>
        <Column>
            <TextLink>
                <MaterialIcons
                    style={{ padding: "5px"}}
                    name="remove-circle-outline" size={10} color="#120a8f" />
                {estoque}
                <MaterialIcons
                    style={{ padding: "5px"}}
                    name="add-circle-outline" size={10} color="#120a8f" />
            </TextLink>
        </Column>
        <Column>
            <TextLink>R$ {preco}</TextLink>
        </Column>
        <Column>
            <TextLink>R$ {preco * estoque}</TextLink>
        </Column>
    </View>
);

const Cart = ({ navigation }) => {
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
                            <Column>
                                <TextLink>Produto</TextLink>
                            </Column>
                            <Column>
                                <TextLink>Quantidade</TextLink>
                            </Column>
                            <Column>
                                <TextLink>Preço Unitário</TextLink>
                            </Column>
                            <Column>
                                <TextLink>Total</TextLink>
                            </Column>
                        </Title>
                        <FlatList
                            data={Lista}
                            renderItem={itemRenderizado}
                            keyExtractor={(item) => item.id}
                        />
                        <Total >
                            <TextLink>Total da compra</TextLink>
                            <TextLink>R$</TextLink>
                        </Total>
                        <Total >
                            <TextLink>Data da compra</TextLink>
                            <TextLink>today.toLocaleDateString();</TextLink>
                        </Total>
                    </CardGeneric>
                </Shadow>
                <Total>
                    <ButtonPrimary onPress={() => { navigation.navigate("InitialPage") }}>
                        <TextLink>ADICIONAR MAIS ITENS</TextLink>
                    </ButtonPrimary>
                    <ButtonPrimary onPress={() => { navigation.navigate("SuccessfulPurchase") }}>
                        <TextLink>FECHAR PEDIDO</TextLink>
                    </ButtonPrimary>
                </Total>
                <Gradient position='bottom' />
            </ContainerFavoritos>
        </>
    );
};

export default Cart;
