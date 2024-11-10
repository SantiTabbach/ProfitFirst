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

	return { formValues, setFormValues };
};

export default useCreateAccount;
