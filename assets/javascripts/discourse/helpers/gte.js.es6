import registerUnbound from 'discourse/helpers/register-unbound';

registerUnbound('gte', function(a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  if (a >= b) {
    return options.fn(this);
  }
  return options.inverse(this);
});