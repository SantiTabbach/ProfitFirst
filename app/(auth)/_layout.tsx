import { useAuth } from '@/providers/AuthProvider';
import { Redirect, Stack } from 'expo-router';

const AuthLayout = () => {
	const { isAuthenticated } = useAuth();

	if (isAuthenticated) {
		return <Redirect href="/(tabs)" />;
	}

	return <Stack />;
};

export default AuthLayout;
