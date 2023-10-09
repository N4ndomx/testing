import { getResult } from './currencies'

describe('currencies suit', () => {
    it('should return the supported currencies ', () => {
        const resul = getResult();
        expect(resul).toContain('USD')
        expect(resul).toContain('AUD')
        expect(resul).toContain('EUR')

    })


})