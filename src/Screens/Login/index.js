import { Container, Logo, Title, TextInfo, SpacingHeight, WrapperTextInfo, TextLink, SecondaryButton } from "../Login/styles";
import logo from "../../../assets/logo.png"
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import Input from "../../components/Input"
import InputEye from "../../components/InputEye";
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";

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
                <SecondaryButton onPress={() => {navigation.navigate("PasswordRecovery")}} >
                    <TextLink >Esqueceu a sua senha? Clique aqui!</TextLink>
                </SecondaryButton>
            </WrapperTextInfo>
            <ButtonPrimary onPress={() => {navigation.navigate("TabNavigator")}}>
                <TextButton>Entrar</TextButton>
            </ButtonPrimary>
            <WrapperTextInfo>
                <SecondaryButton onPress={() => {navigation.navigate("Register")}}>
                    <TextLink>Não possui cadastro? Cadastre-se aqui.</TextLink>
                </SecondaryButton>
            </WrapperTextInfo>
            <Gradient position='bottom' />
        </Container>
    )
};

export default Login; 