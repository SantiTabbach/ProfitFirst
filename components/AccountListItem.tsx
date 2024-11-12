import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Account } from '@/model/Account';
import { withObservables } from '@nozbe/watermelondb/react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
	account: Account;
}

const AccountListItem = ({ account }: Props) => {
	const { name, cap, tap } = account;

	const handleDelete = async () => {
		await account.delete();
	};

	return (
		<View style={styles.container}>
			<Text style={styles.name}>{name}</Text>
			<View style={styles.allocationStatContainer}>
				<Stat value={cap} label="CAP" />
				<Stat value={tap} label="TAP" />
				<MaterialCommunityIcons
					onPress={handleDelete}
					name="trash-can"
					size={24}
					color="#ff5b5b"
				/>
			</View>
		</View>
	);
};

const enhance = withObservables(['account'], ({ account }: Props) => ({
	account,
}));

export default enhance(AccountListItem);

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
		alignItems: 'center',
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

const Stat = ({
	value,
	label,
}: {
	value: number | undefined;
	label: string;
}) => (
	<View style={styles.allocationStat}>
		<Text>{value}%</Text>
		<Text style={styles.statLabel}>{label}</Text>
	</View>
);
