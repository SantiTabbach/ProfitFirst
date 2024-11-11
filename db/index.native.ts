import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './model/schema';
import migrations from './model/migrations';
import { Account } from '@/model/Account';

const adapter = new SQLiteAdapter({
	schema,
	migrations,
	jsi: true,
	onSetUpError: (error) => {},
});

export const db = new Database({
	adapter,
	modelClasses: [Account],
});

export const accountsCollection = db.get<Account>('accounts');
