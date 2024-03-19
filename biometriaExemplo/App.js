import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import moment from 'moment';
import * as LocalAuthentication from 'expo-local-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function App() {
	const [history, setHistory] = useState({});
	const [biometricExist, setBiometricExist] = useState(false);
	const [authenticated, setAuthenticated] = useState(false);

	async function CheckExistAuthenticates() {
		//validar se o aparelho tem acesso a biometria
		const compatible = await LocalAuthentication.hasHardwareAsync();

		setBiometricExist(compatible);

		const types =
			await LocalAuthentication.supportedAuthenticationTypesAsync();
		console.log(LocalAuthentication.AuthenticationType[types[0]]);
	}

	async function SetHistory() {
		const objAuth = {
			dateAuthenticate: moment().format('DD/MM/YYYY HH:mm:ss'),
		};

		await AsyncStorage.setItem('authenticate', JSON.stringify(objAuth));

		setHistory(objAuth);
	}

	async function GetHistory() {
		const objAuth = await AsyncStorage.getItem('authenticate');

		if (objAuth) {
			setHistory(JSON.parse(objAuth));
		}
	}

	useEffect(() => {
		CheckExistAuthenticates();
		GetHistory();
	}, []);

	async function handleAuthentication() {
		const biometric = await LocalAuthentication.isEnrolledAsync();

		//validar se existe uma biometria cadastrada
		if (!biometric) {
			return alert(
				'falha ao logar',
				'Nao foi encontrado nenhuma biometria cadastrada',
			);
		}

		//caso exista
		const auth = await LocalAuthentication.authenticateAsync();

		setAuthenticated(auth.success);

		if (auth.success) {
			SetHistory();
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				{biometricExist
					? 'Seu dispositivo e compativel com a biometria'
					: 'Seu dispositivo nao suporta o faceid / biometria'}
			</Text>
			<TouchableOpacity
				style={styles.btnAuth}
				onPress={() => handleAuthentication()}
			>
				<Text style={styles.txtAuth}>Autenticar Acesso</Text>
			</TouchableOpacity>

			<Text
				style={[
					styles.txtReturn,
					{ color: authenticated ? 'green' : 'red' },
				]}
			>
				{authenticated ? 'Autenticado' : 'Nao autenticado'}
			</Text>

			{history.dateAuthenticate ? (
				<Text style={styles.txtHistory}>
					Ultimo acesso em {history.dateAuthenticate}
				</Text>
			) : (
				''
			)}
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
		lineHeight: 30,
		width: '70%',
	},
	btnAuth: {
		padding: 16,
		borderRadius: 15,
		margin: 20,
		backgroundColor: '#40E0D0',
	},
	txtAuth: {
		color: 'white',
		fontSize: 22,
		fontWeight: 'bold',
	},
	txtReturn: {
		fontSize: 22,
		textAlign: 'center',
		margin: 20,
	},
	txtHistory: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#858383',
		position: 'absolute',
		bottom: 120,
	},
});
