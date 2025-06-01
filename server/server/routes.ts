import { Router } from 'express';
import { getDestinations } from './controllers/travel.js';

const router = Router();

router.get('/destinations', getDestinations);

export default router;
