import { Modal } from "react-native";
import { Title } from "../Title/Style";
import { ButtonSecundary, ButtonSecundaryTitle } from "../Button/Style";

const CancellationModal = ({visible, setShowCancel, ...rest}) => {
    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <Title>Cancelar consulta</Title>

            <ButtonSecundary onPress={() => setShowModalCancel(false)}>
                <ButtonSecundaryTitle>Cancel</ButtonSecundaryTitle>
            </ButtonSecundary>
        </Modal>
    )
}

export default CancellationModal;