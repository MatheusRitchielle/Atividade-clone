import logo from "../../../assets/logo.png"
import {  TextButton } from "../../components/Buttons/styles";
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";
import { Container } from './../../components/Container/index';
import { Logo } from './../../components/Logo/index';
import { Title } from './../../components/Text/index';
import Input from './../../components/Input/index';
import { SpacingHeight } from './../../components/SpacingHeight/index';
import { PrimaryButton } from './../../components/Buttons/styles';

const PasswordRecovery = ({navigation}) => {
    return (
        <Container>
            <Gradient position='top'/>
            <Logo source={logo} />
            <Title>Recuperar Senha</Title>
            <Input placeholder={"Digite seu CPF"} />
            <SpacingHeight height={spacings.extraLarge} />
            <PrimaryButton  onPress={() => {navigation.navigate("CreatePassword")}}>
                <TextButton>Recuperar</TextButton>
            </PrimaryButton>
            <Gradient position='toperson'/>
        </Container>
    )
};

export default PasswordRecovery; 