import React from "react";
import { Text, View } from 'react-native';
import { Container, Avatar, Title } from "../Login/styles";
import Gradient from "../../components/Gradient";
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import { IconButton } from './../../components/CustomButton/styles';
import AnaDoSerratec from "../../../assets/AnaDoSerratec.png";
import Doug from "../../../assets/Doug.png";
import Leo from "../../../assets/Leo.png";
import Matheus from "../../../assets/Matheus.png";
import Thais from "../../../assets/Thais.png";
import Zelaum from "../../../assets/Zelaum.png";
import { Section } from './../../components/Section/index';
import { PrimaryCard, SecundaryCard } from "./styles";
import { Shadow } from "../Favorites/styles";

const InitialPage = ({ navigation }) => {
    return (
        <Container>
            <Gradient position='top' />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Section>
                    <Title>Sobre nós...</Title>
                </Section>
                <Text style={{ fontFamily: "arialBlack" }}>
                    Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Section>
                    <Title>
                        Categorias
                        <IconButton onPress={() => { navigation.navigate("CategoryRegister") }}>
                            <Ionicons name="add" size={24} color="#120a8f" />
                        </IconButton>
                    </Title>
                </Section>
                <Section  >
                    <SecundaryCard></SecundaryCard>
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "end" }}>
                            <Feather name="trash" size={18} color="red" />
                            <IconButton onPress={() => { navigation.navigate("CategoryRegister") }}>
                                <AntDesign name="edit" size={18} color="#120a8f" />
                            </IconButton>
                        </View>
                        <Shadow>
                            <PrimaryCard></PrimaryCard>
                        </Shadow>
                    </View>
                    <SecundaryCard></SecundaryCard>
                </Section>
                <Section>
                    <Title >Criadores</Title>
                </Section>
                <Section>
                    <Avatar source={AnaDoSerratec} />
                    <Avatar source={Doug} />
                    <Avatar source={Leo} />
                    <Avatar source={Matheus} />
                    <Avatar source={Thais} />
                    <Avatar source={Zelaum} />
                </Section>
            </View>
            <Gradient position='bottom' />
        </Container >
    )
};

export default InitialPage;