class TradePair {
    private Id: number;
    private Label: string;
    private Currency: string;
    private Symbol: string;
    private BaseCurrency: string;
    private BaseSymbol: string;
    private Status: string;
    private StatusMessage: string;
    private TradeFee: number;
    private MinimumTrade: number;
    private MaximumTrade: number;
    private MinimumBaseTrade: number;
    private MaximumBaseTrade: number;
    private MinimumPrice: number;
    private MaximumPrice: number;

    constructor(tradePair: any) {
        this.Id = tradePair.Id;
        this.Label = tradePair.Label;
        this.Currency = tradePair.Currency;
        this.Symbol = tradePair.Symbol;
        this.BaseCurrency = tradePair.BaseCurrency;
        this.BaseSymbol = tradePair.BaseSymbol;
        this.Status = tradePair.Status || '';
        this.StatusMessage = tradePair.StatusMessage || '';
        this.TradeFee = tradePair.TradeFee;
        this.MinimumTrade = tradePair.MinimumTrade;
        this.MaximumTrade = tradePair.MaximumTrade;
        this.MinimumBaseTrade = tradePair.MinimumBaseTrade;
        this.MaximumBaseTrade = tradePair.MaximumBaseTrade;
        this.MinimumPrice = tradePair.MinimumPrice;
        this.MaximumPrice = tradePair.MaximumPrice;
    }

    get id(): number {
        return this.Id;
    }

    get label(): string {
        return this.Label;
    }

    get currency(): string {
        return this.Currency;
    }

    get symbol(): string {
        return this.Symbol;
    }

    get baseCurrency(): string {
        return this.BaseCurrency;
    }

    get baseSymbol(): string {
        return this.BaseSymbol;
    }

    get status(): string {
        return this.Status;
    }

    get statusMessage(): string {
        return this.StatusMessage;
    }

    get tradeFee(): number {
        return this.TradeFee;
    }

    get minimumTrade(): number {
        return this.MinimumTrade;
    }

    get maximumTrade(): number {
        return this.MaximumTrade;
    }

    get minimumBaseTrade(): number {
        return this.MinimumBaseTrade;
    }

    get maximumBaseTrade(): number {
        return this.MaximumBaseTrade;
    }

    get minimumPrice(): number {
        return this.MinimumPrice;
    }

    get maximumPrice(): number {
        return this.MaximumPrice;
    }
}

export default TradePair;
