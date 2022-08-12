import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";

function createData(
  userId: string,
  id: string,
  title: string,
  component: string
) {
  return { userId, id, title, component };
}

const rows = [createData("1", "1", "Sagar Ghatge", "Yes comoinent")];

const TableComponent = (props: any) => {
  const { handleOnEdit, handleOnAdd } = props;
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
          sx={{ m: 2 }}
        >
          <Button variant="outlined" onClick={handleOnAdd}>
            Add Post
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ m: 2 }}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>User Id</TableCell>
                  <TableCell>Id</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Component</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    {" "}
                    <TableCell>{row.userId}</TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.component}</TableCell>
                    <TableCell onClick={handleOnEdit}>
                      <IconButton aria-label="delete">
                        <EditIcon color="success" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default TableComponent;
