import ApiResponse from '../http/ApiResponse';
import HttpsClient from '../http/HttpsClient';
import Currency from './Currency';
import TradePair from './TradePair';
import Market from './Market';
import MarketHistory from './MarketHistory';
import MarketOrders from './MarketOrders';
import MarketOrderGroup from './MarketOrderGroup';

class MarketService {
    constructor(private httpsClient: HttpsClient) {

    }

    getCurrencies(): Promise<Array<Currency>> {
        return this.httpsClient.get('/api/GetCurrencies')
            .then((response) => {
                if (response.success) {
                    let currencies: Array<Currency> = [];
                    response.data.forEach((currency: object) => {
                        currencies.push(new Currency(currency));
                    });
                    return currencies;
                } else {
                    throw new Error(`${response.error} ${response.message}`);
                }
            });
    }

    getTradePairs(): Promise<Array<TradePair>> {
        return this.httpsClient.get('/api/GetTradePairs')
            .then((response) => {
                if (response.success) {
                    let tradePairs: Array<TradePair> = [];
                    response.data.forEach((tradePair: object) => {
                        tradePairs.push(new TradePair(tradePair));
                    });
                    return tradePairs;
                } else {
                    throw new Error(`${response.error} ${response.message}`);
                }
            });
    }

    getMarkets(baseMarket?: string, hours?: number): Promise<Array<Market>> {
        let path = '/api/GetMarkets';

        if (baseMarket) {
            path += `/${baseMarket}`;
        }

        if (hours) {
            path += `/${hours}`;
        }

        return this.httpsClient.get(path)
            .then((response) => {
                if (response.success) {
                    let markets: Array<Market> = [];
                    response.data.forEach((market: object) => {
                        markets.push(new Market(market));
                    });
                    return markets;
                } else {
                    throw new Error(`${response.error} ${response.message}`);
                }
            });
    }

    getMarket(market: Market, hours?: number): Promise<Market> {
        let path = `/api/GetMarket/${market.tradePairId}`;

        if (hours) {
            path += `/${hours}`;
        }

        return this.httpsClient.get(path)
            .then((response) => {
                if (response.success) {
                   return new Market(response.data);
                } else {
                    throw new Error(`${response.error} ${response.message}`);
                }
            });
    }

    getMarketHistory(market: Market, hours?: number): Promise<Array<MarketHistory>> {
        let path = `/api/GetMarketHistory/${market.tradePairId}`;

        if (hours) {
            path += `/${hours}`;
        }

        return this.httpsClient.get(path)
            .then((response) => {
                if (response.success) {
                    let marketHistories: Array<MarketHistory> = [];
                    response.data.forEach((marketHistory: object) => {
                        marketHistories.push(new MarketHistory(marketHistory));
                    });
                    return marketHistories;
                } else {
                    throw new Error(`${response.error} ${response.message}`);
                }
            });
    }

    getMarketOrders(market: Market, orderCount?: number): Promise<MarketOrders> {
        let path = `/api/GetMarketOrders/${market.tradePairId}`;

        if (orderCount) {
            path += `/${orderCount}`;
        }

        return this.httpsClient.get(path)
            .then((response) => {
                if (response.success) {
                   return new MarketOrders(response.data);
                } else {
                    throw new Error(`${response.error} ${response.message}`);
                }
            });
    }

    getMarketOrderGroups(markets: Market | Array<Market>, orderCount?: number): Promise<Array<MarketOrderGroup>> {
        if (!(markets instanceof Array)) {
            markets = [markets];
        }

        let path = `/api/GetMarketOrderGroups/${markets.map((market: Market) => market.tradePairId).join('-')}`;

        if (orderCount) {
            path += `/${orderCount}`;
        }

        return this.httpsClient.get(path)
            .then((response) => {
                if (response.success) {
                    let marketOrderGroups: Array<MarketOrderGroup> = [];
                    response.data.forEach((marketOrderGroup: object) => {
                        marketOrderGroups.push(new MarketOrderGroup(marketOrderGroup));
                    });
                    return marketOrderGroups;
                } else {
                    throw new Error(`${response.error} ${response.message}`);
                }
            });
    }
}

export default MarketService;
