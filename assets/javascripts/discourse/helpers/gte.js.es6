import { registerUnbound } from 'discourse-common/lib/helpers';

registerUnbound('gte', function(a, b) {
	return (a >= b);
});