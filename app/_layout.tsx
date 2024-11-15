import AuthProvider, { useAuth } from '@/providers/AuthProvider';
import { Redirect, Slot } from 'expo-router';

const RootLayout = () => {
	return (
		<AuthProvider>
			<Slot />
		</AuthProvider>
	);
};

export default RootLayout;
