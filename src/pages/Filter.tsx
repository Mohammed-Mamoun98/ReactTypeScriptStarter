import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  makeStyles,
  Card,
  Button,
  IconButton,
  BottomNavigationAction,
  BottomNavigation
} from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { Notifications, FilterList } from "@material-ui/icons";

const NewCard = (props: any) => (
  <Card
    style={{
      maxWidth: "60rem",
      backgroundColor: "#f4f4f4",
      width: "100%",
      ...props.style
    }}
    {...props}
  >
    <div
      className=""
      style={{
        padding: "1.1rem",
        display: "flex"
      }}
    >
      <div className="" style={{ flex: 2.5 }}>
        {props.name}
      </div>
      <div className="" style={{ flex: 1 }}>
        {props.calories}
      </div>
      <div className="" style={{ flex: 1 }}>
        {props.fat}
      </div>
      <div className="" style={{ flex: 1 }}>
        {props.carbs}
      </div>
      <div className="" style={{ flex: 1 }}>
        {props.protein}
      </div>
    </div>
  </Card>
);

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

interface Data {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

interface filter {
  id: number;
  age: number;
}

interface person {
  id: number;
  age: number;
  title: string;
}
const data = [
  {
    title: "hello",
    id: 1,
    age: 15
  },
  {
    title: "hello B",
    id: 2,
    age: 20
  },
  {
    title: "hello C",
    id: 3,
    age: 35
  }
];

const filterData = (data: person[], filter: filter) => {
  return data.filter(person => person.age > filter.age);
};

const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) => (
  <Slide direction="left" ref={ref} {...props} />
));

const Filter: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [openNotification, setOpenNotification] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenNotification(false);
  };

  // const Transition = React.forwardRef(function Transition(props, ref) {
  //   return <Slide direction="up" ref={ref} {...props} />;
  // });

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Filters"}</DialogTitle>
        <DialogContent style={{ minHeight: "50vh", maxWidth: "10rem" }}>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openNotification}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Notifications"}
        </DialogTitle>
        <DialogContent style={{ minHeight: "70vh", maxWidth: "50rem" }}>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper} style={{ maxWidth: "60rem" }}>
        <Table style={{ maxWidth: "60rem" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      {rows.map(row => (
        <NewCard
          {...row}
          style={{ marginTop: "1rem" }}
          onClick={handleClickOpen}
        />
      ))}
      <IconButton
        onClick={() => {
          setOpenNotification(true);
        }}
      >
        <Notifications />
      </IconButton>

      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <FilterList />
      </IconButton>

      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          label="Tasks"
          style={{
            fontSize: "2rem",
            borderBottom: "2px",
            borderBottomColor: "red",
            color: "red"
          }}
        />

        <BottomNavigationAction label="Campigons" />
      </BottomNavigation>
    </>
  );
};

export default Filter;
