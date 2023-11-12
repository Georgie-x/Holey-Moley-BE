const {showSearch, castSearch} = require("../db/utils")




describe('showSearch', () => {
    test('should return a new object', () => {
        const input = "The Simpsons"
        const output = showSearch(input)    
        expect(output).not.toEqual(input)
        expect(typeof output).toBe("object")
    });
});

describe('castSearch', () => {
    test('should return a new object', () => {
        const input = 82
        const output = castSearch(input)    
        expect(output).not.toEqual(input)
        expect(typeof output).toBe("object") 
    });
});


// const expected = {"show_name": "The Simpsons", "show_id": 83, "show_img_url": "https://static.tvmaze.com/uploads/images/original_untouched/476/1192162.jpg"}