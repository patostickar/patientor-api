import { NewPatient, Gender } from './types';

const validateNewPatientType = (patient: NewPatient): NewPatient => {
  const newPatient = {
    name: parseName(patient.name),
    dateOfBirth: parseDateOfBirth(patient.dateOfBirth),
    ssn: parseSsn(patient.ssn),
    gender: parseGender(patient.gender),
    occupation: parseOccupation(patient.occupation),
    entries: patient.entries,
  };

  return newPatient;
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isSsn = (ssn: string): boolean => {
  return /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/.test(ssn);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Gender).includes(param);
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) throw new Error('Incorrect or missing name');
  return name;
};

const parseDateOfBirth = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date))
    throw new Error('Incorrect or missing date of birth');
  return date;
};

const parseSsn = (ssn: unknown): string => {
  if (!ssn || !isString(ssn) || !isSsn(ssn)) throw new Error('Incorrect or missing SSN');
  return ssn;
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) throw new Error('Incorrect or missing gender');
  return gender;
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) throw new Error('Incorrect or missing occupation');
  return occupation;
};

// const parseEntries = (entries: unknown): Array<Entry> => {
//   if(!entries || )
// }

export default validateNewPatientType;
