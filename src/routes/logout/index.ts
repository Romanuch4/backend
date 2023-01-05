import { Router } from 'express';

import { post } from './handlers.js';

export const logout = Router().post('/', post);
