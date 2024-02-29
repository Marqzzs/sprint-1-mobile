import { Image } from "react-native";
import { ContainerCardList, TextBold } from "../AppointmentCard/Style";
import { ContentNameClinicCard, ContentNameDoctorCard, TitleCard } from "../ClinicCard/Style";
import { DoctorCardImage } from "./Style";

export const DoctorsCard = ({ nome, image, especialidade }) => {
  return (
    <ContainerCardList>
      {/* Utilize o componente Image para exibir a imagem */}
      <DoctorCardImage source={{ uri: image }} />
      <ContentNameDoctorCard>
        <TitleCard>{nome}</TitleCard>
        <TextBold>{especialidade}</TextBold>
      </ContentNameDoctorCard>
    </ContainerCardList>
  );
};
