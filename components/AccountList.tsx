import { FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import AccountListItem from './AccountListItem';
import { accountsCollection } from '@/db/index.native';
import { Account } from '@/model/Account';
import { withObservables } from '@nozbe/watermelondb/react';

const AccountList = ({ accounts }: { accounts: Account[] }) => {
	return (
		<FlatList
			contentContainerStyle={{ gap: 16 }}
			data={accounts}
			renderItem={({ item }) => <AccountListItem account={item} />}
		/>
	);
};

const enhance = withObservables(['accounts'], () => ({
	accounts: accountsCollection.query(),
}));

export default enhance(AccountList);

const styles = StyleSheet.create({});
