import React, { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  ClickAwayListener,
  Card
} from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";

interface PopOverProps {
  top?: number;
}
const CustomSelect = (props: any) => {
  const [title, setTitle] = React.useState<string>("Smart ");
  const [open, setOpen] = useState<Boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Event", event);
  };

  const handleClose = (e: any) => {
    setOpen(false);
  };

  const handleOpen = (e: any) => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div className="" style={{ position: "relative", width: "fit-content" }}>
        <Button
          // fullWidth
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleOpen}
          endIcon={<KeyboardArrowDown />}
          style={{ marginRight: "3rem" }}
        >
          {title}
        </Button>
        {open && (
          <Card
            className=""
            style={{ position: "absolute", top: 0, width: "100%" }}
          >
            <MenuItem
              onClick={(e: any) => {
                const selectedTitle = e.nativeEvent.target.outerText;
                console.log(selectedTitle);
              }}
            >
              hello
            </MenuItem>
            <MenuItem
              onClick={(e: any) => {
                const selectedTitle = e.nativeEvent.target.outerText;
                console.log(selectedTitle);
              }}
            >
              hello
            </MenuItem>
            <MenuItem
              onClick={(e: any) => {
                const selectedTitle = e.nativeEvent.target.outerText;
                console.log(selectedTitle);
              }}
            >
              hello
            </MenuItem>
          </Card>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default CustomSelect;
