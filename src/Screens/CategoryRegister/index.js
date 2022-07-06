import { Container, SpacingHeight, WrapperTextInfo, TextLink, SecondaryButton } from "../Login/styles";
import Input from "../../components/Input"
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";
import { ButtonPrimary } from './../../components/CustomButton/styles';
import { Feather } from '@expo/vector-icons';

const CategoryRegister = ({ navigation }) => {
    return (
        <Container>
            <Gradient position='top' />
            <Input placeholder={"Nome"} />
            <SpacingHeight height={spacings.extraLarge} />
            <Input placeholder={"Imagem"} />
            <WrapperTextInfo >
                <SecondaryButton >
                    <TextLink >
                        Selecionar imagem
                        <Feather name="upload" size={18} />
                    </TextLink>
                </SecondaryButton>
            </WrapperTextInfo>
            <WrapperTextInfo >
                <ButtonPrimary onPress={() => { navigation.navigate("InitialPage") }} >
                    <TextLink >Cadastrar</TextLink>
                </ButtonPrimary>
            </WrapperTextInfo>
            <Gradient position='bottom' />
        </Container>
    )
};

export default CategoryRegister; 