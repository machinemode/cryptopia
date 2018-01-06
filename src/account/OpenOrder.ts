class OpenOrder {
    private OrderId: number;
    private TradePairId: number;
    private Market: string;
    private Type: string;
    private Rate: number;
    private Amount: number;
    private Total: number;
    private Remaining: number;
    private TimeStamp: number;

    constructor(openOrder: any) {
        this.OrderId = openOrder.OrderId;
        this.TradePairId = openOrder.TradePairId;
        this.Market = openOrder.Market;
        this.Type = openOrder.Type;
        this.Rate = openOrder.Rate;
        this.Amount = openOrder.Amount;
        this.Total = openOrder.Total;
        this.Remaining = openOrder.Remaining;
        this.TimeStamp = Date.parse(openOrder.TimeStamp);
    }

    get orderId(): number {
        return this.OrderId;
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

    get remaining(): number {
        return this.Remaining;
    }

    get timeStamp(): number {
        return this.TimeStamp;
    }
}

export default OpenOrder;
