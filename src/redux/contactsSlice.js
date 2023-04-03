import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const contactsList = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
    items: [],
    isLoading: false,
    error: null
    },
    'filter': '',
    edit: {id: null, name: null, number: null},
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        task => task.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    },
    reducers: {
      searchContact: {
        reducer(state, {payload}) {
          state.filter = payload;
        },
        prepare(query) {
          return {
            payload: query,
          }
        }
      },
      editContact: {
        reducer(state, {payload}) {
          state.edit = payload;
        },
        prepare(contact) {
          return {
            payload: contact,
          }
        }
      }
    }
  })

export const { searchContact, editContact  } = contactsList.actions;
export const contactsReducer = contactsList.reducer;
