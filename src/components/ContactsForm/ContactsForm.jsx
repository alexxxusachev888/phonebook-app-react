import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { TextField, Button } from '@mui/material';
import { getContacts } from 'redux/selectors';
import { styled } from '@mui/system';
import { toast } from 'react-toastify';

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const ContactForm = () => {
  const dispatch = useDispatch();
  const currentContacts = useSelector(getContacts);

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    const form = evt.target.elements;
    const isDuplicate = currentContacts.some(contact => contact.name.toLowerCase() === form.name.value.toLowerCase());

    if(!isDuplicate) {
        dispatch(
            addContact({
              name: form.name.value,
              number: form.number.value,
            }),
          );
    } else {
        return toast.info('This contact is on the list!')
    }
    
    evt.target.reset();
  };

  
   
    


  return (
    <Form onSubmit={handleSubmitForm}>
      <TextField label="Name" name="name" required />
      <TextField label="Number" name="number" required />
      <Button type="submit" variant="contained" color="primary">
        Add contact
      </Button>
    </Form>
  );
}



