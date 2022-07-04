import { Container, Logo, Title, SpacingHeight } from "../Login/styles";
import logo from "../../../assets/logo.png"
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import Input from "../../components/Input"
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";

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
            <ButtonPrimary onPress={() => {navigation.navigate("ChangedPassword")}}>
                <TextButton>Alterar</TextButton>
            </ButtonPrimary>
            <Gradient position='toperson' />
        </Container>
    )
};

export default CreatePassword; 