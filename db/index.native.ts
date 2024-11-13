import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './model/schema';
import migrations from './model/migrations';
import { Account } from '@/model/Account';
import { Allocation } from '@/model/Allocation';
import { AccountAllocation } from '@/model/AccountAllocation';

const adapter = new SQLiteAdapter({
	schema,
	migrations,
	jsi: true,
	onSetUpError: (error) => {},
});

export const db = new Database({
	adapter,
	modelClasses: [Account, Allocation, AccountAllocation],
});

export const accountsCollection = db.get<Account>('accounts');
export const allocationsCollection = db.get<Allocation>('allocations');
export const accountAllocationCollection = db.get<AccountAllocation>(
	'account_allocations'
);
