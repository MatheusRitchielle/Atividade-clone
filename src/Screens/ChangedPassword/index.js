import logo from "../../../assets/logo.png"
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";
import { Container } from './../../components/Container/index';
import { Title } from './../../components/Text/index';
import { SpacingHeight } from "../../components/SpacingHeight";
import { PrimaryButton, TextButton } from './../../components/Buttons/styles';
import { Logo } from './../../components/Logo/index';

const ChangedPassword = ({navigation}) => {
    return (
        <Container>
            <Gradient position='top'/>
            <Logo source={logo} /> 
            <Title>Senha alterada com sucesso!</Title>
            <SpacingHeight height={spacings.extraLarge} />
            <PrimaryButton  onPress={() => {navigation.navigate("Login")}}>
                <TextButton>Login</TextButton>
            </PrimaryButton>
            <Gradient position='toperson'/>
        </Container>
    )
};

export default ChangedPassword; 