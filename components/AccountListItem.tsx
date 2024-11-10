import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface Props {
	name: string;
	cap: number;
	tap: number;
}

const AccountListItem = ({ name, cap, tap }: Props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{name}</Text>
			<View style={styles.allocationStatContainer}>
				<Stat value={cap} label="CAP" />
				<Stat value={tap} label="TAP" />
			</View>
		</View>
	);
};

export default AccountListItem;

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
	name: {
		fontWeight: '600',
		fontSize: 20,
	},
	allocationStatContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 16,
	},
	allocationStat: {
		flexDirection: 'column',
		gap: 8,
	},
	statLabel: {
		color: '#737373',
		fontWeight: '600',
	},
});

const Stat = ({ value, label }: { value: number; label: string }) => (
	<View style={styles.allocationStat}>
		<Text>{value}%</Text>
		<Text style={styles.statLabel}>{label}</Text>
	</View>
);
