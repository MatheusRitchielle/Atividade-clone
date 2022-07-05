import styled from "styled-components/native";

export const CardGeneric = styled.View`
  background-color: #fff;
  width: 150px;
  padding: 5px;
  border: 3px solid;
  border-color: #00ffff;
  border-radius: 5px;
`;

export const ContainerFavoritos = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 40px;
  justify-content: center;
`;

export const FotoEstilizada = styled.Image`
    width: 100px;
    height: 100px;
`;

export const Shadow = styled.View`
    border-radius: 5px;
    width: 150px;
    box-shadow: 0px 4px 4px  rgba(0, 0, 0, 0.25);
`;

export const ContainerList = styled.View`
  margin-top: 10px;
  width: 350px;
`;