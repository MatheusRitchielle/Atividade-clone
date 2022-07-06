import Gradient from "../../components/Gradient";
import logo from "../../../assets/logo.png";
import { Title } from "../../components/Text";
import { Logo } from './../../components/Logo/index';
import { Container } from './../../components/Container/index';
import { PrimaryButton, TextButton } from './../../components/Buttons/styles';

const SuccessfulPurchase = ({ navigation }) => {

    return (
        <Container>
            <Gradient position='top' />
            <Logo source={logo} />
            <Title>Compra efetuada com sucesso!</Title>
            <PrimaryButton onPress={() => {navigation.navigate("TabNavigator")}}>
                <TextButton>Voltar</TextButton>
            </PrimaryButton>
            <Gradient position='bottom' />
        </Container>
    )
};

export default SuccessfulPurchase;