import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import AccountListItem from './AccountListItem';

const mockData = [
	{ name: 'Profit', cap: 20, tap: 20 },
	{ name: 'Profit', cap: 20, tap: 20 },
];

const AccountList = () => {
	return (
		<FlatList
			contentContainerStyle={{ gap: 16 }}
			data={mockData}
			renderItem={({ item }) => <AccountListItem {...item} />}
		/>
	);
};

export default AccountList;

const styles = StyleSheet.create({});
