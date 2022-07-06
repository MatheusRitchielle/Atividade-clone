import logo from "../../../assets/logo.png"
import Input from "../../components/Input"
import InputEye from "../../components/InputEye";
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";
import { Container } from './../../components/Container/index';
import { Logo } from './../../components/Logo/index';
import { TextLink, Title, WrapperTextInfo } from './../../components/Text/index';
import { PrimaryButton, SecondaryButton, TextButton } from './../../components/Buttons/styles';
import { SpacingHeight } from "../../components/SpacingHeight";

const Login = ({ navigation }) => {

    return (
        <Container>
            <Gradient position='top' />
            <Logo source={logo} />
            <Title>Login</Title>
            <Input placeholder={"Digite seu login"} />
            <SpacingHeight height={spacings.extraLarge} />
            <InputEye placeholder={"Digite sua senha"} />
            <WrapperTextInfo >
                <SecondaryButton onPress={() => { navigation.navigate("PasswordRecovery") }} >
                    <TextLink >Esqueceu a sua senha? Clique aqui!</TextLink>
                </SecondaryButton>
            </WrapperTextInfo>
            <PrimaryButton onPress={() => { navigation.navigate("TabNavigator") }}>
                <TextButton>Entrar</TextButton>
            </PrimaryButton>
            <WrapperTextInfo>
                <SecondaryButton onPress={() => { navigation.navigate("Register") }}>
                    <TextLink>Não possui cadastro? Cadastre-se aqui.</TextLink>
                </SecondaryButton>
            </WrapperTextInfo>
            <Gradient position='bottom' />
        </Container>
    )
};

export default Login; 