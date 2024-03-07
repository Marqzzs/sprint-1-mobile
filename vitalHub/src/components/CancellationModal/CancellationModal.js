import { Modal } from 'react-native';
import { Title } from '../Title/Style';
import {
	ButtonModal,
	ButtonSecundary,
	ButtonSecundaryTitle,
	ButtonTitle,
} from '../Button/Style';
import { ModalContent, ModalText, PatientModal } from './Style';

const CancellationModal = ({
	visible,
	setShowModalCancel,
	navigation,
	...rest
}) => {
	async function handleClose(screen) {
		await setShowModalCancel(false);
		navigation.replace(screen);
	}
	return (
		<Modal
			{...rest}
			visible={visible}
			transparent={true}
			animationType="fade"
		>
			<PatientModal>
				<ModalContent>
					<Title>Cancelar consulta</Title>
					<ModalText>
						Ao cancelar essa consulta, abrirá uma possível
						disponibilidade no seu horário, deseja mesmo cancelar
						essa consulta?
					</ModalText>
					<ButtonModal onPress={() => handleClose('Home')}>
						<ButtonTitle>Confirm</ButtonTitle>
					</ButtonModal>

					<ButtonSecundary onPress={() => setShowModalCancel(false)}>
						<ButtonSecundaryTitle>Cancel</ButtonSecundaryTitle>
					</ButtonSecundary>
				</ModalContent>
			</PatientModal>
		</Modal>
	);
};

export default CancellationModal;
