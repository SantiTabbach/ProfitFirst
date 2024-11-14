import {
	accountAllocationCollection,
	allocationsCollection,
	db,
} from '@/db/index.native';
import { Account } from '@/model/Account';
import { useState } from 'react';

const useCreateAllocation = (accounts: Account[]) => {
	const [income, setIncome] = useState('0');

	const createAllocation = async () => {
		await db.write(async () => {
			const allocation = await allocationsCollection.create((newAllocation) => {
				newAllocation.income = Number.parseFloat(income);
			});

			await Promise.all(
				accounts.map((account) => {
					accountAllocationCollection.create((item) => {
						item.account.set(account);
						item.allocation.set(allocation);
						item.cap = account.cap;
						item.amount = (allocation.income * account.cap) / 100;
					});
				})
			);
		});

		setIncome('0');
	};

	return { income, setIncome, createAllocation };
};

export default useCreateAllocation;
