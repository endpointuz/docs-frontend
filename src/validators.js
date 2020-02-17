import validator from 'validator';

export const emailValidator = (val) => (val && validator.isEmail(val) ? undefined : 'invalid email');

export const lengthValidator = (length) => (val) => (val && val.length >= length ? undefined : `invalid length ${length}`);
