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

const DatePicker = (props: any) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    // props.onChange();
    setSelectedDate(date);
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
        </Paper>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
