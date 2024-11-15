import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ygodlrpsobrwfmihhpcx.supabase.co';
const supabaseAnonKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlnb2RscnBzb2Jyd2ZtaWhocGN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2NzA2NjMsImV4cCI6MjA0NzI0NjY2M30.CXCvdSftgI5aCYZskSkk-w-6g0ynOjF7nfChZvAdEcw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
	auth: {
		storage: AsyncStorage,
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: false,
	},
});
