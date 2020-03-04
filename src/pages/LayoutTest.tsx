import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { useDispatch, useSelector } from "react-redux";
import { requestApiPost } from "../redux/actions/action";
import useFetch from "../hooks/useFetch";

const Layout = (props: any) => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [data, loaded, error] = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log("data from useFetch " + data + " loaded " + loaded);

  const [current, setCurrent] = useState(1);
  const [rowsPerPAge, setRowsPerPage] = useState(10);
  const total = 52;

  if (current > Math.ceil(total / rowsPerPAge)) {
    setCurrent(current - 1);
  }

  if (current < 1) {
    setCurrent(current + 1);
  }

  useEffect(() => {
    // dispatch(requestApiPost());
    console.log("there is a change!");
    //invoke onChange method from the parent here
  }, [current]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const getPages = () => {
    // let first = rowsPerPAge * (current - 1) + 1;
    let end = rowsPerPAge * current;
    let first = end - rowsPerPAge + 1;

    if (end > total) {
      end = total;
    }

    return {
      first,
      end
    };
  };

  const Paginatin = (props: any) => {
    return (
      <div className="" style={{ display: "flex", height: "10vh" }}>
        <input
          type="text"
          placeholder="rows per page"
          onChange={(e: any) => {
            // setCurrent(0);
            setRowsPerPage(e.target.value);
          }}
          value={rowsPerPAge}
        />
        <button>{"<<"}</button>
        <button
          onClick={() => {
            setCurrent(current - 1);
          }}
        >
          {"<"}
        </button>
        <button
          onClick={() => {
            setCurrent(current + 1);
          }}
        >
          {">"}
        </button>
        <button>{">>"}</button>
        <div className="">from {getPages().first} -- </div>
        <div className="">to {getPages().end}</div>
      </div>
    );
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div
        className=""
        style={{
          height: "100vh",
          minWidth: "100vw",
          backgroundColor: "#f4f4f4"
        }}
      >
        <Paper
          style={{
            margin: "auto",
            marginTop: "2rem",
            minHeight: "30rem",
            flexWrap: "wrap",
            maxWidth: "80%",
            flexBasis: "30%"
          }}
        >
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />

          <Paper
            style={{
              margin: "1rem",
              minHeight: "3rem",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center"
            }}
          >
            hello
          </Paper>
        </Paper>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default Layout;
