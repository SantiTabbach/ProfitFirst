import { Button, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import useCreateAccount from '@/hooks/useCreateAccount';

const Form = () => {
	const { formValues, createAccount, handleInputChange } = useCreateAccount();

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
