
var reverse = require('./reverse');


test('returns given array in reverse', function(){
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);

})
