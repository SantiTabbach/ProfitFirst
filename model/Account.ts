import { Collection, Model } from '@nozbe/watermelondb';
import { field, nochange, text, writer } from '@nozbe/watermelondb/decorators';

export class Account extends Model {
	static table = 'accounts';

	@text('name') name!: string;
	@field('cap') cap!: number;
	@field('tap') tap!: number;
	@nochange @field('user_id') userId!: string;

	@writer async create(accountData: {
		name: string;
		cap: number;
		tap: number;
		userId: string;
	}) {
		const accountCollection: Collection<Account> =
			this.collections.get('accounts');
		const newAccount = await accountCollection.create((account) => {
			account.name = accountData.name;
			account.cap = accountData.cap;
			account.tap = accountData.tap;
			account.userId = accountData.userId;
		});

		return newAccount;
	}

	@writer async delete() {
		await this.update((account) => {
			account.markAsDeleted();
		});
	}
}
