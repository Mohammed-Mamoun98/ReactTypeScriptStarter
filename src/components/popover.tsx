import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";

interface PopOverProps {
  top?: number;
}
const PopOver = (props: any) => {
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
        style={{ position: "absolute", top: props.top }}
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
      </Menu>
    </div>
  );
};

export default PopOver;
