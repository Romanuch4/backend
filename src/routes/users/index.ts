import { Router } from 'express';

import { userSchema } from '../../schemas/userSchema.js';

import { validator } from '../../utils/validator.js';

import { get, post, getHash, putHash, deleteHash } from './handlers.js';

export const users = Router()
  .get('/', get)
  .post('/', validator(userSchema), post)
  .get('/:userHash', getHash)
  .put('/:userHash', validator(userSchema), putHash)
  .delete('/:userHash', deleteHash);
