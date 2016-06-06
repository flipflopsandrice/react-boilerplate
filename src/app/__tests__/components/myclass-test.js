jest.dontMock('../../components/myclass.js');

var MyClass = require('../../components/myclass.js').default;

describe('returnSomething', () => {
  it ('returns something', () => {
    let one = 'bob',
        two = 'hello';

    var instance = new MyClass(one);
    expect(instance.returnSomething(two)).toEqual(one + two);
  })
})
