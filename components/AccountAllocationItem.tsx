import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { withObservables } from '@nozbe/watermelondb/react';
import { AccountAllocation } from '@/model/AccountAllocation';
import { Account } from '@/model/Account';

interface Props {
	accountAllocation: AccountAllocation;
	account: Account;
}

const AccountAllocationItem = ({ accountAllocation, account }: Props) => {
	return (
		<View style={styles.container}>
			<Text>{account.name}</Text>
			<Text>${accountAllocation.amount}</Text>
		</View>
	);
};

const enhance = withObservables(
	['accountAllocation'],
	({ accountAllocation }: Props) => ({
		accountAllocation,
		account: accountAllocation.account,
	})
);

export default enhance(AccountAllocationItem);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});
