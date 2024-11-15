import { Model, Q, Relation } from '@nozbe/watermelondb';
import {
	date,
	readonly,
	field,
	children,
	lazy,
	nochange,
} from '@nozbe/watermelondb/decorators';
import { AccountAllocation } from './AccountAllocation';

export class Allocation extends Model {
	static table = 'allocations';

	static associations = {
		account_allocations: { type: 'has_many', foreignKey: 'allocation_id' },
	};

	@field('income') income!: number;
	@readonly @date('created_at') createdAt!: Date;
	@readonly @date('updated_at') updatedAt!: Date;
	@nochange @field('user_id') userId!: string;

	@children('account_allocations')
	accountAllocations!: AccountAllocation[];
}
