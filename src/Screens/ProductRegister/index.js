import spacings from "../../Theme/spacings";
import { Container } from './../../components/Container/index';
import Gradient from './../../components/Gradient/index';
import Input from './../../components/Input/index';
import { SpacingHeight } from './../../components/SpacingHeight/index';
import { TextLink, WrapperTextInfo } from './../../components/Text/index';
import { Feather } from '@expo/vector-icons';

const ProductRegister = ({ navigation }) => {
    return (
        <Container>
            <Gradient position='top' />
            <Input placeholder={"Nome"} />
            <SpacingHeight height={spacings.extraLarge} />
            <Input placeholder={"Preço R$"} />
            <SpacingHeight height={spacings.extraLarge} />
            <Input placeholder={"Quantidade em estoque"} />
            <SpacingHeight height={spacings.extraLarge} />
            <Input placeholder={"Imagem"} />
            <WrapperTextInfo >
                <SecondaryButton >
                    <TextLink >
                        Selecionar imagem
                        <Feather name="upload" size={18} />
                    </TextLink>
                </SecondaryButton>
            </WrapperTextInfo>
            <WrapperTextInfo >
                <PrimaryButton onPress={() => { navigation.navigate("Product") }} >
                    <TextLink >Cadastrar</TextLink>
                </PrimaryButton>
            </WrapperTextInfo>
            <Gradient position='bottom' />
        </Container>
    )
};

export default ProductRegister; 