import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    background-color: #4CAF50; 
    padding-vertical: 10px;
    padding-horizontal: 20px;
    margin-bottom: 10px;
    border-radius: 8px;
`
// Estilo para o botão vermelho, estendendo o estilo do botão base
export const RedButton = styled(Button)`
    background-color: #FF5733; /* Vermelho */
`;
