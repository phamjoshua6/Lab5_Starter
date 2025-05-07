import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor
} from '../code-to-unit-test/unit-test-me.js';

test('isPhoneNumber - valid cases', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber - invalid cases', () => {
  expect(isPhoneNumber('123456789')).toBe(false);
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('isEmail - valid cases', () => {
  expect(isEmail('test@example.com')).toBe(true);
  expect(isEmail('username@domain.co')).toBe(true); 
});
test('isEmail - invalid cases', () => {
  expect(isEmail('test@.com')).toBe(false);
  expect(isEmail('user@domain')).toBe(false);
});

test('isStrongPassword - valid cases', () => {
  expect(isStrongPassword('Abc12345')).toBe(true);
  expect(isStrongPassword('Zyx987_')).toBe(true); 
});
test('isStrongPassword - invalid cases', () => {
  expect(isStrongPassword('123')).toBe(false);
  expect(isStrongPassword('abc')).toBe(false);
});

test('isDate - valid cases', () => {
  expect(isDate('12/25/2020')).toBe(true);
  expect(isDate('01/01/2000')).toBe(true);
});
test('isDate - invalid cases', () => {
  expect(isDate('2020/12/25')).toBe(false);
  expect(isDate('abc')).toBe(false); 
});

test('isHexColor - valid cases', () => {
  expect(isHexColor('#FFF')).toBe(true);
  expect(isHexColor('#123ABC')).toBe(true);
});
test('isHexColor - invalid cases', () => {
  expect(isHexColor('12345')).toBe(false);
  expect(isHexColor('#ZZZZZZ')).toBe(false);
});