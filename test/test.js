var assert = require('assert');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Dev Env', function() {
    it('should run only on dev env', function () {
        const branch = process.env.NODE_ENV;
        if (branch === 'dev') {
            // assertions
            assert.equal(branch,'dev');
        } else {
            this.skip();
        }
    });
});
