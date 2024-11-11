import { Button, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import useCreateAccount, { initalState } from '@/hooks/useCreateAccount';
import { accountsCollection, db } from '@/db/index.native';

const Form = () => {
	const { formValues, setFormValues } = useCreateAccount();

	const createAccount = async () => {
		await db.write(async () => {
			await accountsCollection.create((account) => {
				account.name = formValues.name;
				account.cap = Number.parseFloat(formValues.cap);
				account.tap = Number.parseFloat(formValues.tap);
			});
		});
		setFormValues(initalState);
	};

	const handleInputChange = (t: string, key: 'name' | 'cap' | 'tap') => {
		setFormValues((prev) => {
			return { ...prev, [key]: t };
		});
	};

	return (
		<View style={styles.container}>
			<TextInput
				value={formValues.name}
				onChangeText={(t) => handleInputChange(t, 'name')}
				style={styles.textInput}
				placeholder="Name"
			/>
			<TextInput
				keyboardType="numeric"
				value={formValues.cap}
				onChangeText={(t) => handleInputChange(t, 'cap')}
				style={styles.textInput}
				placeholder="CAP %"
			/>
			<TextInput
				keyboardType="numeric"
				value={formValues.tap}
				onChangeText={(t) => handleInputChange(t, 'tap')}
				style={styles.textInput}
				placeholder="TAP %"
			/>

			<Button
				title="Add account"
				onPress={createAccount}
				disabled={!formValues.name || !formValues.cap || !formValues.tap}
			/>
		</View>
	);
};

export default Form;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		gap: 16,
	},
	textInput: {
		height: 40,
		backgroundColor: 'white',
		borderRadius: 8,
		paddingHorizontal: 10,
	},
});
