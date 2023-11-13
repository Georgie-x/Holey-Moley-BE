const {showSearch, castSearch} = require("../utils")

describe('showSearch', () => {
    test('should return a new object', () => {
        const input = "The Simpsons"
        const output = showSearch(input)    
        expect(output).not.toEqual(input)
        expect(typeof output).toBe("object")
    });
});

describe('castSearch', () => {
    test.only('should return a new array object', () => {
        const input = 83
        const output = castSearch(input)    
        expect(output).not.toEqual(input)
        expect(typeof output).toBe("object") 
    });
});


