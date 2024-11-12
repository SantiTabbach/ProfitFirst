import { Collection, Model } from '@nozbe/watermelondb';
import { field, text, writer } from '@nozbe/watermelondb/decorators';

export class Account extends Model {
	static table = 'accounts';

	@text('name') name!: string;
	@field('cap') cap!: number;
	@field('tap') tap!: number;

	@writer async create(accountData: {
		name: string;
		cap: number;
		tap: number;
	}) {
		const accountCollection: Collection<Account> =
			this.collections.get('accounts');
		const newAccount = await accountCollection.create((account) => {
			account.name = accountData.name;
			account.cap = accountData.cap;
			account.tap = accountData.tap;
		});

		return newAccount;
	}

	@writer async delete() {
		await this.update((account) => {
			account.markAsDeleted();
		});
	}
}
