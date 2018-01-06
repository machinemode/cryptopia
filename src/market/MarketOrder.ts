class MarketOrder {
    private TradePairId: number;
    private Label: string;
    private Price: number;
    private Volume: number;
    private Total: number;

    constructor(marketOrder: any) {
        this.TradePairId = marketOrder.TradePairId;
        this.Label = marketOrder.Label;
        this.Price = marketOrder.Price;
        this.Volume = marketOrder.Volume;
        this.Total = marketOrder.Total;
    }

    get tradePairId(): number {
        return this.TradePairId;
    }

    get label(): string {
        return this.Label;
    }

    get price(): number {
        return this.Price;
    }

    get volume(): number {
        return this.Volume;
    }

    get total(): number {
        return this.Total;
    }
}

export default MarketOrder;
