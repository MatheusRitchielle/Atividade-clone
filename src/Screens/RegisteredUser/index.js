import { Container } from './../../components/Container/index';
import Gradient from "../../components/Gradient";
import logo from "../../../assets/logo.png"
import spacings from "../../Theme/spacings";
import { Logo } from './../../components/Logo/index';
import { Title } from './../../components/Text/index';
import { SpacingHeight } from './../../components/SpacingHeight/index';
import { TextButton, PrimaryButton } from './../../components/Buttons/styles';

const RegisteredUser = ({ navigation }) => {
    return (
        <Container>
            <Gradient position='top' />
            <Logo source={logo} />
            <Title>Usuário cadastrado com sucesso!</Title>
            <SpacingHeight height={spacings.extraLarge} />
            <PrimaryButton onPress={() => { navigation.navigate("Login") }}>
                <TextButton>Login</TextButton>
            </PrimaryButton>
            <Gradient position='toperson' />
        </Container>
    )
};

export default RegisteredUser; 