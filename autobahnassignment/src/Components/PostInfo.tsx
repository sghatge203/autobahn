import { removeContact } from "../app/contactSlice";
import { useAppDispatch } from "../app/hooks";
import Contact from "../Model/Contact";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Badge from "@mui/material/Badge";

interface ContactProps {
  contact: Contact;
  onContactUpdate: (id: number) => void;
}
const PostInfo: React.FC<ContactProps> = (props) => {
  const dispatch = useAppDispatch();
  const contact = props.contact;

  const setUpdatePage = (id: number) => {
    props.onContactUpdate(id);
  };

  return (
    <>
      <Card classes={{ root: "custom-card" }}>
        <CardActions classes={{ root: "card-actions" }}>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <Button color="primary">User Id - {contact.userId}</Button>
          </Typography>
          <div>
          <Fab
            onClick={() => setUpdatePage(contact.id)}
            size="small"
            color="primary"
            aria-label="add"
            sx={{mr:2}}
          >
            <EditIcon />
          </Fab>
          <Fab
            onClick={() => dispatch(removeContact({ id: contact.id }))}
            size="small"
            aria-label="add"
          >
            <DeleteIcon />
          </Fab>
          </div>
        </CardActions>
        <CardContent>
          <Typography
            sx={{ mb: 1.5 }}
            classes={{ root: "title" }}
            color="text.secondary"
          >
            {contact.title}
          </Typography>
          <Typography variant="body2">{contact.body}</Typography>
        </CardContent>
      </Card>
    </>
  );
};
export default PostInfo;
