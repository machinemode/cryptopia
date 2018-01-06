const BIG_ENDIAN_BYTE_ORDER_MARK = 65279;

const HTTP_2XX_MIN = 200;
const HTTP_2XX_MAX = 299;

class Response {

    constructor(private statusCode: number, private responseBody: string) {
        if (responseBody.charCodeAt(0) === BIG_ENDIAN_BYTE_ORDER_MARK) {
            this.responseBody = responseBody.substring(1);
        } else {
            this.responseBody = responseBody;
        }
    }

    get body(): string {
        return this.responseBody;
    }

    get ok(): boolean {
        return this.statusCode >= HTTP_2XX_MIN && this.statusCode <= HTTP_2XX_MAX;
    }

    get status(): number {
        return this.statusCode;
    }
}

export default Response;
