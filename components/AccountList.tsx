import { FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import AccountListItem from './AccountListItem';
import { accountsCollection } from '@/db/index.native';
import { Account } from '@/model/Account';

const AccountList = () => {
	const [accounts, setAccounts] = useState<Account[]>([]);

	useEffect(() => {
		const fetchAccounts = async () => {
			const storedAccounts = await accountsCollection.query().fetch();

			setAccounts(storedAccounts);
		};

		fetchAccounts();
	}, []);

	return (
		<FlatList
			contentContainerStyle={{ gap: 16 }}
			data={accounts}
			renderItem={({ item }) => <AccountListItem account={item} />}
		/>
	);
};

export default AccountList;

const styles = StyleSheet.create({});
