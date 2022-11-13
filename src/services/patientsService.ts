import patientsData from '../../data/patients';
import { v4 as uuid } from 'uuid';
import { Patient, NewPatient, PublicPatient } from '../types';

const patients: Patient[] = patientsData;

const getPatients = (): Array<PublicPatient> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const getPatientsById = (id: string): Patient | undefined => {
  const patient = patients.find((patient) => patient.id === id);
  console.log(patient);
  return patient;
};

const addPatients = (entry: NewPatient): Patient => {
  const newPatient = {
    id: uuid(),
    ...entry,
  };
  return newPatient;
};

export default { getPatients, addPatients, getPatientsById };
