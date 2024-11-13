import { Model, Relation } from '@nozbe/watermelondb';
import {
	date,
	readonly,
	field,
	immutableRelation,
} from '@nozbe/watermelondb/decorators';
import { Account } from './Account';
import { Allocation } from './Allocation';

export class AccountAllocation extends Model {
	static table = 'account_allocations';

	@readonly @date('created_at') createdAt!: Date;

	@field('amount') amount!: number;
	@field('cap') cap!: number;

	@immutableRelation('accounts', 'account_id') account!: Relation<Account>;
	@immutableRelation('allocations', 'allocation_id')
	allocation!: Relation<Allocation>;
}
