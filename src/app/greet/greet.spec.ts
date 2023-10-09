import { greet } from "./greet";

describe('Greet suit ', () => {

    it('should include the name in the message ', () => {
        expect(greet('N4ndo')).toContain('N4ndo')
    })


}
)