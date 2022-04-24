import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Theme from '../constants/Theme.js';

export default function Logo() {
	let imageUri = 'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png'

	const styles = StyleSheet.create({
		pikachu: {
			height: 198,
			width: 220,
			marginTop: 8,
			marginBottom: 8,
			tintColor: Theme.black
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

	return (
				<View style={styles.imageContainer}>
					<Image source={{ uri: imageUri }} style={styles.pikachu} />
					<View style={styles.overlayContainer}><Text style={styles.overlayText}>?</Text></View>
				</View>
	);
}

