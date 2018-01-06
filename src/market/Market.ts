class Market {
    private TradePairId: number;
    private Label: string;
    private AskPrice: number;
    private BidPrice: number;
    private Low: number;
    private High: number;
    private Volume: number;
    private LastPrice: number;
    private BuyVolume: number;
    private SellVolume: number;
    private Change: number;
    private Open:  number;
    private Close: number;
    private BaseVolume: number;
    private BaseBuyVolume: number;
    private BaseSellVolume: number;

    constructor(market: any) {
        this.TradePairId = market.TradePairId;
        this.Label = market.Label;
        this.AskPrice = market.AskPrice;
        this.BidPrice = market.BidPrice;
        this.Low = market.Low;
        this.High = market.High;
        this.Volume = market.Volume;
        this.LastPrice = market.LastPrice;
        this.BuyVolume = market.BuyVolume;
        this.SellVolume = market.SellVolume;
        this.Change = market.Change;
        this.Open = market.Open;
        this.Close = market.Close;
        this.BaseVolume = market.BaseVolume;
        this.BaseBuyVolume = market.BaseBuyVolume;
        this.BaseSellVolume = market.BaseSellVolume;
    }

    get tradePairId(): number {
        return this.TradePairId;
    }

    get label(): string {
        return this.Label;
    }

    get askPrice(): number {
        return this.AskPrice;
    }

    get bidPrice(): number {
        return this.BidPrice;
    }

    get low(): number {
        return this.Low;
    }

    get high(): number {
        return this.High;
    }

    get volume(): number {
        return this.Volume;
    }

    get lastPrice(): number {
        return this.LastPrice;
    }

    get buyVolume(): number {
        return this.BuyVolume;
    }

    get sellVolume(): number {
        return this.SellVolume;
    }

    get change(): number {
        return this.Change;
    }

    get open(): number {
        return this.Open;
    }

    get close(): number {
        return this.Close;
    }

    get baseVolume(): number {
        return this.BaseVolume;
    }

    get baseBuyVolume(): number {
        return this.BaseBuyVolume;
    }

    get baseSellVolume(): number {
        return this.BaseSellVolume;
    }
}

export default Market;
