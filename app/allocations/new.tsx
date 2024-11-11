import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { allocationsCollection, db } from '@/db/index.native';

const NewAllocationScreen = () => {
	const [income, setIncome] = useState('');

	const handleSave = async () => {
		await db.write(async () => {
			await allocationsCollection.create((allocation) => {
				allocation.income = Number.parseFloat(income);
			});
		});
		setIncome('');
	};

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: 'New allocation' }} />

			<View style={styles.inputRow}>
				<Text style={styles.label}>Income</Text>
				<TextInput
					value={income}
					onChangeText={setIncome}
					style={styles.input}
					placeholder="$123"
				/>
			</View>
			<Button onPress={handleSave} title="Save" />
		</View>
	);
};

export default NewAllocationScreen;

const styles = StyleSheet.create({
	container: {
		gap: 16,
		padding: 16,
	},
	label: {
		fontWeight: 'bold',
	},
	inputRow: {
		alignItems: 'center',
		flexDirection: 'row',
		gap: 16,
	},
	input: {
		flex: 1,
		backgroundColor: 'white',
		height: 40,
		borderRadius: 8,
		paddingHorizontal: 10,
	},
});
