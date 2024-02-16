import styled from "styled-components";
import { Input } from "../../components/Input/Style";

export const ProfilePicture = styled.Image`
width: 100%;
height: 280px;
`

export const ContentName = styled.View`
width: 289px;
height: 100px;
border-radius: 5px;
background-color: #FFFFFF;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
margin-top: -50px;
margin-bottom: 30px;
`

export const TextProfileName = styled.Text`
font-size: 16px;
font-family: 'MontserratAlternates_600SemiBold';
color: #33303E;
`

export const TextProfileEmail = styled.Text`
font-size: 14px;
font-family: 'Quicksand_500Medium';
color: #4E4B59;
`

export const ContentProfile = styled.View`
width: 320px;
height: 83px;
flex-direction: column;
align-items: flex-start;
margin-bottom: 24px;
`

export const TextProfileInput = styled.Text`
font-size: 16px;
font-family: 'Quicksand_600SemiBold';
color: #000000;
`

export const InputProfile = styled(Input)`
color: #33303E;
font-size: 14px;
font-family: 'MontserratAlternates_500Medium';
border: none;
background-color: #F5F3F3;
`

export const InputProfileRow = styled(InputProfile)`
width: 144px;
`

export const ContentProfileRow = styled.View`
  width: 80%;
  height: auto;
  flex-direction: row;
  gap: 30px; /* Espaçamento horizontal entre os itens */
`;