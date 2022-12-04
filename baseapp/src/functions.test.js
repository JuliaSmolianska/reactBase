import {
   difference,
   division
} from "./functions";

test('testing difference of 2 positive numbers', () => {
   expect(difference(5, 2)).toBe(3);
   expect(difference(2, 5)).toBe(-3);
   expect(difference(5, 5)).toBe(0);
})

test('testing difference of 2 negative numbers', () => {
   expect(difference(-6, -10)).toBe(4);
   expect(difference(-10, -6)).toBe(-4);
})

test('testing difference of 1 positive number and 1 negative number', () => {
   expect(difference(-4, 3)).toBe(-7);
   expect(difference(3, -4)).toBe(7);
   expect(difference(4, -4)).toBe(8);
})

test('testing division of 2 positive numbers, when numA > numB', () => {
   expect(division(10, 5)).toBe(2);
   expect(division(100, 4)).toBe(25);
})

test('testing division of 2 positive numbers when numA < numB', () => {
   expect(division(5, 10)).toBeLessThan(1);
   expect(division(1, 10)).toBe(0.1);
})