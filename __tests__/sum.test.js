// sum.test.js


import functions from '../code-to-unit-test/unit-test-me.js';

neNumber
test('isPhoneNumber - valid cases', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber - invalid cases', () => {
  expect(functions.isPhoneNumber('123456789')).toBe(false);
  expect(functions.isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail
test('isEmail - valid cases', () => {
  expect(functions.isEmail('test@example.com')).toBe(true);
  expect(functions.isEmail('user.name@domain.co')).toBe(true);
});
test('isEmail - invalid cases', () => {
  expect(functions.isEmail('test@.com')).toBe(false);
  expect(functions.isEmail('user@domain')).toBe(false);
});

// isStrongPassword
test('isStrongPassword - valid cases', () => {
  expect(functions.isStrongPassword('Abc12345')).toBe(true);
  expect(functions.isStrongPassword('Zyx987_!')).toBe(true);
});
test('isStrongPassword - invalid cases', () => {
  expect(functions.isStrongPassword('123')).toBe(false);
  expect(functions.isStrongPassword('abc')).toBe(false);
});

// isDate
test('isDate - valid cases', () => {
  expect(functions.isDate('12/25/2020')).toBe(true);
  expect(functions.isDate('01/01/2000')).toBe(true);
});
test('isDate - invalid cases', () => {
  expect(functions.isDate('2020/12/25')).toBe(false);
  expect(functions.isDate('13/01/2000')).toBe(false);
});

// isHexColor
test('isHexColor - valid cases', () => {
  expect(functions.isHexColor('#FFF')).toBe(true);
  expect(functions.isHexColor('#123ABC')).toBe(true);
});
test('isHexColor - invalid cases', () => {
  expect(functions.isHexColor('123456')).toBe(false);
  expect(functions.isHexColor('#ZZZZZZ')).toBe(false);
});