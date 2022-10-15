import express from 'express';
import patientsService from '../services/patientsService';
import { NewPatientEntry } from '../types';
import validateNewPatientEntryType from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientsService.getPatients());
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry = validateNewPatientEntryType(req.body as NewPatientEntry);
    res.json(patientsService.addPatients(newPatientEntry));
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
