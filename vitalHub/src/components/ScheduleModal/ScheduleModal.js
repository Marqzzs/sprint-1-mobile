import { Button, ButtonSecundary, ButtonSecundaryTitle, ButtonTitle } from "../Button/Style";
import { Title } from "../Title/Style";
import { AgendModal, ContentSModal } from "./Style";
import { Modal } from "react-native";

export const ScheduleModal = ({ visible, setShowModalSchedule, ...rest }) => {
  // Função para fechar o modal
  const closeModal = () => {
    setShowModalSchedule(false);
  };
  return (
    <Modal {...rest} visible={visible} transparent={true} animation={"fade"}>
      <AgendModal>
        <ContentSModal>
          <Title>Make an appointment</Title>

          <Button>
            <ButtonTitle>Continue</ButtonTitle>
          </Button>

          <ButtonSecundary onPress={closeModal}>
            <ButtonSecundaryTitle>Cancel</ButtonSecundaryTitle>
          </ButtonSecundary>
        </ContentSModal>
      </AgendModal>
    </Modal>
  );
};
