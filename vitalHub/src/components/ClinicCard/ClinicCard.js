import {
  ContainerCardList,
  TextBold,
} from "../AppointmentCard/Style";
import {
  ContentInformationCard,
  ContentNameClinicCard,
  ContentStar,
  ContentTime,
  NumberStar,
  TextTime,
  TitleCard,
} from "./Style";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const ClinicCard = ({ name, address }) => {
  return (
    <>
      <ContainerCardList>
        <ContentNameClinicCard>
          <TitleCard>{name}</TitleCard>
          <TextBold>{address}</TextBold>
        </ContentNameClinicCard>
        <ContentInformationCard>
          <ContentStar>
            <AntDesign name="star" size={24} color={"#F9A620"} />
            <NumberStar>5</NumberStar>
          </ContentStar>

          <ContentTime>
            <MaterialCommunityIcons
              name="calendar-outline"
              size={24}
              color={"#49B3BA"}
            />
            <TextTime>Seg-Sex</TextTime>
          </ContentTime>
        </ContentInformationCard>
      </ContainerCardList>
    </>
  );
};
