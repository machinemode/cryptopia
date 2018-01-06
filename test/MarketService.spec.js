const expect = require('chai').expect
const HttpsClient = require('../lib/http/HttpsClient').default;
const MarketService = require('../lib/market/MarketService').default;
const Currency = require('../lib/market/Currency').default;
const TradePair = require('../lib/market/TradePair').default;
const Market = require('../lib/market/Market').default;
const MarketHistory = require('../lib/market/MarketHistory').default;
const MarketOrders = require('../lib/market/MarketOrders').default;
const MarketOrderGroup = require('../lib/market/MarketOrderGroup').default;

describe('MarketService', () => {
    let httpClient = new HttpsClient('www.cryptopia.co.nz');
    let service = new MarketService(httpClient);
    let ltcBtcMarket = new Market({ "TradePairId": 101 });
    let fooMarket = new Market({ "TradePairId": 'foo' });

    describe('getCurrencies()', () => {
        it('should return all currency data', () => {
            return service.getCurrencies().then((currencies) => {
                expect(currencies).to.be.an('array');
                expect(currencies).to.not.be.empty;
                currencies.forEach((currency) => expect(currency).to.be.an.instanceof(Currency));
            });
        });
    });

    describe('getTradePairs()', () => {
        it('should return all trade pair data', () => {
            return service.getTradePairs().then((tradePairs) => {
                expect(tradePairs).to.be.an('array');
                expect(tradePairs).to.not.be.empty;
                tradePairs.forEach((tradePair) => expect(tradePair).to.be.an.instanceof(TradePair));
            });
        });
    });

    describe('getMarkets()', () => {
        it('should return all market data by default', () => {
            return service.getMarkets().then((markets) => {
                expect(markets).to.be.an('array');
                expect(markets).to.not.be.empty;
                markets.forEach((market) => expect(market).to.be.an.instanceof(Market));
            });
        });
    });

    describe('getMarket()', () => {
        it('should return market data for the specified market', () => {
            return service.getMarket(ltcBtcMarket).then((market) => {
                expect(market).to.be.an.instanceof(Market);
                expect(market.tradePairId).to.equal(ltcBtcMarket.tradePairId);
                expect(market.label).to.equal('LTC/BTC');
            });
        });

        it('should throw if an invalid trade pair is provided', (done) => {
            service.getMarket(fooMarket)
                .then((result) => done('failed to throw'))
                .catch((error) => done());
        });
    });

    describe('getMarketHistory()', () => {
        it('should return market history data for the specified market', () => {
            return service.getMarketHistory(ltcBtcMarket).then((marketHistories) => {
                expect(marketHistories).to.be.an('array');
                expect(marketHistories).to.not.be.empty;
                marketHistories.forEach((marketHistory) => {
                    expect(marketHistory).to.be.an.instanceof(MarketHistory);
                    expect(marketHistory.tradePairId).to.equal(ltcBtcMarket.tradePairId);
                    expect(marketHistory.label).to.equal('LTC/BTC');
                });
            });
        });

        it('should throw if an invalid trade pair is provided', (done) => {
            service.getMarketHistory(fooMarket)
                .then((result) => done('failed to throw'))
                .catch((error) => done());
        });
    });

    describe('getMarketOrders()', () => {
        it('should return open buy and sell orders for the specified market', () => {
            return service.getMarketOrders(ltcBtcMarket).then((marketOrders) => {
                expect(marketOrders).to.be.an.instanceof(MarketOrders);
                expect(marketOrders.buy).to.be.an('array');
                expect(marketOrders.sell).to.be.an('array');
            });
        });

        it('should throw if an invalid trade pair is provided', (done) => {
            service.getMarketOrders(fooMarket)
                .then((result) => done('failed to throw'))
                .catch((error) => done());
        });
    });

    describe('getMarketOrderGroups()', () => {
        it('should return open buy and sell orders for the specified market', () => {
            let dotBtcMarket = new Market({ "TradePairId": 100 });

            return service.getMarketOrderGroups([ltcBtcMarket, dotBtcMarket]).then((marketOrderGroups) => {
                expect(marketOrderGroups).to.be.an('array');
                expect(marketOrderGroups).to.not.be.empty;
                marketOrderGroups.forEach((marketOrderGroup) => {
                    expect(marketOrderGroup).to.be.an.instanceof(MarketOrderGroup);
                    expect(marketOrderGroup.tradePairId).to.be.oneOf([dotBtcMarket.tradePairId, ltcBtcMarket.tradePairId]);
                    expect(marketOrderGroup.market).to.be.oneOf(['LTC_BTC', 'DOT_BTC']);
                });
            });
        });

        it('should throw if an invalid trade pair is provided', (done) => {
            service.getMarketOrderGroups(fooMarket)
                .then((result) => done('failed to throw'))
                .catch((error) => done());
        });
    });
});
