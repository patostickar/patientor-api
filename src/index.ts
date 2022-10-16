import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import diagnosesRouter from './routes/diagnoses';
import patientsRouter from './routes/patients';
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/diagnoses', diagnosesRouter);
app.use('/api/patients', patientsRouter);

app.use((error: Error, _req: Request, res: Response, next: NextFunction) => {
  let errorMessage = 'Something went wrong.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  res.status(400).send(errorMessage);
  next(error);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
