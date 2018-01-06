class Transaction {
    private Id: number;
    private Currency: string;
    private TxId: string;
    private Type: 'Deposit' | 'Withdraw';
    private Amount: number;
    private Fee: number;
    private Status: string;
    private Confirmations: number;
    private TimeStamp: number;
    private Address: string;

    constructor(transaction: any) {
        this.Id = transaction.Id;
        this.Currency = transaction.Currency;
        this.TxId = transaction.TxId;
        this.Type = transaction.Type;
        this.Amount = transaction.Amount;
        this.Fee = transaction.Fee;
        this.Status = transaction.Status || '';
        this.Confirmations = transaction.Confirmations;
        this.TimeStamp = Date.parse(transaction.TimeStamp);
        this.Address = transaction.Address || '';
    }

    get id(): number {
        return this.Id;
    }

    get currency(): string {
        return this.Currency;
    }

    get txId(): string {
        return this.TxId;
    }

    get type(): 'Deposit' | 'Withdraw' {
        return this.Type;
    }

    get amount(): number {
        return this.Amount;
    }

    get fee(): number {
        return this.Fee;
    }

    get status(): string {
        return this.Status;
    }

    get confirmations(): number {
        return this.Confirmations;
    }

    get timeStamp(): number {
        return this.TimeStamp;
    }

    get address(): string {
        return this.Address;
    }
}

export default Transaction;
