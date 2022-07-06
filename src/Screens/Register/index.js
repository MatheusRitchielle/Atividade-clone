
import { Container } from './../../components/Container/index';
import Gradient from './../../components/Gradient/index';
import Input from './../../components/Input/index';
import { SpacingHeight } from './../../components/SpacingHeight/index';
import { PrimaryButton, TextButton } from './../../components/Buttons/styles';
import spacings from "../../Theme/spacings";

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
            <PrimaryButton onPress={() => { navigation.navigate("RegisteredUser") }}>
                <TextButton>Cadastrar</TextButton>
            </PrimaryButton>
            <Gradient position='toperson' />
        </Container>
    )
};

export default Register; 