import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Allocation } from '@/model/Allocation';
import { withObservables } from '@nozbe/watermelondb/react';

interface Props {
	allocation: Allocation;
}

const AllocationListItem = ({ allocation }: Props) => {
	const { income, createdAt } = allocation;

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.date}>{createdAt.toTimeString()}</Text>
				<Text style={styles.income}>${income}</Text>
			</View>
		</View>
	);
};

const enhance = withObservables(['allocation'], ({ allocation }: Props) => ({
	allocation,
}));

export default enhance(AllocationListItem);

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 16,
		borderWidth: 1,
		padding: 10,
		borderColor: '#A3A3A3',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
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
});
