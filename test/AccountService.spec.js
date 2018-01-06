require('dotenv').config()
const expect = require('chai').expect
const HttpsClient = require('../lib/http/HttpsClient').default;
const AccountService = require('../lib/account/AccountService').default;
const Balance = require('../lib/account/Balance').default;
const Currency = require('../lib/market/Currency').default;

if (process.env.API_KEY && process.env.API_SECRET) {

    describe('AccountService', () => {
        let httpClient = new HttpsClient('www.cryptopia.co.nz', process.env.API_KEY, process.env.API_SECRET);
        let service = new AccountService(httpClient);
        let ltcCurrency = new Currency({ Id: 3 });

        describe('getBalance()', () => {
            it('should return all balances', () => {
                return service.getBalance().then((balances) => {
                    expect(balances).to.be.an('array');
                    expect(balances).to.not.be.empty;
                    balances.forEach((balance) => expect(balance).to.be.an.instanceof(Balance));
                });
            });

            it('should return a balance for the specified currency symbol', () => {
                return service.getBalance(ltcCurrency).then((balances) => {
                    expect(balances).to.be.an('array');
                    expect(balances).to.be.lengthOf(1);
                    let balance = balances[0];
                    expect(balance).to.be.an.instanceof(Balance);
                    expect(balance.symbol).to.equal('LTC');
                });
            });
        });
    });

}
