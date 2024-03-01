import { SmallTextModal } from "../../components/ConfirmModal/Style";
import { Container, ScrollContainer } from "../../components/Container/Style";
import { InputMedicalRecords, InputRecord } from "../../components/Input/Style";
import { BigGroupModal } from "../../components/LocationModal/Style";
import { Title } from "../../components/Title/Style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  ContentName,
  ContentProfile,
  ProfilePicture,
  TextProfileInput,
} from "../Profile/Style";
import { FileVisualize } from "./Style";

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
      </Container>
    </ScrollContainer>
  );
};
