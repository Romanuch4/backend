import { Request, Response } from 'express';

const users: { [key: string]: any } = {
  '10ba038e-48da-487b-96e8-8d3b99b6d18a': {
    name: 'Roman',
  },
};

export const get = (req: Request, res: Response) => {
  res.cookie('data', new Date(), { httpOnly: true });
  res.send({ users: [] }).json();
};

export const post = (req: Request, res: Response) => {
  res.status(201).json({
    hash: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
  });
};

export const getHash = (req: Request, res: Response) => {
  const { userHash } = req.params;

  res.status(200).json(users[userHash]);
};

export const putHash = (req: Request, res: Response) => {
  const { userHash } = req.params;
  users[userHash] = req.body;
  res.status(200).json({
    hash: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
  });
};

export const deleteHash = (req: Request, res: Response) => {
  const { userHash } = req.params;
  delete users[userHash];
  res.status(204).json();
};
