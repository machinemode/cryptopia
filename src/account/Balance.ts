class Balance {
    private CurrencyId: number;
    private Symbol: string;
    private Total: number;
    private Available: number;
    private Unconfirmed: number;
    private HeldForTrades: number;
    private PendingWithdraw: number;
    private Address: string;
    private BaseAddress: string;
    private Status: string;
    private StatusMessage: string;

    constructor(balance: any) {
        this.CurrencyId = balance.CurrencyId;
        this.Symbol = balance.Symbol;
        this.Total = balance.Total;
        this.Available = balance.Available;
        this.Unconfirmed = balance.Unconfirmed;
        this.HeldForTrades = balance.HeldForTrades;
        this.PendingWithdraw = balance.PendingWithdraw;
        this.Address = balance.Address || '';
        this.BaseAddress = balance.BaseAddress || '';
        this.Status = balance.Status || '';
        this.StatusMessage = balance.StatusMessage || '';
}

    get currencyId(): number {
        return this.CurrencyId;
    }

    get symbol(): string {
        return this.Symbol;
    }

    get total(): number {
        return this.Total;
    }

    get available(): number {
        return this.Available;
    }

    get unconfirmed(): number {
        return this.Unconfirmed;
    }

    get heldForTrades(): number {
        return this.HeldForTrades;
    }

    get pendingWithdraw(): number {
        return this.PendingWithdraw;
    }

    get address(): string {
        return this.Address;
    }

    get baseAddress(): string {
        return this.BaseAddress;
    }

    get status(): string {
        return this.Status;
    }

    get statusMessage(): string {
        return this.StatusMessage;
    }
}

export default Balance;
