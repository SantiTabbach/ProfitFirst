import { MaterialIcons } from '@expo/vector-icons';
import { Slot, Stack, Tabs } from 'expo-router';
import React from 'react';

const RootLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Allocations',
					tabBarIcon: ({ size, color }) => (
						<MaterialIcons name="account-tree" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="accounts"
				options={{
					title: 'Accounts',
					tabBarIcon: ({ size, color }) => (
						<MaterialIcons
							name="account-balance-wallet"
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
};

export default RootLayout;
