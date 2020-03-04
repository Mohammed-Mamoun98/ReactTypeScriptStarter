import React from "react";
import clsx from "clsx";
import "./select.css";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme
} from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import { Card, CardActionArea } from "@material-ui/core";

import { useSpring, animated } from "react-spring";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(5),
      minWidth: 120,
      maxWidth: 300
    },
    chips: {
      display: "flex",
      flexWrap: "wrap"
    },
    chip: {
      margin: 2
    },
    noLabel: {
      marginTop: theme.spacing(3)
    }
  })
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder"
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export default function MultipleSelect() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  React.useEffect(() => {
    console.log(personName);
  });

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPersonName(event.target.value as string[]);
  };

  const handleChangeMultiple = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const { options } = event.target as HTMLSelectElement;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  const [toggle, setToggle] = React.useState(false);
  const animation = useSpring({ opacity: toggle ? 1 : 0 });

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          // renderValue={selected => (selected as string[]).join(", ")}
          renderValue={selected => ""}
          MenuProps={MenuProps}
          disableUnderline
        >
          {names.map(name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Card
        style={{
          minHeight: "3rem",
          maxWidth: "7rem",
          marginTop: "1rem",
          marginLeft: "4rem"
        }}
      >
        <CardActionArea
          style={{
            minHeight: "3rem",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
          }}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {" "}
          <span>press me </span>
        </CardActionArea>
      </Card>

      <div
        className=""
        style={{
          minHeight: "30vh",
          display: "flex",
          backgroundColor: "#f4f4f4",
          marginTop: "2rem",
          ...animation
        }}
      >
        <animated.div
          className="test"
          style={{
            minHeight: "100%",
            marginRight: "1rem",
            flex: 1,
            ...animation
          }}
        ></animated.div>
        {toggle && (
          <div
            className="A"
            style={{
              minHeight: "100%",
              backgroundColor: "blue",
              flex: 0.5,
              transition: "all 2sec linear"
            }}
          ></div>
        )}
      </div>
    </div>
  );
}
