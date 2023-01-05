import { Router } from 'express';

import { loginSchema } from '../../schemas/loginSchema.js';

import { validator } from '../../utils/validator.js';

import { post } from './handlers.js';

export const login = Router().post('/', validator(loginSchema), post);
