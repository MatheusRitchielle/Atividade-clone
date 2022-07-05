import Gradient from "../../components/Gradient";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import logo from "../../../assets/logo.png";
import { Container, Logo, Title } from "../Login/styles";

const SuccessfulPurchase = ({ navigation }) => {

    return (
        <Container>
            <Gradient position='top' />
            <Logo source={logo} />
            <Title>Compra efetuada com sucesso!</Title>
            <ButtonPrimary onPress={() => {navigation.navigate("TabNavigator")}}>
                <TextButton>Voltar</TextButton>
            </ButtonPrimary>
            <Gradient position='bottom' />
        </Container>
    )
};

export default SuccessfulPurchase;