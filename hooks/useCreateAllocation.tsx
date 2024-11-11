import { allocationsCollection, db } from '@/db/index.native';
import { useState } from 'react';

const useCreateAllocation = () => {
	const [income, setIncome] = useState('0');

	const createAllocation = async () => {
		await db.write(async () => {
			await allocationsCollection.create((allocation) => {
				allocation.income = Number.parseFloat(income);
			});
		});
		setIncome('0');
	};

	return { income, setIncome, createAllocation };
};

export default useCreateAllocation;
