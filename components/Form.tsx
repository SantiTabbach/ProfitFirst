import { Button, StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import useCreateAccount, { initalState } from '@/hooks/useCreateAccount';
import { accountsCollection, db } from '@/db/index.native';
import { Account } from '@/model/Account';

const Form = () => {
	const { formValues, setFormValues } = useCreateAccount();

	const createAccount = async () => {
		await db.write(async () => {
			const account = await accountsCollection.create((account) => {
				account.name = formValues.name;
				account.cap = Number.parseFloat(formValues.cap);
				account.tap = Number.parseFloat(formValues.tap);
			});
			console.log(account);
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

			<Button title="Add account" onPress={createAccount} />
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
		flex: 1,
		backgroundColor: 'white',
		borderRadius: 16,
		paddingHorizontal: 10,
	},
});
