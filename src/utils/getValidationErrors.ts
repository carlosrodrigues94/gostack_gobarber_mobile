import { ValidationError } from 'yup';

interface FieldErrors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): FieldErrors {
  const validationErrors: FieldErrors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });
  return validationErrors;
}
