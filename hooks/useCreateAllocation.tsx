import { allocationsCollection, db } from '@/db/index.native';
import { useState } from 'react';

const useCreateAllocation = () => {
	const [income, setIncome] = useState('');

	const createAllocation = async () => {
		await db.write(async () => {
			await allocationsCollection.create((allocation) => {
				allocation.income = Number.parseFloat(income);
			});
		});
		setIncome('');
	};

	return { income, setIncome, createAllocation };
};

export default useCreateAllocation;
