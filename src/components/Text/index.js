import styled from 'styled-components/native';
import colors from '../../Theme/colors';

export const Title = styled.Text`
    font-size: 18px;
    color: ${colors.secondary};
    margin: 40px 0;
    font-weight: 800;
    line-height: 22px;
`;

export const TextInfo = styled.TouchableOpacity`
    color: ${colors.secondary};
    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    padding: 10px;
    font-family: 'Roboto';
`;

export const TextLink = styled.Text`
    color: ${colors.secondary};
    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    padding: 10px;
    font-family: 'Roboto';
`;

export const WrapperTextInfo =  styled.TouchableWithoutFeedback`
    padding: 10px;
`;