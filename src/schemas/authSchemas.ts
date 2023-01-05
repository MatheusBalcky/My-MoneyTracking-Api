import joi from 'joi';

export const signUp = joi.object({
  username: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required()
})

export const signIn = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required()
});