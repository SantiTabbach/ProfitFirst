import { supabase } from '@/lib/supabase';
import { Session, User } from '@supabase/supabase-js';
import React, {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from 'react';

type AuthContext = {
	session: Session | null;
	user: User | null;
	isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContext>({
	session: null,
	user: null,
	isAuthenticated: false,
});

const AuthProvider = ({ children }: PropsWithChildren) => {
	const [session, setSession] = useState<Session | null>(null);
	useEffect(() => {
		supabase.auth.getSession().then(async ({ data: { session } }) => {
			setSession(session);

			// if (!session) {
			// 	supabase.auth.signInAnonymously();
			// }
		});

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, []);

	return (
		<AuthContext.Provider
			value={{
				session,
				user: session?.user ?? null,
				isAuthenticated: !!session?.user && !session.user.is_anonymous,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
