import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { router, Stack } from 'expo-router';
import AllocationList from '@/components/AllocationList';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: 'Allocations' }} />
			<View style={styles.header}>
				<Text style={styles.title}>Allocations</Text>
				<TouchableOpacity
					onPress={() => router.push('/allocations/new')}
					style={styles.addAllocation}
				>
					<MaterialCommunityIcons name="plus" size={24} color="white" />
				</TouchableOpacity>
			</View>
			<View style={{ flex: 1 }}>
				<AllocationList />
			</View>
			<StatusBar style="auto" />
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		gap: 16,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		fontWeight: 600,
		fontSize: 36,
	},
	addAllocation: {
		borderRadius: 100,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#3ebb69',
	},
});
