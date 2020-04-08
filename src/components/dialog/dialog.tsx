import React from "react";
import { Dialog, DialogContent, ClickAwayListener } from "@material-ui/core";

const DialogDemo = (props: { onClickAway: () => void; open: boolean }) => {
  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.onClickAway}
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <div className="" style={{ minWidth: "20rem", minHeight: "30rem" }}>
            hello
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogDemo;
