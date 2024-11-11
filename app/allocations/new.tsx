import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';
import useCreateAllocation from '@/hooks/useCreateAllocation';

const NewAllocationScreen = () => {
	const { income, setIncome, createAllocation } = useCreateAllocation();

	const handleSave = async () => {
		await createAllocation();

		router.back();
	};

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: 'New allocation' }} />

			<View
				style={{
					flexDirection: 'column',
					gap: 4,
				}}
			>
				<Text style={styles.label}>Income</Text>
				<View style={styles.inputRow}>
					<TextInput
						keyboardType="numeric"
						value={income}
						onChangeText={setIncome}
						style={styles.input}
						placeholder="$"
					/>
					<Button disabled={!income} onPress={handleSave} title="Save" />
				</View>
			</View>
		</View>
	);
};

export default NewAllocationScreen;

const styles = StyleSheet.create({
	container: {
		gap: 16,
		padding: 16,
		flex: 1,
	},
	label: {
		fontWeight: 'bold',
		color: '#373737',
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
