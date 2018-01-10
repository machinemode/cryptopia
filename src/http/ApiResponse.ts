import Response from './Response';

class ApiResponse extends Response {
    private Success: boolean = false;
    private Message: string = '';
    private Data: any;
    private Error: string = '';

    constructor(statusCode: number, responseBody: string) {
        super(statusCode, responseBody);
        this.init(responseBody);
    }

    get success(): boolean {
        return this.Success && !this.error;
    }

    get message(): string {
        return this.Message;
    }

    get data(): any {
        return this.Data;
    }

    get error(): string {
        return this.Error;
    }

    private init(responseBody: string) {
        let response: any;

        try {
            response = JSON.parse(this.body);
        } catch (error) {
            this.Message = `Could not parse response\n`;
        }

        if (this.ok && response) {
            this.Success = response.Success;
            this.Message = response.Message;
            this.Data = response.Data;
            this.Error = response.Error;
        } else {
            let rawBody = this.body ? this.body.toString() : '';
            this.Message += `Server responded with ${this.status}: ${rawBody}`;
        }
    }
}

export default ApiResponse;
