import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import styles from './LoginForm.module.css';

LoginForm.propTypes = {};

function LoginForm(props) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <label className={styles.label}>Username or email</label>
      <input
        {...register('username')}
        className={styles.input__text}
        placeholder='Username or email'
        type='text'
      />
      {/* <TextField
        className={styles.input__text}
        id='outlined-basic'
        variant='outlined'
        error
      /> */}
      <label className={styles.label}>Password</label>
      <input
        {...register('password')}
        className={styles.input__text}
        placeholder='Password'
        type='password'
      />
      {/* <Button
        type='submit'
        sx={{ backgroundColor: 'rgb(57, 0, 153)', color: '#fff' }}
      >
        Login
      </Button> */}
      <div className={styles.btn}>
        <button
          type='submit'
          className={styles.btn__login}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
