const {showSearch, castSearch} = require("../utils")

describe('showSearch', () => {
    test.skip('should return a new object', () => {
        const input = "The Simpsons"
        const output = showSearch(input)    
        expect(output).not.toEqual(input)
        expect(typeof output).toBe("object")
    });
});

describe('castSearch', () => {
    test.skip('should return a new array object', () => {
        const input = 269
        const output = castSearch(input)    
        expect(output).not.toEqual(input)
        expect(typeof output).toBe("object") 
    });
});


