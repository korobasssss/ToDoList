import { ErrorMessages } from '@/shared/constants';
import * as Yup from 'yup';

export const validationCategory = Yup.object().shape({
    name: Yup.string()
      .required('Имя обязательно')
      .max(255, ErrorMessages.MAX_LENGTH)
      .trim(),
    description: Yup.string().nullable()
      .max(512, ErrorMessages.MAX_LENGTH)
      .trim()
  });