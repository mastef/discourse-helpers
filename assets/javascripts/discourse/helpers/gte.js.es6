import { registerUnbound } from 'discourse-common/lib/helpers';

registerUnbound('gt', function(a, b, c) {
	console.log(a, b, c);
	return (a > b);
});

registerUnbound('gte', function(a, b, options) {
	console.log(a);
	console.log(b);
	if (arguments.length === 2) {
		options = b;
		b = options.hash.compare;
	}
	if (a >= b) {
		return options.fn(this);
	}
	return options.inverse(this);
});