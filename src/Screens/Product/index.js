import React from "react";
import { FlatList, View } from "react-native";
import { CardGeneric, ContainerFavoritos, ContainerList, FotoEstilizada, Shadow } from "./styles";
import Gradient from './../../components/Gradient/index';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import { IconButton } from '../../components/Buttons/styles';
import { TextLink } from './../../components/Text/index';

const Lista = [
    {
        id: 1,
        produto: "Produto 1",
        preco: "25,00",
        estoque: 10,
        foto: "https://decisaosistemas.com.br/wp-content/uploads/2021/06/tecnologia-na-gestao-das-empresas.jpg"
    },
    {
        id: 2,
        produto: "Produto 2",
        preco: "50,00",
        estoque: 1,
        foto: "https://img.olhardigital.com.br/wp-content/uploads/2021/04/Tecnologia-da-informacao.jpg"
    },
    {
        id: 3,
        produto: "Produto 3",
        preco: "30,00",
        estoque: 5,
        foto: "https://universo.uniateneu.edu.br/wp-content/uploads/2022/05/Profissional-de-TI.jpeg"
    },
    {
        id: 4,
        produto: "Produto 4",
        preco: "100,00",
        estoque: 15,
        foto: "https://decisaosistemas.com.br/wp-content/uploads/2021/06/tecnologia-na-gestao-das-empresas.jpg"
    },
    {
        id: 5,
        produto: "Produto 5",
        preco: "40,00",
        estoque: 20,
        foto: "https://img.olhardigital.com.br/wp-content/uploads/2021/04/Tecnologia-da-informacao.jpg"
    },
    {
        id: 6,
        produto: "Produto 6",
        preco: "70,00",
        estoque: 8,
        foto: "https://universo.uniateneu.edu.br/wp-content/uploads/2022/05/Profissional-de-TI.jpeg"
    }
];

const Item = ({ produto, preco, estoque, foto, navigation }) => (
        <View style={{marginRight: "10px"}}>
            <CardGeneric>
                <FotoEstilizada
                    source={{ uri: foto }}
                />
                <TextLink>{produto}</TextLink>
                <TextLink>Preço R$ {preco}</TextLink>
                <TextLink>{estoque} unidades em estoque</TextLink>
            </CardGeneric>
                <View style={{ flexDirection: "row" }}>
                    <IconButton onUserPress={() => { navigation.navigate("ProductRegister") }}>
                        <AntDesign name="edit" size={18} color="#120a8f" />
                    </IconButton>
                    <Feather name="trash" size={18} color="red" />
                </View>
        </View>
);

const Product = ({ navigation }) => {
    const itemRenderizado = ({ item }) => (
        <Item foto={item.foto} produto={item.produto} preco={item.preco} estoque={item.estoque} />
    );

    return (
        <ContainerFavoritos>
            <Gradient position='top' />
            <ContainerList>
                <IconButton onUserPress={() => { navigation.navigate("ProductRegister") }}>
                    <Ionicons name="add" size={24} color="#120a8f" />
                </IconButton>
                <FlatList
                    style={{ flexDirection: "column" }}
                    data={Lista}
                    renderItem={itemRenderizado}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />
            </ContainerList>
            <Gradient position='bottom' />
        </ContainerFavoritos>
    );
};

export default Product;