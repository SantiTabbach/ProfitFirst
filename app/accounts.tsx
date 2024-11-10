import { StyleSheet, View } from 'react-native';
import React from 'react';
import AccountList from '@/components/AccountList';

const AccountsScreen = () => {
	return (
		<View style={{ gap: 16, paddingHorizontal: 16 }}>
			<AccountList />
		</View>
	);
};

export default AccountsScreen;

const styles = StyleSheet.create({});
