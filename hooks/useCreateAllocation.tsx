import {
	accountAllocationCollection,
	allocationsCollection,
	db,
} from '@/db/index.native';
import { Account } from '@/model/Account';
import { useAuth } from '@/providers/AuthProvider';
import { useState } from 'react';

const useCreateAllocation = (accounts: Account[]) => {
	const [income, setIncome] = useState('0');

	const { user } = useAuth();

	const createAllocation = async () => {
		await db.write(async () => {
			const allocation = await allocationsCollection.create((newAllocation) => {
				newAllocation.income = Number.parseFloat(income);
				newAllocation.userId = user!.id;
			});

			await Promise.all(
				accounts.map((account) => {
					accountAllocationCollection.create((item) => {
						item.account.set(account);
						item.allocation.set(allocation);
						item.cap = account.cap;
						item.amount = (allocation.income * account.cap) / 100;
						item.userId = user!.id;
					});
				})
			);
		});

		setIncome('0');
	};

	return { income, setIncome, createAllocation };
};

export default useCreateAllocation;
