import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import Routes from '../constants/Routes.js';
import Theme from '../constants/Theme.js';
import Logo from './logo.js';

export default function DemoView({ route, navigation }) {
	const { name } = route.params;
	return (
		<View style={styles.container}>
			<Logo />
			<Text style={styles.welcome}>Welcome to Make Up a Mon!</Text>
			<TouchableOpacity
				onPress={() => alert('Hello World!')}
				style={styles.demoButton}
			>
				<Text
					style={styles.demoButtonText}
				>
					Test the Alerts, {name}
				</Text>
			</TouchableOpacity>
			<Button
				title="Not you? Change it in Details"
				onPress={() => navigation.navigate(Routes.details, {
					name: "Dylan",
					color: Theme.green
				})}
			/>
			<Button
				title="Generate a random Mon"
				onPress={() => navigation.navigate(Routes.random)}
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