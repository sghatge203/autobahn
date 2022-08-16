import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addContact, updateContact } from "../app/contactSlice";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
type ContactFormData = {
  userId: string;
  title: string;
  body: string;
};

const schema = yup
  .object({
    userId: yup.string().required(),
    title: yup.string().required(),
    body: yup.string().required(),
  })
  .required();

interface NewContactProps {
  id: number;
}

const NewPost: React.FC<NewContactProps> = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const dispatch = useAppDispatch();

  const contactData = useAppSelector((state) =>
    state.contact.contactList.find((contact) => contact.id === id)
  );

  setValue("userId", contactData?.userId || "");
  setValue("title", contactData?.title || "");
  setValue("body", contactData?.body || "");

  const onSubmit = (data: ContactFormData) => {
    const { userId, title, body } = data;
    if (id) {
      editContact(userId, title, body);
      return;
    }
    dispatch(
      addContact({
        userId,
        title,
        body,
        id: new Date().getTime(),
      })
    );
    history.push("/");
  };
  const editContact = (userId: string, title: string, body: string) => {
    dispatch(updateContact({ userId, title, body, id }));
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="component-simple">User Id</InputLabel>
              <Input id="outlined-basic" {...register("userId")} />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
          <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="component-simple">Title</InputLabel>
              <Input id="outlined-basic" {...register("title")} />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
          <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="component-simple">Body</InputLabel>
              <Input id="outlined-basic" {...register("body")} />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default NewPost;
