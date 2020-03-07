import React, { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  ClickAwayListener,
  Card,
  CardActionArea
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
      <div className="" style={{ position: "relative" }}>
        {/* <Button
          fullWidth
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleOpen}
          endIcon={<KeyboardArrowDown />}
        >
          {title}
        </Button> */}
        <CardActionArea
          onClick={handleOpen}
          style={{
            width: "fit-content",
            padding: " 0.5rem 1rem",
            borderRadius: "0.5rem",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div className="" style={{ marginRight: "2rem" }}>
            {title}
          </div>
          <KeyboardArrowDown />
        </CardActionArea>
        {open && (
          <Card
            className=""
            style={{
              position: "absolute",
              top: 0,
              width: "fit-content",
              transition: "width 1s ease-in-out"
            }}
          >
            <MenuItem onClick={handlePick}>hello 1alknalgn;l</MenuItem>
            <MenuItem onClick={handlePick}>hello 2</MenuItem>
            <MenuItem onClick={handlePick}>hello 3</MenuItem>
          </Card>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default CustomSelect;
