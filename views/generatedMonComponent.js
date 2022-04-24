import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import Routes from '../constants/Routes.js';
import Theme from '../constants/Theme.js';
import PokemonManager from '../managers/PokemonManager.js';
import { SectionList } from 'react-native-web';

export default function generatedMonComponent(mon) {
	return (
		<SectionList
			sections={[
				{title: "Base Designs", data: mon.baseDesigns}
			]}
			renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
			renderSectionHeader={({section}) => <Text style={styles.header}>{section.title}</Text>}
			keyExtractor={(item, index) => index}
		/>
	);
}

const styles = StyleSheet.create({
	header: {
		fontWeight: "bold"
	},
	item: {
		fontWeight: "normal"
	}
});