import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('please enter your password')
    .min(8, 'your password is too short'),
  confirmPassword: Yup.string()
    .required('please retype your password')
    .oneOf([Yup.ref('password')], 'your password do not match'),
});
