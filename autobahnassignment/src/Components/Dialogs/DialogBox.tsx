import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const DialogBox = (props: any) => {
  console.log("props", props);
  const [open, setOpen] = useState(props.open);

  const handleClose = () => {
    setOpen(false);
    props.OnDialogHandle();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Post</DialogTitle>
        <DialogContent>{props.children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogBox;
