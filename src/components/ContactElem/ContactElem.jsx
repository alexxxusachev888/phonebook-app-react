import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemText,
  IconButton,
  Box,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { createPortal } from 'react-dom';
import { EditForm } from 'components/Modal/Modal';
import { editContact } from '../../redux/contactsSlice';

import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

const rootModalRef = document.querySelector('#modal');

export function ContactElem({ id, name, number }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleEditClick = () => {
    dispatch(editContact({ id, name, number }));
    setShowModal(true);
  };

  return (
    <>
      <ListItem
        disableGutters
        sx={{
          position: '',
          width: '100%',
          display: 'flex',
          justifyContent: "space-between",
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
          },
          ...(isMobile && {
            flexWrap: 'wrap',
            justifyContent: "center",
            gap: '10px',
          }),
        }}
      >
        <Box sx={{ width: '100%', display: 'flex',
            alignItems: 'center', '&:hover': { backgroundColor: 'transparent' }, 
            ...(isMobile && { justifyContent: "space-between"}),}}>
          <IconButton edge="start" aria-label="phone">
            <PhoneIcon />
          </IconButton>
          <ListItemText
            sx={{ marginLeft: '10px', 
            display: 'flex',
            alignItems: 'center',
            gap: '20px', 
            ...(isMobile && { justifyContent: "space-between"}),}}
            primary={name}
            secondary={number}
          />
        </Box>
        <Box sx={{width: '100%', justifyContent: "flex-end", display: 'flex', gap: '10px', 
        ...(isMobile && {
              justifyContent: "space-between"
            }),}}>
          <Button 
                edge="end" 
                aria-label="edit" 
                onClick={handleEditClick}
                variant="outlined" 
                startIcon={<EditIcon />}>
            Edit
            </Button>
          <Button 
                edge="end"
                aria-label="delete"
                onClick={() => dispatch(deleteContact(id))}
                variant="outlined" 
                startIcon={<DeleteIcon />}>
            Delete
            </Button>
        </Box>
      </ListItem>
      {showModal &&
        createPortal(<EditForm onClose={() => setShowModal(false)} />, rootModalRef)}
    </>
  );
}

ContactElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
