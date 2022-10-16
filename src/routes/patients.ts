import express from 'express';
import patientsService from '../services/patientsService';
import { NewPatient } from '../types';
import validateNewPatientType from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientsService.getPatients());
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(patientsService.getPatientsById(id));
});

router.post('/', (req, res) => {
  try {
    const newPatient = validateNewPatientType(req.body as NewPatient);
    res.json(patientsService.addPatients(newPatient));
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
