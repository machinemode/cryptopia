import MarketOrder from './MarketOrder';

class MarketOrders {
    private Buy: Array<MarketOrder> = [];
    private Sell: Array<MarketOrder> = [];


    constructor(marketOrders: any) {
        marketOrders.Buy
            .forEach((marketOrder: object) => this.Buy.push(new MarketOrder(marketOrder)));
        marketOrders.Sell
            .forEach((marketOrder: object) => this.Sell.push(new MarketOrder(marketOrder)));
    }

    get buy(): Array<MarketOrder> {
        return this.Buy;
    }

    get sell(): Array<MarketOrder> {
        return this.Sell;
    }
}

export default MarketOrders;
