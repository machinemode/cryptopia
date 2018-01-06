class TradeHistory {
    private TradeId: number;
    private TradePairId: number;
    private Market: string;
    private Type: string;
    private Rate: number;
    private Amount: number;
    private Total: number;
    private Fee: number;
    private TimeStamp: number;

    constructor(tradeHistory: any) {
        this.TradeId = tradeHistory.TradeId;
        this.TradePairId = tradeHistory.TradePairId;
        this.Market = tradeHistory.Market;
        this.Type = tradeHistory.Type;
        this.Rate = tradeHistory.Rate;
        this.Amount = tradeHistory.Amount;
        this.Total = tradeHistory.Total;
        this.Fee = tradeHistory.Fee;
        this.TimeStamp = Date.parse(tradeHistory.TimeStamp);
    }

    get tradeId(): number {
        return this.TradeId;
    }

    get tradePairId(): number {
        return this.TradePairId;
    }

    get market(): string {
        return this.Market;
    }

    get type(): string {
        return this.Type;
    }

    get rate(): number {
        return this.Rate;
    }

    get amount(): number {
        return this.Amount;
    }

    get total(): number {
        return this.Total;
    }

    get fee(): number {
        return this.Fee;
    }

    get timeStamp(): number {
        return this.TimeStamp;
    }
}

export default TradeHistory;
