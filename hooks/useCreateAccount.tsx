import { accountsCollection, db } from '@/db/index.native';
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

const useCreateAccount = () => {
	const [formValues, setFormValues] = useState<FormValues>(initalState);

	const createAccount = async () => {
		await db.write(async () => {
			await accountsCollection.create((account) => {
				account.name = formValues.name;
				account.cap = Number.parseFloat(formValues.cap);
				account.tap = Number.parseFloat(formValues.tap);
			});
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
