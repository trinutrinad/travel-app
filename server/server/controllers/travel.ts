import { Request, Response } from 'express';

export const getDestinations = (req: Request, res: Response) => {
  res.json([
    { name: 'Paris', country: 'France' },
    { name: 'Tokyo', country: 'Japan' }
  ]);
};
