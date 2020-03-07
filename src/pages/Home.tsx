import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { KeyboardArrowDown } from "@material-ui/icons";
import { CardActionArea, Tabs, Tab, Paper, Card } from "@material-ui/core";
import CustomSelect from "../components/customSelect";
import DatePicker from "../components/picker";
import PopOver from "../components/popover";

interface person {
  name: string;
  age: number;
}

const data = [
  {
    name: "berry",
    age: 27
  },
  {
    name: "aly",
    age: 29
  }
];

//press the button
//send the key to sort
//if the key is already used toggle between desc and asce
//show the icon according to the state (desc and asec) and for wich one by the key
//

const Home: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [title, setTitle] = React.useState<string>("Smart Search");

  const [value, setValue] = React.useState(2);

  const persons: person[] = [
    { name: "Mido", age: 22 },
    { name: "mark", age: 25 }
  ];

  const names = persons.map((person: person) => person.name);
  const ages = persons.map((person: person) => person.age);

  //this is not a header
  //will take the with of the header for consistancy
  //name age
  //mido 24
  //mark 30

  //the row object shoud be like this [{value : 'mido' , width : asTheHeader}]

  const RowModel = (props: any) => {
    return (
      <Paper style={{ ...props.style, minHeight: "2.5rem", display: "flex" }}>
        {}
      </Paper>
    );
  };

  const sortedArray = (array: any) => {
    if (title !== "Smart Search") {
      return array.sort((a: any, b: any) => {
        if (a[title] < b[title]) return -1;
        if (b[title] < a[title]) return 1;

        return 0;
      });
    } else {
      return array;
    }
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Event", event);

    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e: any) => {
    const selectedTitle = e.nativeEvent.target.outerText;
    const value = selectedTitle ? selectedTitle : "Smart Search";
    setTitle(value);

    setAnchorEl(null);
  };

  const onChange = () => {
    console.log("change happend!");
  };

  return (
    <div>
      <CustomSelect single />
      <PopOver style={{ margin: "5rem" }} position={{ bottom: 50, right: -90 }}>
        <Card
          style={{
            height: "2rem",
            backgroundColor: "#f4f4f4",
            textAlign: "center"
          }}
        >
          {" "}
          hello
        </Card>
      </PopOver>
      <div className="" style={{ marginTop: "10rem" }}>
        <DatePicker onChange={onChange} />
      </div>
      {false && (
        <div className="" style={{ display: "flex", position: "relative" }}>
          <Button
            // fullWidth
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            endIcon={<KeyboardArrowDown />}
            style={{ marginRight: "3rem" }}
          >
            {title}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{ position: "absolute", top: 0 }}
            // anchorOrigin={{
            //   vertical: "center",
            //   horizontal: "left"
            // }}
            // transformOrigin={{
            //   vertical: "bottom",
            //   horizontal: "right"
            // }}
          >
            {/* the min width will be a prop shared between buttun and first menu item */}
            <MenuItem onClick={handleClose} style={{ minWidth: "10rem" }}>
              age
            </MenuItem>
            <MenuItem onClick={handleClose}>name</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
            <MenuItem onClick={handleClose}>Smart Search</MenuItem>
          </Menu>
        </div>
      )}

      {false && (
        <div
          className=""
          style={{ backgroundColor: "red", width: "fit-content" }}
        >
          hello
        </div>
      )}
      {/* <div className="" style={{ minHeight: "500vh" }}></div> */}
      {/* <div className="">
        <div className="">
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Active" />
            <Tab label="Disabled" disabled />
            <Tab label="Active" />
          </Tabs>
        </div>

        {sortedArray(data).map((row: any) => (
          <div className="" style={{ display: "felx", width: "10rem" }}>
            <div className="">
              <h3>{row.name}</h3>
            </div>
            <div className="">
              <h3>{row.age}</h3>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Home;

// <MenuItem>
// <Checkbox
//   checked={checked}
//   onChange={handleboxChange}
//   value="primary"
//   inputProps={{ "aria-label": "primary checkbox" }}
// />
// </MenuItem>
