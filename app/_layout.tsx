import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const RootLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name="allocations"
				options={{
					headerShown: false,
					tabBarIcon: AllocationsIcon,
				}}
			/>
			<Tabs.Screen
				name="accounts"
				options={{
					title: 'Accounts',
					tabBarIcon: AccountsIcon,
				}}
			/>
			<Tabs.Screen
				name="index"
				options={{
					href: null,
				}}
			/>
		</Tabs>
	);
};

export default RootLayout;

const AllocationsIcon = ({ size, color }: { size: number; color: string }) => (
	<MaterialIcons name="account-tree" size={size} color={color} />
);

const AccountsIcon = ({ size, color }: { size: number; color: string }) => (
	<MaterialIcons name="account-balance-wallet" size={size} color={color} />
);
