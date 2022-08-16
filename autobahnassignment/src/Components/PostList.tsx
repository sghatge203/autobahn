import { useState } from "react";
import PostInfo from "./PostInfo";
import Contact from "../Model/Contact";
import NewPost from "./NewPost";
import DialogBox from "./Dialogs/DialogBox";
import { Grid } from "@mui/material";

interface ContactProps {
  contacts: Contact[] | undefined;
}
const PostList: React.FC<ContactProps> = ({ contacts }) => {
  let [open, setOpen] = useState(false);
  let [id, setID] = useState(0);

  const ContactUpdate = (id: number) => {
    setID(id);
    setOpen(true);
  };

  const DialogHandle = () => {
    setOpen((current) => !current);
  };
  return (
    <Grid container>
      
        {contacts &&
          contacts.map((contact,index) => (
            <Grid item xs={12} sm={3} key={index}>
            <PostInfo
              key={contact.id}
              contact={contact}
              onContactUpdate={ContactUpdate}
            />
            </Grid>
          ))}
        {open && (
          <DialogBox open={open} OnDialogHandle={DialogHandle}>
            <NewPost id={id} />
          </DialogBox>
        )}
      
    </Grid>
  );
};

export default PostList;
