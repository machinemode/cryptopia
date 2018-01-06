import MarketOrder from './MarketOrder';
import MarketOrders from './MarketOrders';

class MarketOrderGroup extends MarketOrders {
    private TradePairId: number;
    private Market: string;

    constructor(marketOrderGroup: any) {
        super(marketOrderGroup);
        this.TradePairId = marketOrderGroup.TradePairId;
        this.Market = marketOrderGroup.Market;
    }

    get tradePairId(): number {
        return this.TradePairId;
    }

    get market(): string {
        return this.Market;
    }
}

export default MarketOrderGroup;
