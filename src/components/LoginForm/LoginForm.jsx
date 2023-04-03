import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const FormControl = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const SubmitButton = styled(Button)({
  alignSelf: 'center',
  fontSize: '1.25rem',
  minWidth: '160px',
  padding: '12px 24px',
});

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
          login({
            email: form.elements.email.value,
            password: form.elements.password.value,
          })
        );
        form.reset();
      };

    return (

      <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Log In
        </Typography>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormControl>
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              required
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              required
            />
          </FormControl>
          <SubmitButton type="submit" variant="contained" color="primary">
            Log In
          </SubmitButton>
        </Form>
      </Container>
    </Box>
    )
}
















/* import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
 */