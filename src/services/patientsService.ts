import patientsData from '../../data/patients.json';
import { v4 as uuid } from 'uuid';
import { PatientEntry, NewPatientEntry, WithoutSsnPatientEntry } from '../types';

const patients: WithoutSsnPatientEntry[] = patientsData as WithoutSsnPatientEntry[];

const getPatients = (): Array<WithoutSsnPatientEntry> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatients = (entry: NewPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: uuid(),
    ...entry,
  };
  return newPatientEntry;
};

export default { getPatients, addPatients };
