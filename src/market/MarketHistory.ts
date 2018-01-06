class MarketHistory {
    private TradePairId: number;
    private Label: string;
    private Type: string;
    private Price: number;
    private Amount: number;
    private Total: number;
    private Timestamp: number;

    constructor(marketHistory: any) {
        this.TradePairId = marketHistory.TradePairId;
        this.Label = marketHistory.Label;
        this.Type = marketHistory.Type;
        this.Price = marketHistory.Price;
        this.Amount = marketHistory.Amount;
        this.Total = marketHistory.Total;
        this.Timestamp = marketHistory.Timestamp;
    }

    get tradePairId(): number {
        return this.TradePairId;
    }

    get label(): string {
        return this.Label;
    }

    get type(): string {
        return this.Type;
    }

    get price(): number {
        return this.Price;
    }

    get amount(): number {
        return this.Amount;
    }

    get total(): number {
        return this.Total;
    }

    get timestamp(): number {
        return this.Timestamp;
    }
}

export default MarketHistory;
