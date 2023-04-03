import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
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

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(
        register({
          name: form.elements.name.value,
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
          Register
        </Typography>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormControl>
            <TextField
              label="Username"
              name="name"
              type="text"
              variant="outlined"
              required
            />
          </FormControl>
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
          <SubmitButton 
              type="submit" 
              variant="contained" 
              color="primary"  
              size="large" 
              sx={{alignSelf: 'center'}}>
                Register
          </SubmitButton>
        </Form>
      </Container>
    </Box>
  );
};