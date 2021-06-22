const { expect, test, describe } = require('@jest/globals');
const { returnTwo, greeting, add, multiply, divide, subtract, evenNumber } = require('./functions');

test('returns value of 2', function() {
    expect(returnTwo()).toBe(2);
});

describe('greetings return a string of Hello, James. and Hello, Jill.', function() {
    test('greets with a string of Hello, James.', function() {
        expect(greeting('James')).toEqual('Hello, James.');
    });
    
    test('greets with a string of Hello, Jill.', function() {
        expect(greeting('Jill')).toEqual('Hello, Jill.');
    });

});

describe('Math Functions', function() {
    test('Add function should add two numbers', function() {
        expect(add(1, 2)).toEqual(3);
        expect(add(5, 9)).toEqual(14);
    });
    test('multiply funciton should multiply two numbers', function() {
        expect(multiply(2, 2)).toEqual(4);
        expect(multiply(4, 4)).toEqual(16);
    });
    test('divide function should divide two numbers', function() {
        expect(divide(2, 2)).toEqual(1);
        expect(divide(4, 2)).toEqual(2);
    });
    test('subtract function should divide two numbers', function() {
        expect(subtract(2, 2)).toEqual(0);
        expect(subtract(4, 2)).toEqual(2);
        expect(subtract(4, 2)).not.toBeNaN();
    });
});

test('function should return whether or not number is even', function() {
    expect(evenNumber(2)).toBeTruthy();
});