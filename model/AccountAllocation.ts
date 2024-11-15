import { Model, Q, Relation } from '@nozbe/watermelondb';
import {
	date,
	readonly,
	field,
	immutableRelation,
	lazy,
	nochange,
} from '@nozbe/watermelondb/decorators';
import { Account } from './Account';
import { Allocation } from './Allocation';

export class AccountAllocation extends Model {
	static table = 'account_allocations';

	static associations = {
		accounts: { type: 'belongs_to', key: 'account_id' },
		allocations: { type: 'belongs_to', key: 'allocation_id' },
	};

	@readonly @date('created_at') createdAt!: Date;
	@readonly @date('updated_at') updatedAt!: Date;

	@field('amount') amount!: number;
	@field('cap') cap!: number;
	@nochange @field('user_id') userId!: string;

	@immutableRelation('accounts', 'account_id') account!: Relation<Account>;
	@immutableRelation('allocations', 'allocation_id')
	allocation!: Relation<Allocation>;
}
