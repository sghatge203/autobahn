import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contact from "../Model/Contact";
import { RootState } from "../app/store";

type initialStateType = {
  contactList: Contact[];
};

const contactList: Contact[] = [];

const initialState: initialStateType = {
  contactList,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contactList.unshift(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const {
        payload: { id, userId, title, body },
      } = action;
      state.contactList = state.contactList.map((contact) =>
        contact.id === id ? { ...contact, userId, title, body } : contact
      );
    },
    removeContact: (state, action: PayloadAction<{ id: number }>) => {
      state.contactList = state.contactList.filter(
        (contact) => contact.id !== action.payload.id
      );
    },
    usersSuccess: (state, action) => {
      state.contactList = action.payload;
    },
  },
});
export const { addContact, updateContact, removeContact, usersSuccess } =
  contactSlice.actions;

export const fetchUsers = () => async (dispatch: any) => {
  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((response) => {
      dispatch(usersSuccess(response));
    })
    .catch((err) => {
      return console.error(err.message);
    });
};

export default contactSlice.reducer;
