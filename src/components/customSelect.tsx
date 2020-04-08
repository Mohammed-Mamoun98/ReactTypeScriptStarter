import React, { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  ClickAwayListener,
  Card,
  CardActionArea,
} from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";

interface PopOverProps {
  top?: number;
}
interface DropDown {
  name: string;
  id: string;
}
interface Select {
  options: DropDown[];
  value: string;
  onSelect: (value: string) => void;
}

const CustomSelect = (props: Select) => {
  const [title, setTitle] = React.useState<string>("Smart ");
  const [open, setOpen] = useState<Boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Event", event);
  };

  const handlePick = (e: any) => {
    const selected = e.nativeEvent.target.outerText;
    // setTitle(selectedTitle);
    console.log(selected);
    if (!!selected) props.onSelect(selected);
    handleClose();

    // if (props.single) handleClose();
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
        <CardActionArea
          onClick={handleOpen}
          style={{
            width: "fit-content",
            minWidth: "100%",
            padding: " 0.5rem 1rem",
            borderRadius: "0.5rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="" style={{ marginRight: "2rem" }}>
            {props.value}
          </div>
          <KeyboardArrowDown />
        </CardActionArea>
        {open && (
          <Card
            className=""
            style={{
              position: "absolute",
              top: 0,
              minWidth: "100%",
            }}
          >
            {props.options.map((value: DropDown) => (
              <MenuItem
                style={{ minWidth: "100%" }}
                onClick={handlePick}
                key={value.id}
              >
                {value.name}
              </MenuItem>
            ))}
          </Card>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default CustomSelect;
