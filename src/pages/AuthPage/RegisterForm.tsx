import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDropzone } from 'react-dropzone';
import { registerSchema } from '../../services/utils/validationSchema';
import { useStyles } from '../../services/styles/form.style';

function RegisterForm() {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      profileImage: null,
    },
    mode: 'onChange',
  });

  // eslint-disable-next-line
  const onDrop = (acceptedFiles: any) => {
    setValue('profileImage', acceptedFiles[0]);
  };

  const acceptedFileTypes: string[] = ['image/jpeg', 'image/png', 'image/jpg'];

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: acceptedFileTypes,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form
      autoComplete='off'
      className={classes.form}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        type='text'
        label='Name'
        variant='outlined'
        {...register('name')}
        error={Boolean(errors.name)}
        helperText={errors.name?.message}
      />
      <TextField
        type='email'
        label='Email'
        variant='outlined'
        {...register('email')}
        error={Boolean(errors.email)}
        helperText={errors.email?.message}
      />
      <TextField
        className={classes.root}
        type='text'
        label='Phone Number'
        variant='outlined'
        {...register('phoneNumber')}
        error={Boolean(errors.phoneNumber)}
        helperText={errors.phoneNumber?.message}
      />
      <TextField
        type='password'
        label='Password'
        variant='outlined'
        {...register('password')}
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
      />
      <TextField
        type='password'
        label='Confirm Password'
        variant='outlined'
        {...register('confirmPassword')}
        error={Boolean(errors.confirmPassword)}
        helperText={errors.confirmPassword?.message}
      />
      <div {...getRootProps()}>
        <input accept='.jpeg' {...getInputProps()} />
        <TextField
          type='text'
          label='Profile Image'
          variant='outlined'
          disabled
          value={
            // eslint-disable-next-line
            Boolean(register('profileImage'))
              ? register('profileImage')[0]?.name
              : ''
          }
          error={Boolean(errors.profileImage)}
          helperText={errors.profileImage?.message}
        />
        <Button variant='contained' component='span'>
          Upload
        </Button>
      </div>
      <Button variant='contained' type='submit'>
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
