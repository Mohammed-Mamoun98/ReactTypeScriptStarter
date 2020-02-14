import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { KeyboardArrowDown } from "@material-ui/icons";
import { CardActionArea, Tabs, Tab, Paper } from "@material-ui/core";

const Home: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [title, setTitle] = React.useState<string>("Smart Search");

  const [value, setValue] = React.useState(2);

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

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<KeyboardArrowDown />}
      >
        {title}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

      <div className="">
        <Paper square>
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
        </Paper>
      </div>
    </div>
  );
};

export default Home;
