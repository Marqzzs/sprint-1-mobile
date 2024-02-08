import { Text } from "react-native";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Container } from "../../components/Container/Style";
import { SubText } from "../RecoverPassword/Style";
import { Input, RecoverInput } from "../../components/Input/Style";
import { Button, ButtonTitle } from "../../components/Button/Style";

export const ResetPassword = () => {
  return (
    <Container>
      <Logo source={require("../../assets/logoVitalHub.png")} />
      <Title>Reset Password</Title>
      <SubText>Insert and confirm your new password</SubText>
      <Input placeholder={"New Password"}/>
      <RecoverInput placeholder={"Confirm new password"}/>
      <Button>
        <ButtonTitle>Confirm new password</ButtonTitle>
      </Button>
    </Container>
  );
};
