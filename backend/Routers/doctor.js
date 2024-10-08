import express from 'express'
import { deleteDoctor, getAllDoctor, getSingleDoctor, updateDoctor } from '../Controllers/doctorController.js'
import { authenticate, restrict } from '../auth/verifyToken.js';
import reviewRoute from './review.js';

const router = express.Router();

// nested route
router.use('/:doctorId/reviews', reviewRoute);

router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor);
router.delete('/:id', authenticate, restrict(['doctor']), deleteDoctor);


export default router;