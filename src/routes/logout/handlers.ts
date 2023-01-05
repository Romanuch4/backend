import { Request, Response } from 'express';

export const post = (req: Request, res: Response) => {
  try {
    if (!Object.keys(req.body).length) {
      if (Math.random() > 0.5) {
        res.status(204).json();
      } else {
        res.status(401).json({
          message: 'not authenticated',
        });
      }
    } else {
      res.status(400).json({
        message: 'incorrect payload',
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'some server error',
    });
  }
};
