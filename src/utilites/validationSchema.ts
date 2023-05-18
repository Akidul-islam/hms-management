import * as yup from 'yup';
export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter your name.')
    .min(4, 'name length greater than 4')
    .max(20, 'less than 20'),
  email: yup
    .string()
    .email('Please enter a valid email.')
    .required('Please enter your email.'),
  phoneNumber: yup
    .string()
    .matches(/^\d{10}$/, 'Please enter a valid phone number.')
    .required('Please enter your phone number.'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters.')
    .required('Please enter a password.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match.')
    .required('Please confirm your password.'),
  profileImage: yup.mixed().required('Please upload a profile image.'),
});
