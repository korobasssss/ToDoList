import { ErrorMessages } from '@/shared/constants';
import * as Yup from 'yup';

export const validationItem = Yup.object().shape({
    name: Yup.string()
      .required('Имя обязательно')
      .max(255, ErrorMessages.MAX_LENGTH)
      .trim(),
    description: Yup.string()
      .max(1536, ErrorMessages.MAX_LENGTH)
      .trim()
  });