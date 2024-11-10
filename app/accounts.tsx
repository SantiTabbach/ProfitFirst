import { StyleSheet, View } from 'react-native';
import React from 'react';
import AccountList from '@/components/AccountList';
import Form from '@/components/Form';

const AccountsScreen = () => {
	return (
		<View style={styles.container}>
			<AccountList />
			<Form />
		</View>
	);
};

export default AccountsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 16,
		padding: 16,
	},
});
