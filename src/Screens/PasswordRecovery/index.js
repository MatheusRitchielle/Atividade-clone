import { Container, Logo, Title, TextInfo, SpacingHeight, WrapperTextInfo } from "../Login/styles";
import logo from "../../../assets/logo.png"
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import Input from "../../components/Input"
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";

const PasswordRecovery = ({navigation}) => {
    return (
        <Container>
            <Gradient position='top'/>
            <Logo source={logo} />
            <Title>Recuperar Senha</Title>
            <Input placeholder={"Digite seu CPF"} />
            <SpacingHeight height={spacings.extraLarge} />
            <ButtonPrimary  onPress={() => {navigation.navigate("CreatePassword")}}>
                <TextButton>Recuperar</TextButton>
            </ButtonPrimary>
            <Gradient position='toperson'/>
        </Container>
    )
};

export default PasswordRecovery; 