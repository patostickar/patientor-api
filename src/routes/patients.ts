import express from 'express';
import patientsService from '../services/patientsService';
import { NewPatient } from '../types';
import validateNewPatientType from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientsService.getPatients());
});

router.get('/:id', (req, res, next) => {
  try {
    const id = req.params.id;
    res.send(patientsService.getPatientsById(id));
  } catch (error) {
    next(error);
  }
});

router.post('/', (req, res, next) => {
  try {
    const newPatient = validateNewPatientType(req.body as NewPatient);
    res.json(patientsService.addPatients(newPatient));
  } catch (error) {
    next(error);
  }
});

export default router;
