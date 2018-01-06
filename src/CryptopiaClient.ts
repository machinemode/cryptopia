import HttpsClient from './http/HttpsClient';
import AccountService from './account/AccountService';
import MarketService from './market/MarketService';

const BASE_URI = 'www.cryptopia.co.nz';

class CryptopiaClient {
    private httpsClient: HttpsClient;
    private accountService: AccountService;
    private marketService: MarketService;

    constructor(key?: string, secret?: string) {
        this.httpsClient = new HttpsClient(BASE_URI, key, secret);
        this.marketService = new MarketService(this.httpsClient);

        if (key && secret) {
            this.accountService = new AccountService(this.httpsClient);
        }
    }

    get market(): MarketService {
        return this.marketService;
    }

    get account(): AccountService {
        return this.accountService;
    }
}

export default CryptopiaClient;

