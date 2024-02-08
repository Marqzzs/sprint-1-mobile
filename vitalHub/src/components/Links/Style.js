import styled from "styled-components";

export const LinkMedium = styled.Text`

font-size: 14px;
font-family: 'MontserratAlternates_500Medium';
color: #8C8A97;
margin-top: 10px;
align-self: flex-start;
margin-left: 20px;
text-decoration: underline;
margin-bottom: 30px;
`

export const LinkBold = styled(LinkMedium)`

font-size: 16px;
font-family: "MontserratAlternates_600SemiBold";
color: #4D659D;
`

export const TextEmail = styled(LinkMedium)`
text-decoration: none;
font-size: 16px;
align-self: center;
margin: 0px 0px 15px 0px ;
color: #496BBA;
`

export const MiniLink = styled(LinkMedium)`
font-family: 'MontserratAlternates_600SemiBold';
align-self: center;
margin: 15px 0px 0px 0px;
color: #344F8F;
font-size: 16px;
`
