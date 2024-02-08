import { Text } from "react-native";
import { Container } from "../../components/Container/Style";
import { AntDesign } from "@expo/vector-icons";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { SubText } from "./Style";
import { RecoverInput } from "../../components/Input/Style";
import { Button, ButtonTitle } from "../../components/Button/Style";

export const RecoverPassword = () => {
  return (
    <Container>
      <AntDesign name="leftcircle" size={24} color="#49B3BA" />
      <Logo source={require("../../assets/logoVitalHub.png")} />
      <Title>Recover Password</Title>
      <SubText>
        Enter your registered email address below and we'll send you a link to
        recover your password.
      </SubText>
      <RecoverInput placeholder={"Username or E-mail"} />
      <Button>
        <ButtonTitle>Continue</ButtonTitle>
      </Button>
    </Container>
  );
};
