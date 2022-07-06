import React from "react";
import { Text, View } from 'react-native';
import { Container, Logo, Title, TextInfo, SpacingHeight, WrapperTextInfo, TextLink, SecondaryButton } from "../Login/styles";
import Gradient from "../../components/Gradient";
import { Ionicons } from '@expo/vector-icons';
import { IconButton } from './../../components/CustomButton/styles';


const InitialPage = ({ navigation }) => {
    return (
        <Container>
            <Gradient position='top' />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Title>Sobre nós...</Title>
                <Text>
                    Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Title>
                    Categorias
                    <IconButton onPress={() => { navigation.navigate("CategoryRegister") }}>
                        <Ionicons name="add" size={24} color="#120a8f" />
                    </IconButton>
                </Title>
            </View>
            <Gradient position='bottom' />
        </Container>
    )
};

export default InitialPage;