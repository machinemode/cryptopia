import 'mocha';
import { expect } from 'chai';
import CryptopiaClient from '../../lib/CryptopiaClient';

describe('TypeScript', () => {
    it('should be able to import CryptopiaClient', () => {
        let client = new CryptopiaClient();
        expect(client).to.be.an.instanceof(CryptopiaClient);
        expect(client).to.have.property('market');
        expect(client).to.have.property('account');
        expect(client.market).to.not.be.undefined;
    });
});

