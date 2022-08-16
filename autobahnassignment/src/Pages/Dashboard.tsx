import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../app/contactSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import DialogBox from "../Components/Dialogs/DialogBox";
import Navbar from "../Components/Navbar";
import NewPost from "../Components/NewPost";
import PostList from "../Components/PostList";
import Contact from "../Model/Contact";
const Dashboard: React.FC = (props) => {
  const dispatch = useAppDispatch();
  let [open, setOpen] = useState(false);
  const [contactListData, setContactListData] = useState<Contact[]>();
  const {contactList} = useAppSelector(state=>state.contact)
  useEffect(() => {
    dispatch(fetchUsers());
    setContactListData(contactList);
  }, [dispatch]);

  const DialogHandle = () => {
    setOpen((current) => !current);
  };

  return (
    <div>
      <Navbar handleOpen={DialogHandle} />
      <PostList contacts={contactListData} />
      {open && (
        <DialogBox open={open} OnDialogHandle={DialogHandle}>
          <NewPost id={0} />
        </DialogBox>
      )}
    </div>
  );
};

export default Dashboard;
