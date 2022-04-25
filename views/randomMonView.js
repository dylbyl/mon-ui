import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SectionList, StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import Routes from '../constants/Routes.js';
import Theme from '../constants/Theme.js';
import PokemonManager from '../managers/PokemonManager.js';
import Logo from './logo.js';

export default function RandomMonView({ route, navigation }) {
	const [isLoading, setLoading] = useState(true);
	const [isError, setError] = useState(false);
	const [mon, setMon] = useState([]);
	const { type } = route.params;

	const getGreeting = (type) => {
		switch (type) {
			case "daily":
				return `Here's the Daily Mon!`
			default:
				return "Here's your unique Random Mon!"
		}
	}

	const getMon = async (type) => {
		try {
			let mon = await PokemonManager.getMonByRouteType(type);
			setMon(mon);
		} catch (error) {
			setError(true)
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		getMon(type);
	}, [])

	const listItem = (item) => {
		if (item === null) return null;
		return <Text style={styles.monItem}>{item}</Text>
	}
	const listHeader = (title) => <Text style={styles.monHeader}>{title}</Text>
	const button = (text, onPress, pressArguments) => <TouchableOpacity
		onPress={() => onPress(pressArguments)}
		style={styles.button}
	>
		<Text
			style={styles.buttonText}
		>
			{text}
		</Text>
	</TouchableOpacity>

	// TODO Refactor the SectionList - it's just not working with how I'd like my API return to look
	return (
		<View style={styles.container}>
			<Logo />
			{isLoading && <ActivityIndicator />}
			{!isLoading && isError && <>
				<Text>Sorry! There was an error fetching your Mon. Please try again</Text>
				<Button
					title="Generate another Mon"
					onPress={() => getMon(type)}
				/>
			</>}
			{!isLoading && !isError && <>
				<Text style={styles.welcome}>
					{getGreeting(type)}
				</Text>
				<SectionList
					style={styles.sectionList}
					sections={[
						{ title: "Type", data: mon.types },
						{ title: "Base Designs", data: mon.baseDesigns },
						{ title: "Descriptors", data: mon.descriptors },
						{ title: "Extra Concepts", data: mon.extraConcepts },
						{ title: "Can Be Found In", data: mon.foundIn },
						{ title: "Stats", data: mon.stats },
						{ title: "Can it Mega Evolve?", data: mon.hasMegaEvolution },
						{ title: "Is it a Legendary?", data: mon.isLegendary },
						{ title: "Does it have an alternate form?", data: mon.hasAlternateForm },
					]}
					renderItem={({ item }) => listItem(item)}
					renderSectionHeader={({ section }) => listHeader(section.title)}
					keyExtractor={(item, index) => index}
				/>
				{
					type !== "daily" && <>
						{button("Generate another Mon", getMon, type)}
						{button("Check out the Daily Mon", navigation.navigate, Routes.daily)}
					</>
				}
				{
					type === "daily" &&
					button("Generate a unique Random Mon", navigation.navigate, Routes.random)
				}
				{button("Check out the demo pages", navigation.navigate, Routes.home)}
				<StatusBar style="auto" />
			</>}
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
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 10
	},
	logo: {
		width: 305,
		height: 159
	},
	pikachu: {
		height: 198,
		width: 220,
		marginTop: 8,
		marginBottom: 8,
		tintColor: Theme.black
	},
	button: {
		backgroundColor: Theme.red,
		padding: 15,
		borderRadius: 10,
		fontSize: 20,
		color: Theme.gbYellow,
		marginBottom: 10
	},
	buttonText: {
		fontSize: 20,
		color: Theme.gbYellow
	},
	monHeader: {
		textAlign: "left",
		fontWeight: "bold",
		width: "100%"
	},
	monItem: {
		textAlign: "left",
		fontWeight: "normal"
	},
	sectionList: {
		paddingLeft: 20,
		paddingRight: 20,
		marginBottom: 10,
		minWidth: 402
	},
	imageContainer: {
		position: "relative"
	},
	overlayContainer: {
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		width: "65%",
		height: "100%"
	},
	overlayText: {
		color: Theme.gbYellow,
		fontWeight: 900,
		fontSize: 96
	}
});