import { SmallTextModal } from "../../components/ConfirmModal/Style";
import { Container, ScrollContainer } from "../../components/Container/Style";
import { InputMedicalRecords, InputRecord } from "../../components/Input/Style";
import { BigGroupModal } from "../../components/LocationModal/Style";
import { Title } from "../../components/Title/Style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import {
  ContentName,
  ContentProfile,
  ProfilePicture,
  TextProfileInput,
} from "../Profile/Style";
import {
  ButtonTextVisualize,
  ContentSend,
  FileVisualize,
  TextSend,
  ViewPhotoSend,
} from "./Style";
import { ButtonSecundaryTitle } from "../../components/Button/Style";
import { ButtonText } from "../../components/AppointmentCard/Style";

export const VisualizePrescription = () => {
  return (
    <ScrollContainer>
      <Container>
        <ProfilePicture
          source={{
            uri: "https://i.ibb.co/pzb7dV8/4ac0d625-25c8-40b1-a39c-6389a4066e25.jpg",
          }}
        />
        <ContentName>
          <Title>Dr. Hans Chucrute</Title>
          <BigGroupModal>
            <SmallTextModal>Plastic Surgeon</SmallTextModal>
            <SmallTextModal>CRM-15287</SmallTextModal>
          </BigGroupModal>
        </ContentName>
        <ContentProfile>
          <TextProfileInput>Query description:</TextProfileInput>
          <InputRecord placeholder={"Description here"} />
        </ContentProfile>
        <ContentProfile>
          <TextProfileInput>Patient diagnosis:</TextProfileInput>
          <InputMedicalRecords placeholder={"Diagnosis here"} />
        </ContentProfile>
        <ContentProfile>
          <TextProfileInput>Medical prescription:</TextProfileInput>
          <InputRecord placeholder={"Prescription here"} />
        </ContentProfile>
        <ContentProfile>
          <FileVisualize>
            <MaterialCommunityIcons
              name="image-filter-center-focus-strong"
              size={24}
              color="black"
            />

            <Title>No photo informed</Title>
          </FileVisualize>
        </ContentProfile>
        <ContentSend>
          <ViewPhotoSend>
            <MaterialIcons name="add-a-photo" size={24} color="white" />
            <TextSend>Send</TextSend>
          </ViewPhotoSend>
          <ButtonTextVisualize>Cancel</ButtonTextVisualize>
        </ContentSend>
        <ContentProfile>
          <InputRecord placeholder={"Blood test result: all normal"} />
        </ContentProfile>
        <ButtonSecundaryTitle>Back</ButtonSecundaryTitle>
      </Container>
    </ScrollContainer>
  );
};