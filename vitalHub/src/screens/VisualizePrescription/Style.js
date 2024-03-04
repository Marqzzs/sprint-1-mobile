import styled from "styled-components";
import { ButtonText } from "../../components/AppointmentCard/Style";

export const FileVisualize = styled.View`
width: 100%;
height: 111px;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: #F5F3F3;
border-radius: 5px;
gap: 5px;
`

export const ContentSend = styled.View`
  width: 90%;
  height: 63px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom-width: 1px; /* Definindo a largura da borda inferior */
  border-bottom-color: #8C8A97; /* Definindo a cor da borda inferior */
  margin-bottom: 21px;
`;


export const ViewPhotoSend = styled.View`
width: 48%;
height: 44px;
flex-direction: row;
gap: 10px;
background-color: #49B3BA;
border-radius: 5px;
align-items: center;
justify-content: center;
`

export const TextSend = styled.Text`
font-size: 14px;
font-family: "MontserratAlternates_700Bold";
color: #FFFFFF;
`

export const ButtonTextVisualize = styled.Text`
font-size: 14px;
font-family: "MontserratAlternates_500Medium";
color: #C81D25;
margin-right: 52px;
`