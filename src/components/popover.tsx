import React, { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  ClickAwayListener,
  Card
} from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";

interface Position {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}

interface PopOverProps {
  position?: Position;
  single?: boolean;
  style?: any;
  children: any;
}
const PopOver = (props: PopOverProps) => {
  const [title, setTitle] = React.useState<string>("Smart ");
  const [open, setOpen] = useState<Boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Event", event);
  };

  const handlePick = (e: any) => {
    const selectedTitle = e.nativeEvent.target.outerText;
    setTitle(selectedTitle);
    if (props.single) handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (e: any) => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div
        className=""
        style={{ position: "relative", width: "fit-content", ...props.style }}
      >
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
            style={{
              position: "absolute",
              // top: 0,
              width: "100%",
              ...props.position
            }}
          >
            {/* <MenuItem onClick={handlePick}>hello 1</MenuItem>
            <MenuItem onClick={handlePick}>hello 2</MenuItem>
            <MenuItem onClick={handlePick}>hello 3</MenuItem> */}

            {props.children}
          </Card>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default PopOver;
