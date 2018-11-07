

var sum = require('./sum');


describe('the sum function', function(){

 // (what you are testing,  )
    test('adds 1 + 2 to equal 3', function(){
        expect(sum(1, 2)).toBe(3)
    });

    it('should only receive numbers as inputs', function(){
        expect(sum('a', true)).toBe('please provide 2 numbers');
        expect(sum(4, 'string')).toBe('please provide 2 numbers');
    });

    it('should return a number', function(){
        expect( typeof sum(3, 4)).toBe('number');
        expect( typeof sum(10, 6)).toBe('number');
        expect( typeof sum('1', true)).not.toBe('number');
    })

});


// expect().toBe()
    //  Great for primitive values


