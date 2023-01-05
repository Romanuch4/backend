import { JSONSchemaType } from 'ajv';

interface User {
  name: string;
  email: string;
  phone: string;
  password: string;
  sex: string;
  role?: string;
}

export const userSchema: JSONSchemaType<User> = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 2,
    },
    email: {
      type: 'string',
      format: 'email',
    },
    phone: {
      type: 'string',
      pattern: '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$',
    },
    password: {
      type: 'string',
      minLength: 6,
      maxLength: 40,
    },
    sex: {
      type: 'string',
      enum: ['m', 'f'],
    },
    role: {
      type: 'string',
      enum: ['newbie', 'student', 'teacher'],
      nullable: true,
    },
  },
  required: ['name', 'email', 'phone', 'password', 'sex'],
  additionalProperties: false,
};
