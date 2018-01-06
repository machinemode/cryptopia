import HttpsClient from '../http/HttpsClient';
import Balance from './Balance';
import ApiResponse from '../http/ApiResponse';
import Currency from '../market/Currency';
import DepositAddress from './DepositAddress';
import Market from '../market/Market';
import OpenOrder from './OpenOrder';
import TradeHistory from './TradeHistory';
import Transaction from './Transaction';
import TradeOrder from './TradeOrder';

class AccountService {

    constructor(private httpsClient: HttpsClient) {
        let baseUri = `https://${this.httpsClient.host}`;
    }

    getBalance(currency?: Currency): Promise<Array<Balance>> {
        let path = `/api/GetBalance`;
        let params: any = {};

        if (currency) {
            params['CurrencyId'] = currency.id;
        }

        return this.httpsClient.post(path, params)
            .then((response) => {
                if (response.success) {
                    let balances: Array<Balance> = [];
                    response.data.forEach((balance: object) => {
                        balances.push(new Balance(balance));
                    });
                    return balances;
                } else {
                    throw new Error(`${response.error} ${response.message}`);
                }
            });
    }

    getDepositAddress(currency: Currency): Promise<DepositAddress> {
        let path = `/api/GetDepositAddress`;
        let params: any = {
            CurrencyId: currency.id
        };

        return this.httpsClient.post(path, params)
            .then((response) => {
                if (response.success) {
                    return new DepositAddress(response.data);
                } else {
                    throw new Error(`${response.error} ${response.message}`);
                }
            });
    }

    getOpenOrders(market: Market, count?: number): Promise<Array<OpenOrder>> {
        let path = `/api/GetOpenOrders`;
        let params: any = {
            Market: market.tradePairId
        };

        if (count) {
            params['Count'] = count;
        }

        return this.httpsClient.post(path, params)
            .then((response) => {
                if (response.success) {
                    let openOrders: Array<OpenOrder> = [];
                    response.data.forEach((openOrder: object) => {
                        openOrders.push(new OpenOrder(openOrder));
                    });
                    return openOrders;
                } else {
                    throw new Error(`${response.error} ${response.message}`);
                }
            });
    }

    getTradeHistory(market: Market, count?: number): Promise<Array<TradeHistory>> {
        let path = `/api/GetTradeHistory`;
        let params: any = {
            Market: market.tradePairId
        };

        if (count) {
            params['Count'] = count;
        }

        return this.httpsClient.post(path, params)
            .then((response) => {
                if (response.success) {
                    let tradeHistories: Array<TradeHistory> = [];
                    response.data.forEach((tradeHistory: object) => {
                        tradeHistories.push(new TradeHistory(tradeHistory));
                    });
                    return tradeHistories;
                } else {
                    throw new Error(`${response.error} ${response.message}`);
                }
            });
    }

    getTransactions(type: 'Deposit' | 'Withdraw', count?: number): Promise<Array<Transaction>> {
        let path = `/api/GetTransactions`;
        let params: any = {
            Type: type
        };

        if (count) {
            params['Count'] = count;
        }

        return this.httpsClient.post(path, params)
            .then((response) => {
                if (response.success) {
                    let transactions: Array<Transaction> = [];
                    response.data.forEach((transaction: object) => {
                        transactions.push(new Transaction(transaction));
                    });
                    return transactions;
                } else {
                    throw new Error(`${response.error} ${response.message}`);
                }
            });
    }

    submitTrade(market: Market, type: 'Buy' | 'Sell', rate: number, amount: number): Promise<TradeOrder> {
        let path = `/api/SubmitTrade`;
        let params: any = {
            Market: market.tradePairId,
            Type: type,
            Rate: rate,
            Amount: amount
        };

        return this.httpsClient.post(path, params)
            .then((response) => {
                if (response.success) {
                    return new TradeOrder(response.data);
                } else {
                    throw new Error(`${response.error} ${response.message}`);
                }
            });
    }

    cancelTrade(type: 'All' | 'Trade' | 'TradePair', id?: number): Promise<Array<number>> {
        let path = `/api/CancelTrade`;
        let params: any = {
            Type: type
        };

        if (type === 'Trade') {
            params['OrderId'] =  id;
        } else if (type === 'TradePair') {
            params['TradePairId'] = id;
        }

        return this.httpsClient.post(path, params)
            .then((response) => {
                if (response.success) {
                    return response.data;
                } else {
                    throw new Error(`${response.error} ${response.message}`);
                }
            });
    }

    submitTip(currency: Currency, activeUsers: number, amount: number): Promise<string> {
        let path = `/api/SubmitTip`;
        let params = {
            CurrencyId: currency.id,
            ActiveUsers: activeUsers,
            Amount: amount
        };

        return this.httpsClient.post(path, params)
            .then((response) => {
                if (response.success) {
                    return response.data;
                } else {
                    throw new Error(`${response.error} ${response.message}`);
                }
            });
    }

    submitWithdraw(currency: Currency, address: string, paymentId: number | string, amount: number): Promise<number> {
        let path = `/api/SubmitWithdraw`;
        let params = {
            CurrencyId: currency.id,
            Address: address,
            PaymentId: paymentId,
            Amount: amount
        };

        return this.httpsClient.post(path, params)
            .then((response) => {
                if (response.success) {
                    return response.data;
                } else {
                    throw new Error(`${response.error} ${response.message}`);
                }
            });
    }

    submitTransfer(currency: Currency, username: string, amount: number): Promise<string> {
        let path = `/api/SubmitTransfer`;
        let params = {
            CurrencyId: currency.id,
            Username: username,
            Amount: amount
        };

        return this.httpsClient.post(path, params)
            .then((response) => {
                if (response.success) {
                    return response.data;
                } else {
                    throw new Error(`${response.error} ${response.message}`);
                }
            });
    }
}

export default AccountService;
