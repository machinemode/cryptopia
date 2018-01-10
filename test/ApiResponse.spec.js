const expect = require('chai').expect
const ApiResponse = require('../lib/http/ApiResponse').default;

describe('ApiResponse', () => {
    it('should not throw given an invalid response body', () => {
        expect(() => new ApiResponse(200, undefined)).to.not.throw();
        expect(() => new ApiResponse(200, '')).to.not.throw();
    });
});
