import React from "react";
import { Button, MenuItem, Menu } from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";

const MultiSelect = (props: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [title, setTitle] = React.useState<string>("Smart Search");

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
        style={{ width: "100%" }}
      >
        <MenuItem onClick={handleClose}>age</MenuItem>
        <MenuItem onClick={handleClose}>name</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default MultiSelect;
