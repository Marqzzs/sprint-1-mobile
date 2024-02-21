import { AntDesign } from "@expo/vector-icons";
import {
  ButtonCard,
  ButtonText,
  ClockCard,
  ContainerCardList,
  ContentCard,
  DataProfileCard,
  ProfileData,
  ProfileImage,
  ProfileName,
  TextAge,
  TextBold,
  ViewRow,
} from "./Style";

export const AppointmentCard = ({
  situacao = "pendente",
  onPressCancel,
  onPressAppointment,
}) => {
  return (
    <>
      {/* container principal */}
      <ContainerCardList>
        {/* imagem de perfil */}
        <ProfileImage source={{ uri: "https://github.com/ojuaum1.png" }} />
        {/* conteudo ao lado da imagem de perfil */}
        <ContentCard>
          <DataProfileCard>
            <ProfileName>Joao</ProfileName>
            <ProfileData>
              <TextAge>45 anos</TextAge>
              <TextBold>Rotina</TextBold>
            </ProfileData>
          </DataProfileCard>

          <ViewRow>
            <ClockCard situacao={situacao}>
              <AntDesign
                name="clockcircle"
                size={14}
                color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"}
              />
              <TextBold situacao={situacao} color={"#49B3BA"}>
                14:00
              </TextBold>
            </ClockCard>

            {/* valida e mostra o tipo de botao conforme a situacao */}
            {situacao == "cancelado" ? (
              <></>
            ) : situacao == "pendente" ? (
              <ButtonCard onPress={onPressCancel}>
                <ButtonText situacao={situacao}>Cancelar</ButtonText>
              </ButtonCard>
            ) : (
              <ButtonCard onPress={onPressAppointment}>
                <ButtonText situacao={situacao}>Ver Prontuario</ButtonText>
              </ButtonCard>
            )}
          </ViewRow>
        </ContentCard>
      </ContainerCardList>
    </>
  );
};
