import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//importar os recursos da biblioteca
import * as Notifications from 'expo-notifications';

//solicitar as permissoes de notificacao ao iniciar o app
Notifications.requestPermissionsAsync();

//definir como as notificacoes devem ser tratados quando recebidos
Notifications.setNotificationHandler({
	handleNotification: async () => ({
		//mostra o alerta quando a notificao for recebida
		shouldShowAlert: true,

		//reproduz ou nao som ao receber a notificao
		shouldPlaySound: true,

		//configura o numero de notificacoes no icone do app
		shouldSetBadge: true,
	}),
});

export default function App() {
	//funcao para lidar com a chamada da notificacao
	const handleCallNotifications = async () => {
		//obtem o status das permissoes
		const { status } = await Notifications.getPermissionsAsync();

		//verifica se o usuario concedeu permissao para as notificacoes
		if (status !== 'granted') {
			alert('Voce nao deixou as notificacoes ativas');
			return;
		}

		//obter o token de envio de notificacao
		// const token = await Notifications.getExpoPushTokenAsync();
		// console.log(token);

		//agendar uma notificao para ser exibida apos 5 segundos
		await Notifications.scheduleNotificationAsync({
			content: {
				title: 'Hello World!',
				body: 'Criando uma poc para implementar expo notification',
			},
			trigger: {
				seconds: 5,
			},
		});
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={handleCallNotifications}
			>
				<Text style={styles.text}>
					Clique aqui para envio da notificao
				</Text>
			</TouchableOpacity>
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
	button: {
		width: '80%',
		height: 80,
		backgroundColor: 'green',
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
