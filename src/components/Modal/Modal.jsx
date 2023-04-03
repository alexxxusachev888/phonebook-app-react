import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact, fetchContacts } from '../../redux/operations';
import { getToUpdate } from '../../redux/selectors';
import { Modal, TextField, Grid, Box } from '@mui/material';
import Button from '@mui/material/Button';

export const EditForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const editingContact = useSelector(getToUpdate);
  
  const [name, setName] = useState(editingContact.name);
  const [number, setNumber] = useState(editingContact.number);

  const handleEditForm = (evt) => {
    evt.preventDefault();
    dispatch(
      updateContact({
        id: editingContact.id,
        name: name,
        number: number,
      })
    );
    dispatch(fetchContacts());
    onClose();
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid', 
    borderColor: 'primary.main', 
    borderRadius: '8px', 
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Grid container direction="column" spacing={2} sx={style}>
        <Grid item>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(evt) => setName(evt.target.value)}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Grid>
        <Grid item>
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={number}
            onChange={(evt) => setNumber(evt.target.value)}
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Grid>
        <Grid item>
          <Box display="flex" justifyContent="space-between">
            <Button type="submit" variant="contained" color="primary" onClick={handleEditForm}>
              Update
            </Button>
            <Button type="button" variant="contained" color="secondary" onClick={onClose}>
              Cancel
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Modal>
  );
};
