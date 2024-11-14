import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Allocation } from '@/model/Allocation';
import { withObservables } from '@nozbe/watermelondb/react';
import { AccountAllocation } from '@/model/AccountAllocation';
import AccountAllocationItem from './AccountAllocationItem';

interface Props {
	allocation: Allocation;
	accountAllocations: AccountAllocation[];
}

const AllocationListItem = ({ allocation, accountAllocations }: Props) => {
	const { income, createdAt } = allocation;

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.date}>{createdAt.toTimeString()}</Text>
				<Text style={styles.income}>${income}</Text>
			</View>
			<View style={styles.accountAllocations}>
				{accountAllocations.map((item) => (
					<AccountAllocationItem accountAllocation={item} key={item.id} />
				))}
			</View>
		</View>
	);
};

const enhance = withObservables(['allocation'], ({ allocation }: Props) => ({
	allocation,
	accountAllocations: allocation.accountAllocations,
}));

export default enhance(AllocationListItem);

const styles = StyleSheet.create({
	container: {
		gap: 16,
	},
	header: {
		padding: 10,
		borderRadius: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		borderWidth: 1,
		backgroundColor: 'white',
		borderColor: '#A3A3A3',
	},
	date: {
		fontSize: 16,
		fontWeight: '600',
		color: '#373737',
	},
	income: {
		fontWeight: '600',
		fontSize: 20,
		color: 'green',
	},
	accountAllocations: {
		gap: 8,
	},
});
