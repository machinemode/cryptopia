const expect = require('chai').expect
const CryptopiaClient = require('../lib/CryptopiaClient').default;
const MarketService = require('../lib/market/MarketService').default;
const AccountService = require('../lib/account/AccountService').default;

describe('CryptopiaClient', () => {
    it('should be capable of being imported in JavaScript', () => {
        let client = new CryptopiaClient();
        expect(client).to.be.an.instanceof(CryptopiaClient);
    });

    it('should have a MarketService (Public API)', () => {
        let client = new CryptopiaClient();
        expect(client.market).to.be.an.instanceof(MarketService);
    });

    it('should not have an AccountService (Private API) without an api key/secret', () => {
        let client = new CryptopiaClient();
        expect(client.account).to.be.undefined;
    });

    it('should have an AccountService (Private API) with an api key/secret', () => {
        let client = new CryptopiaClient('API_KEY', 'SECRET');
        expect(client.account).to.be.an.instanceof(AccountService);
    });
});
