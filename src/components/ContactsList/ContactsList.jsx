import { List, Box, CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';
import { ContactElem } from 'components/ContactElem/ContactElem';
import { getIsLoading, getError, contactsToRender } from '../../redux/selectors';

export const ContactsList = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(contactsToRender);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List sx={{width: '100%', position: 'relative'}}>
      <Box position='absolute' top='50%' left='50%' display="flex" justifyContent="center" alignItems="center" minHeight="100px">
        {isLoading && <CircularProgress />}
      </Box>
      {error && <p>Error: {error}</p>}
      {contacts.map(({ id, name, number }) => (
        <ContactElem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  )
}