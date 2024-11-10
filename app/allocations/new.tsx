import { Stack } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const NewAllocationScreen = () => {
	return (
		<View>
			<Stack.Screen options={{ title: 'New allocation' }} />
			<Text>NewAllocationScreen</Text>
		</View>
	);
};

export default NewAllocationScreen;
