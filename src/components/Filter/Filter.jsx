import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { searchContact } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <TextField
      label="Find contact by name"
      value={filter}
      onChange={(evt) => dispatch(searchContact(evt.target.value))}
      fullWidth
    />
  );
}
