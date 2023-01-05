import { Request, Response } from 'express';

export const post = (req: Request, res: Response) => {
  try {
    if (Math.random() > 0.5) {
      throw new Error('');
    } else {
      res.status(204).json();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'some server error',
    });
  }
};
