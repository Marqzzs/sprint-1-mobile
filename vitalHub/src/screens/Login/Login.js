import { Container } from '../../components/Container/Style';
import { Logo } from '../../components/Logo/Style';
import { Title } from '../../components/Title/Style';
import { Input } from '../../components/Input/Style';
import { LinkBold, LinkMedium } from '../../components/Links/Style';
import {
	Button,
	ButtonGoogle,
	ButtonTitle,
	ButtonTitleGoogle,
} from '../../components/Button/Style';
import { AntDesign } from '@expo/vector-icons';
import { ContentAccount, TextAccount } from './Style';

export const Login = ({ navigation }) => {
	// Chamar a funcao de login
	async function Login() {
		navigation.navigate('Main');
	}
	return (
		<Container>
			<Logo source={require('../../assets/logoVitalHub.png')} />

			<Title>Log in or create an account</Title>

			<Input
				placeholder={'Username or email...'}
				onChangeText={(txt) => setEmail(txt)}
			/>

			<Input
				placeholder={'Password...'}
				secureTextEntry={true}
				onChangeText={(txt) => setSenha(txt)}
			/>

			<LinkMedium onPress={() => navigation.navigate('RecoverPassword')}>
				Forgot you password?
			</LinkMedium>

			<Button onPress={() => Login()}>
				<ButtonTitle>Log in</ButtonTitle>
			</Button>

			<ButtonGoogle>
				<AntDesign name="google" size={18} color="#496BBA" />
				<ButtonTitleGoogle>Log in with Google</ButtonTitleGoogle>
			</ButtonGoogle>

			<ContentAccount>
				<TextAccount>
					Don't have an account?{' '}
					<LinkBold
						onPress={() => navigation.navigate('CreateAccount')}
					>
						Create an account now
					</LinkBold>
				</TextAccount>
			</ContentAccount>
		</Container>
	);
};
