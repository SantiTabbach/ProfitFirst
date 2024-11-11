import { Model } from '@nozbe/watermelondb';
import { date, readonly, field } from '@nozbe/watermelondb/decorators';

export class Allocation extends Model {
	static table = 'allocations';

	@field('income') income!: number;
	@readonly @date('created_at') createdAt!: Date;
}
