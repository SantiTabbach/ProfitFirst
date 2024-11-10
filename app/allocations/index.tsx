import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Link, Stack } from 'expo-router';

const HomeScreen = () => {
	return (
		<View>
			<Stack.Screen options={{ title: 'Allocations' }} />
			<Text>Allocations</Text>
			<Link href="/allocations/new">
				<Text>Navigate to new allocation</Text>
			</Link>
			<StatusBar style="auto" />
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
