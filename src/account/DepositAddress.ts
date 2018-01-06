class DepositAddress {
    private Currency: string;
    private Address: string;
    private BaseAddress: string;

    constructor(depositAddress: any) {
        this.Currency = depositAddress.Currency;
        this.Address = depositAddress.Address;
        this.BaseAddress = depositAddress.BaseAddress;
    }

    get currency(): string {
        return this.Currency;
    }

    get address(): string {
        return this.Address;
    }

    get baseAddress(): string {
        return this.BaseAddress;
    }
}

export default DepositAddress;
