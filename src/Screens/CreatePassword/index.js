import logo from "../../../assets/logo.png"
import Input from "../../components/Input"
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";
import { Container } from './../../components/Container/index';
import { Logo } from './../../components/Logo/index';
import { Title } from './../../components/Text/index';
import { SpacingHeight } from "../../components/SpacingHeight";
import { PrimaryButton, TextButton } from './../../components/Buttons/styles';

const CreatePassword = ({navigation}) => {
    return (
        <Container>
            <Gradient position='top' />
            <Logo source={logo} />
            <Title>Criar Senha</Title>
            <Input placeholder={"Digite sua nova senha"} />
            <SpacingHeight height={spacings.extraLarge} />
            <Input placeholder={"Repita sua nova senha"} />
            <SpacingHeight height={spacings.extraLarge} />
            <PrimaryButton onPress={() => {navigation.navigate("ChangedPassword")}}>
                <TextButton>Alterar</TextButton>
            </PrimaryButton>
            <Gradient position='toperson' />
        </Container>
    )
};

export default CreatePassword; 