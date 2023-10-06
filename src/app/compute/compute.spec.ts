import { compute } from './compute'

describe('compute test suite', () => {
    it('should return 0 if imput is negative ', () => {
        const resul = compute(-1);
        expect(resul).toBe(0);
    })

    it('Shoud increment the input if its positive', () => {
        const resul = compute(1);
        expect(resul).toBe(2)
    })
})

