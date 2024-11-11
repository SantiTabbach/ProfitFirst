import { Model } from '@nozbe/watermelondb';
import { date, readonly, text } from '@nozbe/watermelondb/decorators';

export class Allocation extends Model {
	static table = 'allocations';

	@text('income') income!: number;
	@readonly @date('created_at') createdAt!: Date;
}
