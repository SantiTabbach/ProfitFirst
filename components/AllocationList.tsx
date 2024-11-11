import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { allocationsCollection } from '@/db/index.native';
import { withObservables } from '@nozbe/watermelondb/react';
import { Allocation } from '@/model/Allocation';
import AllocationListItem from './AllocationListItem';
import { Q } from '@nozbe/watermelondb';

const AllocationList = ({ allocations }: { allocations: Allocation[] }) => {
	return (
		<FlatList
			contentContainerStyle={styles.container}
			showsVerticalScrollIndicator={false}
			data={allocations}
			renderItem={({ item }) => <AllocationListItem allocation={item} />}
		/>
	);
};

const enhance = withObservables(['allocations'], () => ({
	allocations: allocationsCollection.query(Q.sortBy('created_at', Q.desc)),
}));

export default enhance(AllocationList);

const styles = StyleSheet.create({
	container: {
		gap: 16,
	},
});
