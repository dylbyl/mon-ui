import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import Routes from '../constants/Routes.js';
import Theme from '../constants/Theme.js';

export default function DemoView({ route, navigation }) {
	const { name } = route.params;
	let imageUri = 'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png'
	return (
		<View style={styles.container}>
			<Image source={{uri: imageUri}} style={styles.pikachu} />
			<Text style={styles.welcome}>Welcome to Make Up a Mon!</Text>
			<TouchableOpacity
				onPress={() => alert('Hello World!')}
				style={styles.demoButton}
			>
				<Text
					style={styles.demoButtonText}
				>
					Generate a random Mon, {name}
				</Text>
			</TouchableOpacity>
			<Button
				title="Not you? Change it in Details"
				onPress={() => navigation.navigate(Routes.details, {
					name: "Dylan",
					color: Theme.green
				})}
			/>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.gbYellow,
		alignItems: 'center',
		justifyContent: 'center',
	},
	welcome: {
		color: Theme.black,
		fontSize: 18
	},
	logo: {
		width: 305,
		height: 159
	},
	pikachu: {
		height: 198,
		width: 220,
		marginBottom: 8
	},
	demoButton: {
		backgroundColor: Theme.red,
		padding: 20,
		borderRadius: 10
	},
	demoButtonText: {
		fontSize: 20,
		color: Theme.gbYellow
	}
});