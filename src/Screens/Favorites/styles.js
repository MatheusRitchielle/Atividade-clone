import styled from "styled-components/native";

export const CardGeneric = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 5px;
  border: 3px solid;
  border-color: #00ffff;
  border-radius: 5px;
`;

export const ContainerFavoritos = styled.View`
  flex: 1;
  padding: 40px;
  justify-content: center;
`;

export const FotoEstilizada = styled.Image`
    width: 170px;
    height: 10px;
`;

export const Shadow = styled.View`
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
