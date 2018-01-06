
class Currency {
    private Id: number;
    private Name: string;
    private Symbol: string;
    private Algorithm: string;
    private WithdrawFee: number;
    private MinWithdraw: number;
    private MinBaseTrade: number;
    private IsTipEnabled: boolean;
    private MinTip: number;
    private DepositConfirmations: number;
    private Status: string;
    private StatusMessage: string;
    private ListingStatus: string;

    constructor(currency: any) {
        this.Id = currency.Id;
        this.Name = currency.Name;
        this.Symbol = currency.Symbol;
        this.Algorithm = currency.Algorithm;
        this.WithdrawFee = currency.WithdrawFee;
        this.MinWithdraw = currency.MinWithdraw;
        this.MinBaseTrade = currency.MinBaseTrade;
        this.IsTipEnabled = currency.IsTipEnabled;
        this.MinTip = currency.MinTip;
        this.DepositConfirmations = currency.DepositConfirmations;
        this.Status = currency.Status || '';
        this.StatusMessage = currency.StatusMessage || '';
        this.ListingStatus = currency.ListingStatus || '';
    }

    get id(): number {
        return this.Id;
    }

    get name(): string {
        return this.Name;
    }

    get symbol(): string {
        return this.Symbol;
    }

    get algorithm(): string {
        return this.Algorithm;
    }

    get withdrawFee(): number {
        return this.WithdrawFee;
    }

    get minWithdraw(): number {
        return this.MinWithdraw;
    }

    get minBaseTrade(): number {
        return this.MinBaseTrade;
    }

    get isTipEnabled(): boolean {
        return this.IsTipEnabled;
    }

    get minTip(): number {
        return this.MinTip;
    }

    get depositConfirmations(): number {
        return this.DepositConfirmations;
    }

    get status(): string {
        return this.Status;
    }

    get statusMessage(): string {
        return this.StatusMessage;
    }

    get listingStatus(): string {
        return this.ListingStatus;
    }
}

export default Currency;
