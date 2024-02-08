import { Button, ButtonTitle } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { Input, RecoverInput } from "../../components/Input/Style";
import { MiniLink } from "../../components/Links/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { SubText } from "../RecoverPassword/Style";

export const CreateAccount = () => {
  return (
    <Container>
      <Logo source={require("../../assets/logoVitalHub.png")} />
      <Title>Create Account</Title>
      <SubText>Enter your e-mail address and password to register.</SubText>
      <Input placeholder={"Username or E-mail"}/>
      <Input placeholder={"Password"} secureTextEntry={true}/>
      <RecoverInput placeholder={"Confirm Password"} secureTextEntry={true}/>
      <Button>
        <ButtonTitle>Register</ButtonTitle>
      </Button>
      <MiniLink>Cancel</MiniLink>
    </Container>
  );
};
