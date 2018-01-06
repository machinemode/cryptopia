class TradeOrder {
    private OrderId: number;
    private FilledOrders: Array<number>;

    constructor(tradeOrder: any) {
        this.OrderId = tradeOrder.OrderId;
        this.FilledOrders = tradeOrder.FilledOrders.slice();
    }

    get orderId(): number {
        return this.OrderId;
    }

    get filledOrders(): Array<number> {
        return this.FilledOrders;
    }
}

export default TradeOrder;
