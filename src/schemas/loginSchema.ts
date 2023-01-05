import { JSONSchemaType } from 'ajv';

interface Login {
  authorization: string;
}

export const loginSchema: JSONSchemaType<Login> = {
  type: 'object',
  properties: {
    authorization: {
      type: 'string',
      minLength: 2,
    },
  },
  required: ['authorization'],
  additionalProperties: false,
};
