import { Model } from '@nozbe/watermelondb';
import { field, text } from '@nozbe/watermelondb/decorators';

export class Account extends Model {
	static table = 'accounts';

	@text('name') name: string | undefined;
	@field('cap') cap: number | undefined;
	@field('tap') tap: number | undefined;
}
