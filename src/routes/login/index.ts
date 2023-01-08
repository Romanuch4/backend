import { Router } from 'express';

import { auth } from '../../utils/authentication.js';

//import { loginSchema } from '../../schemas/loginSchema.js';

//import { validator } from '../../utils/validator.js';

import { post } from './handlers.js';

export const login = Router().post('/', auth, post);
