import Response from './Response';

class ApiResponse extends Response {
    private Success: boolean;
    private Message: string;
    private Data: any;
    private Error: string;

    constructor(statusCode: number, responseBody: string) {
        super(statusCode, responseBody);

        if (this.ok) {
            let response = JSON.parse(this.body);
            this.Success = response.Success;
            this.Message = response.Message;
            this.Data = response.Data;
            this.Error = response.Error;
        }
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
}

export default ApiResponse;
