import styled from "styled-components";
import { Button, ButtonTitle } from "../Button/Style";

export const ContentButton = styled.View`
width: 90%;
height: auto;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const ButtonFilter = styled(Button)`
width: 100px;
height: 35px;
padding: 8px 12px 8px 12px;
justify-content: center;
`
export const ButtonFilterWhite = styled(ButtonFilter)`
background-color: #FBFBFB;
border: 2px solid #607EC5;
`

export const ButtonTitleFilter = styled(ButtonTitle)`
font-size: 12px;
font-family: 'MontserratAlternates_600SemiBold';
`

export const ButtonTitleFilterBlue = styled(ButtonTitleFilter)`
color: #607EC5;
`