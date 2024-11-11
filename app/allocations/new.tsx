import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';
import useCreateAllocation from '@/hooks/useCreateAllocation';
import { accountsCollection } from '@/db/index.native';
import { withObservables } from '@nozbe/watermelondb/react';
import { Account } from '@/model/Account';

const NewAllocationScreen = ({ accounts }: { accounts: Account[] }) => {
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
				<View style={{ flexDirection: 'column', gap: 16, marginTop: 16 }}>
					{accounts.map((account) => (
						<View
							key={account.id}
							style={[styles.inputRow, { justifyContent: 'space-between' }]}
						>
							<Text>
								{account.name}: {account.cap}%
							</Text>
							<Text>
								{(Number.parseFloat(income || '0') * account.cap) / 100}
							</Text>
						</View>
					))}
				</View>
			</View>
		</View>
	);
};

const enhance = withObservables([], () => ({
	accounts: accountsCollection.query(),
}));

export default enhance(NewAllocationScreen);

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
