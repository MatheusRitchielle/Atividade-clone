import Input from "../../components/Input"
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";
import { Feather } from '@expo/vector-icons';
import { Container } from './../../components/Container/index';
import { SpacingHeight } from "../../components/SpacingHeight";
import { TextLink, WrapperTextInfo } from "../../components/Text";
import { PrimaryButton, SecondaryButton } from './../../components/Buttons/styles';

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
                <PrimaryButton onPress={() => { navigation.navigate("InitialPage") }} >
                    <TextLink >Cadastrar</TextLink>
                </PrimaryButton>
            </WrapperTextInfo>
            <Gradient position='bottom' />
        </Container>
    )
};

export default CategoryRegister; 