import {
	ButtonSecundary,
	ButtonSecundaryTitle,
} from '../../components/Button/Style';
import {
	SmallGroupModal,
	SmallTextModal,
	SpaceView,
} from '../../components/ConfirmModal/Style';
import { Container } from '../../components/Container/Style';
import { Title } from '../../components/Title/Style';
import {
	ContentProfile,
	ContentRow,
	InputProfile,
	InputRow,
	RowContentProfile,
	TextProfileInput,
} from '../Profile/Style';
import { ImageLocation } from './Style';

export const LocationAppointment = ({ navigation }) => {
	return (
		<Container>
			<ImageLocation
				source={{
					uri: 'https://i.ibb.co/j5MWDXZ/data-Sz-Zn-Yp-GWJu-YSSz-Eerk-YM-Vn-C7-Iw3-Dxv-GEHhq-E1n-X9-HTbg-6uyq0zd-Cnt-Zo-SKONu6ymz-HDSVAlb-JE6.png',
				}}
			/>

			<SpaceView>
				<Title>Clinic Nature</Title>
				<SmallTextModal>Jerumenha-PI</SmallTextModal>
			</SpaceView>

			<ContentProfile>
				<TextProfileInput>Address</TextProfileInput>
				<InputProfile placeholder={'Rua Vincenso, 97'} />
			</ContentProfile>
			<ContentRow>
				<RowContentProfile>
					<TextProfileInput>Number</TextProfileInput>
					<InputRow placeholder={'97'} />
				</RowContentProfile>
				{/*  */}
				<RowContentProfile>
					<TextProfileInput>neighborhood</TextProfileInput>
					<InputRow placeholder={'Jerumenha-PI'} />
				</RowContentProfile>
			</ContentRow>
			<ButtonSecundary onPress={() => navigation.replace('Main')}>
				<ButtonSecundaryTitle>Back</ButtonSecundaryTitle>
			</ButtonSecundary>
		</Container>
	);
};
