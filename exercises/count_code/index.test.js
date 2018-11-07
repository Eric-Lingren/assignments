
var countCode = require('./index.js');

describe('The count code function', function(){
    //  Tests to make sure the oputput is a number
    test('should return a number', function(){
        expect(typeof countCode('someString') ).toBe('number');
    })
    // Tests to make sure the input is not a number
    test('input should be a string', function(){
        expect(countCode(9)).toBe('You must provide a string as an argument');
        expect(countCode(true)).toBe('You must provide a string as an argument')
    })

    //Does it do what its supposed to do
    test('should retrun correct code count amount', function(){
        // countCode("aaacodebbb") // returns 1
        expect(countCode("aaacodebbb")).toBe(1);

        // countCode("codexxcode") // returns 2
        expect(countCode("codexxcode")).toBe(2);
        
        // countCode("cozexxcope") // returns 2
        expect(countCode("cozexxcope")).toBe(2);
    })

})

