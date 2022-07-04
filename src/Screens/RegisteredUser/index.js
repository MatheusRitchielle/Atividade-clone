import { Container, Logo, Title, SpacingHeight} from "../Login/styles";
import logo from "../../../assets/logo.png"
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";

const RegisteredUser = ({navigation}) => {
    return (
        <Container>
            <Gradient position='top'/>
            <Logo source={logo} /> 
            <Title>Usuário cadastrado com sucesso!</Title>
            <SpacingHeight height={spacings.extraLarge} />
            <ButtonPrimary  onPress={() => {navigation.navigate("Login")}}>
                <TextButton>Login</TextButton>
            </ButtonPrimary>
            <Gradient position='toperson'/>
        </Container>
    )
};

export default RegisteredUser; 