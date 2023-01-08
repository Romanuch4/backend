import { JSONSchemaType } from 'ajv';

interface Login {
  login: string;
  password: string;
}

export const loginSchema: JSONSchemaType<Login> = {
  type: 'object',
  properties: {
    login: {
      type: 'string',
      minLength: 2,
    },
    password: {
      type: 'string',
      minLength: 2,
    },
  },
  required: ['login', 'password'],
  additionalProperties: false,
};
