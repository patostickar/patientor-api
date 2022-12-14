import express from 'express';
import diagnoseService from '../services/diagnoseService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diagnoseService.getDiagnoses());
});

router.get('/:code', (req, res, next) => {
  try {
    const code = req.params.code;
    res.send(diagnoseService.getDiagnoseByCode(code));
  } catch (error) {
    next(error);
  }
});

export default router;
