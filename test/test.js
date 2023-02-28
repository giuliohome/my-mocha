var assert = require('assert');
var expect = require('chai').expect;

const branchName = require('current-git-branch');
const feature = {
	documentationSample: ['dev','staging']
}

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Dev Env', function() {
    it('should run only on dev env', function () {
        const branch = branchName();
        if ( feature['documentationSample'].includes(branch) ) {
            // assertions
            expect(['dev','staging']).to.include(branch);
        } else {
            this.skip();
        }
    });
});
