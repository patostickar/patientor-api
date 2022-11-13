import diagnoseData from '../../data/diagnoses';
import { DiagnoseEntry } from '../types';

const diagnoses: Array<DiagnoseEntry> = diagnoseData;

const getDiagnoses = (): Array<DiagnoseEntry> => {
  return diagnoses;
};

const getDiagnoseByCode = (code: string): DiagnoseEntry | undefined => {
  const diagnose = diagnoseData.find((diagnose) => diagnose.code === code);
  return diagnose;
};

export default {
  getDiagnoses,
  getDiagnoseByCode,
};
