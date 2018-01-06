const crypto = require('crypto');

class Amx {
    constructor(private baseUri: string, private key: string, private secret: string) {

    }

    makeToken(path: string, params: any): string {
        let uri = encodeURIComponent(`${this.baseUri}${path}`).toLowerCase();
        let nonce = Math.floor(Date.now());
        let hashedParams = crypto.createHash('md5')
            .update(JSON.stringify(params))
            .digest('base64');

        let signature = crypto.createHmac('sha256', new Buffer(this.secret, 'base64'))
            .update(`${this.key}POST${uri}${nonce}${hashedParams}`)
            .digest('base64');

        return `amx ${this.key}:${signature}:${nonce}`;
    }
}

export default Amx;
