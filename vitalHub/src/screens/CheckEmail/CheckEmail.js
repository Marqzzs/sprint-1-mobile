import { Text } from "react-native";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Container } from "../../components/Container/Style";
import { ContentAccount, TextAccount } from "../Login/Style";
import {
  Link,
  LinkBold,
  MiniLink,
  TextCheck,
  TextEmail,
} from "../../components/Links/Style";
import { ContentCheck } from "./Style";
import { ContentIconSetinha, SubText } from "../RecoverPassword/Style";
import { Button, ButtonTitle } from "../../components/Button/Style";

export const CheckEmail = () => {
  return (
    <Container>
      <ContentIconSetinha>
        <AntDesign name="leftcircle" size={24} color="#49B3BA" />
      </ContentIconSetinha>
      <Logo source={require("../../assets/logoVitalHub.png")} />
      <Title>Check your e-mail</Title>
      <ContentCheck>
        <SubText>Enter the 4-digit code sent to</SubText>
        <TextEmail>username@email.com</TextEmail>
      </ContentCheck>
      <Button>
        <ButtonTitle>Enter</ButtonTitle>
      </Button>
      <MiniLink>Resend Code</MiniLink>
    </Container>
  );
};
