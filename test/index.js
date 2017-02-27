import { expect } from 'chai';
import {
    squareroot,
    reverseString
} from '../index.js';

describe('squareroot', function () {
    it.skip('should return a promise', function () {

    });

    it.skip('should get two async squareroot values, and add the numbers', function () {
        const value1 = 16;
        const value2 = 4;
        const expectedResult = 6;
    });

    it.skip('should be able to be run sequantially', function () {
        const originalNumber = 16;
        let secondSquareroot;
        expect(secondSquareroot).to.equal(2);
    });

    it.skip('should fail when a negative number is provided', function () {

    });

});

describe('reverseString', function () {
    it.skip('should reverse a string', function () {
        const originalString = 'indul a gorog aludni';
        const reversedString = 'indula gorog a ludni';
        expect(reverseString(originalString)).to.equal(reversedString);
    });
});
