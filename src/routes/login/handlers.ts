import { Request, Response } from 'express';

export const post = (req: Request, res: any) => {
  try {
    res.status(200).json({ token: res.token });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'some server error',
    });
  }
};
