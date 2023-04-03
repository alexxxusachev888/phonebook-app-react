import { ContactsList } from '../components/ContactsList/ContactsList';
import { ContactForm } from '../components/ContactsForm/ContactsForm';
import { Filter } from '../components/Filter/Filter';
import { Container, Typography, Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contacts = () => {
  return (
    <Box
      minHeight="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxWidth="sm">
        <Box my={4} display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4" align="center" gutterBottom>
            Phonebook
          </Typography>
          <Box width="100%" mb={4}>
            <ContactForm />
          </Box>
          <Typography variant="h5" align="center" gutterBottom>
            Contacts
          </Typography>
          <Filter />
          <ContactsList />
          <ToastContainer />
        </Box>
      </Container>
    </Box>
  );
};