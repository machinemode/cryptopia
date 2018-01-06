import * as https from 'https';
import Amx from './Amx';
import ApiResponse from './ApiResponse';
import { IncomingMessage, RequestOptions, ClientRequest } from 'http';

class HttpsClient {
    private amx: Amx;
    private ca: string | Buffer;

    constructor(private hostname: string, private key?: string, private secret?: string) {
        // If https fails: https://www.cryptopia.co.nz/Forum/Thread/4351
        // this.ca = fs.readFileSync(`${__dirname}/cryptopia.pem`);

        if (this.key && this.secret) {
            this.amx = new Amx(`https://${this.host}`, this.key, this.secret);
        }
    }

    get host(): string {
        return this.hostname;
    }

    get(path: string): Promise<ApiResponse> {
        let options = {
            hostname: this.hostname,
            ca: this.ca,
            path: path,
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        };

        return new Promise((resolve, reject) => {
            this.request(options, undefined, resolve, reject)
                .on('error', (error) => reject(error))
                .end();
        });
    }

    post(path: string, body: any = {}): Promise<ApiResponse> {
        let options = {
            hostname: this.hostname,
            ca: this.ca,
            path: path,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': this.amx.makeToken(path, body),
                'Content-Type': 'application/json'
            }
        };

        return new Promise((resolve, reject) => {
            this.request(options, body, resolve, reject)
                .on('error', (error) => reject(error))
                .end();
        });
    }

    private request(options: any, requestBody: any, resolve: (apiResponse: ApiResponse) => void, reject: (reason: Error) => void): ClientRequest {
        let request = https.request(options, (res: IncomingMessage) => this.onResponse(res, resolve, reject));

        if (requestBody) {
            request.write(JSON.stringify(requestBody));
        }

        return request;
    }

    private onResponse(res: IncomingMessage, resolve: (apiResponse: ApiResponse) => void, reject: (reason: Error) => void) {
        let responseBody = '';

        res.on('data', (data: string | Buffer) => {
            if (data instanceof Buffer) {
                responseBody += data.toString();
            } else {
                responseBody += data;
            }
        });

        res.on('end', () => {
            let response = new ApiResponse(res.statusCode || 0, responseBody);
            if (response.ok) {
                resolve(response);
            } else {
                let reason = `Server responded with ${response.status}\n${response.body.toString()}`;
                reject(new Error(reason));
            }
        });
    }
}

export default HttpsClient;
