const functions = require('../functions');

test('test whether 2 plus 2 equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('say hi test', () => {
    expect(functions.saySomething('Anton')).toBe('hello Anton');
});
