import { Button, ButtonTitle } from "../../components/Button/Style";
import { Container, ScrollContainer } from "../../components/Container/Style";
import {
  AddresRow,
  ContentName,
  ContentProfile,
  ContentProfileRow,
  InputProfile,
  InputProfileRow,
  ProfilePicture,
  TextProfileEmail,
  TextProfileInput,
  TextProfileName,
} from "./Style";

export const Profile = () => {
  return (
    <ScrollContainer>
      <Container>
        <ProfilePicture source={{ uri: "https://github.com/marqzzs.png" }} />
        <ContentName>
          <TextProfileName>Richard Kosta</TextProfileName>
          <TextProfileEmail>richard.kosta@gmail.com</TextProfileEmail>
        </ContentName>
        {/*  */}
        <ContentProfile>
          <TextProfileInput>Date of birth:</TextProfileInput>
          <InputProfile placeholder={"04/05/1999"} />
        </ContentProfile>
        {/*  */}
        <ContentProfile>
          <TextProfileInput>CPF:</TextProfileInput>
          <InputProfile placeholder={"859*********"} />
        </ContentProfile>
        {/*  */}
        <ContentProfile>
          <TextProfileInput>Address</TextProfileInput>
          <InputProfile placeholder={"Rua Vincenso Silva, 987"} />
        </ContentProfile>
        {/*  */}
        <AddresRow>
          <ContentProfileRow>
            <TextProfileInput>CEP</TextProfileInput>
            <InputProfileRow placeholder={"06582-444"} />
          </ContentProfileRow>
          
          <ContentProfileRow>
            <TextProfileInput>City</TextProfileInput>
            <InputProfileRow placeholder={"Moema-SP"} />
          </ContentProfileRow>
        </AddresRow>

        <Button>
          <ButtonTitle>Save</ButtonTitle>
        </Button>
      </Container>
    </ScrollContainer>
  );
};
