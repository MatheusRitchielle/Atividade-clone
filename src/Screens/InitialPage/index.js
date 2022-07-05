import { Text, View } from 'react-native';
import { Container, Logo, Title, TextInfo, SpacingHeight, WrapperTextInfo, TextLink, SecondaryButton } from "../Login/styles";
import Gradient from "../../components/Gradient";

const InitialPage = () => {
    return (
        <Container>
            <Gradient position='top' />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
            <Gradient position='bottom' />
        </Container>
    )
};

export default InitialPage;