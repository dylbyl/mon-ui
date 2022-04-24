import { StyleSheet, Text, View, Button } from 'react-native';
import Routes from '../constants/Routes';
import Theme from '../constants/Theme';

export default function DemoView2({ route, navigation }) {
	const { name, color } = route.params;
	
	const styles = StyleSheet.create({
		demo: {
			color: color
		},
	});

	return (
	  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<Text>Details Screen</Text>
		<Text style={styles.demo}>Hello {name} </Text>
		<Button
			title="Go even further beyond. Plus Ultra!"
			onPress={() => navigation.push(Routes.details, {
				name: "Angie",
				color: Theme.purple
			})}
		/>
		<Button
			title="Oops, went too far"
			onPress={() => navigation.goBack()}
		/>
		<Button
			title="Oh God I'm sick, take me back"
			onPress={() => navigation.popToTop()}
		/>
		<Button
			title="That ain't me"
			onPress={() => navigation.setParams({
				name: "Dalton",
				color: Theme.blue
			})}
		/>
		<Button
			title="I hate that color"
			onPress={() => navigation.setParams({
				color: Theme.yellowOrange
			})}
		/>
		<Button
			title="That's the right name, let's save that"
			onPress={() => navigation.navigate({
				name: Routes.home,
				params: {name: name},
				merge: true
			})}
		/>
		<Button
			title="I'm Matt"
			onPress={() => navigation.setOptions({
				title: "Oh god, it's Matt"
			})}
		/>
	  </View>
	);
  }