const { expect } = require('@jest/globals');
const obj = require('../app');
const axios = require('axios');

test('add 1 plus 2 should equal 3', () => {
    expect(obj.sum(1, 2)).toBe(3);
});

test('say cheese', () => {
    expect(obj.sayCheese()).toBe('cheese');
});

// toBe looks for specific value
test('add 1 plus 2 should not equal 5', () => {
    expect(obj.sum(1, 2)).not.toBe(5);
});

// CHECK FOR TRUTHINESS

/**
 toBeNull
 toBeUndefined
 toBeDefined
 toBeTruthy
 toBeFalsy
 * 
 */

test('the input should be truthy', () => {
    expect(obj.checkValue(1)).toBeTruthy();
    expect(obj.checkValue(null)).toBeNull();
});

// toBe is only for primitive type
// for objects or arrays, we need to use toEqual() or toStrictEqual()
test('A new user name should be Anton', () => {
    // expect(obj.createUser()).toStrictEqual({ name: 'Anton' });
    expect(obj.createUser()).toEqual({ name: 'Anton' });
});

/**
 * CHECK NUMBERS
 * toBeLessThan
 */

//  CHECK STRINGS

test('Email should have an @', () => {
    expect(obj.checkEmail('a@example.com')).toMatch(/@/);
    expect(obj.checkEmail('abc@abc@example.com')).toMatch(/@{1}/);
    // expect(obj.checkEmail("example.com")).not.toMatch(/@/);
});

// CHECK ARRAYS
test('Array should have chicken', () => {
    // expect(obj.createUser()).toStrictEqual({ name: 'Anton' });
    const animals = ['cow', 'chicken', 'dog'];

    expect(obj.checkArray(animals)).toContain('chicken');
    expect(obj.checkArray(animals)).not.toContain('monster');
});

// CHECK ASYNC
test('The requested user should have Graham in name', () => {
    axios.get('https://jsonplaceholder.typicode.com/users/1').then((res) => {
        expect(res.data).toEqual('Leanne Graham');
    });
});
