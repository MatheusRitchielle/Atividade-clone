import { Container, SpacingHeight } from "../Login/styles";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import Input from "../../components/Input"
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";

const Register = ({ navigation }) => {
    return (
        <Container>
            <Gradient position='top' />
            <Input placeholder={"Nome"} />
            <SpacingHeight height={spacings.extraLarge} />
            <Input placeholder={"CPF"} />
            <SpacingHeight height={spacings.extraLarge} />
            <Input placeholder={"Data de Nascimento"} />
            <SpacingHeight height={spacings.extraLarge} />
            <Input placeholder={"Senha"} />
            <SpacingHeight height={spacings.extraLarge} />
            <Input placeholder={"Confirmar Senha"} />
            <SpacingHeight height={spacings.extraLarge} />
            <ButtonPrimary onPress={() => { navigation.navigate("RegisteredUser") }}>
                <TextButton>Cadastrar</TextButton>
            </ButtonPrimary>
            <Gradient position='toperson' />
        </Container>
    )
};

export default Register; 