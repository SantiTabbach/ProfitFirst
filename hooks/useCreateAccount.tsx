import { db } from '@/db/index.native';
import { Account } from '@/model/Account';
import { useAuth } from '@/providers/AuthProvider';
import { RawRecord } from '@nozbe/watermelondb';
import { useState } from 'react';

interface FormValues {
	name: string;
	cap: string;
	tap: string;
}

export const initalState = {
	name: '',
	cap: '',
	tap: '',
};

const a = new Account(db.get('accounts'), {} as RawRecord);

const useCreateAccount = () => {
	const [formValues, setFormValues] = useState<FormValues>(initalState);

	const { user } = useAuth();

	const createAccount = async () => {
		a.create({
			name: formValues.name,
			cap: Number.parseFloat(formValues.cap),
			tap: Number.parseFloat(formValues.tap),
			userId: user!.id,
		});

		setFormValues(initalState);
	};

	const handleInputChange = (t: string, key: 'name' | 'cap' | 'tap') => {
		setFormValues((prev) => {
			return { ...prev, [key]: t };
		});
	};

	return { formValues, createAccount, handleInputChange };
};

export default useCreateAccount;
