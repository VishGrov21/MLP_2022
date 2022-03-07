import * as React from "react";

import { styled, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

import leavesImg from "assets/images/leaves.png";
import color from "styles/color";
import useMobileScreen from "hooks/useMobileScreen.hooks";

const DialogContainer = styled(Dialog)({
  backgroundImage: `url(${leavesImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "85% center",
  "& .MuiDialog-paper": {
    padding: "20px 35px 30px 50px",
    "& .dialogContents": {
      display: "flex",
      flexDirection: "row",
      alignItems: "self-end",
    },

    "& .MuiDialogContent-root": {
      padding: "20px 0 8%",
      display: "flex",
      justifyContent: "space-between",
      "& .MuiDialogContentText-root": {
        color: color.palette.black.main,
        fontFamily: "Roboto Regular",
      },
    },
    "& .MuiDialogActions-root": {
      padding: 0,
      outline: 0,
      boxShadow: "none",
      border: 0,
      "& button": {
        background: color.palette.primary.main,
        color: color.palette.black.main,
        textTransform: "capitalize",
        padding: "5px 78px",
        "& .MuiTouchRipple-root": {
          display: "none",
        },
        "&:hover": {
          background: color.palette.primary.light,
        },
      },
    },
    "& .close": {
      textAlign: "right",
      padding: "0",
      cursor: "pointer",
    },
  },
});

interface ButtonData {
  id: number;
  buttonText: string;
  onClickFn: Function;
}

interface ModalDataI {
  modalTitle?: string;
  modalBody: string;
  closeIcon: boolean;
  buttonArr: ButtonData[];
  gifImage?: ImageData;
}

const ModalContainer = (props: ModalDataI) => {
  const [open, setOpen] = React.useState(true);
  const fullScreen = useMobileScreen();

  const handleClose = () => {
    setOpen(true);
  };

  return (
    <DialogContainer
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby='responsive-dialog-title'
    >
      {props.closeIcon && (
        <span className='close' onClick={handleClose}>
          x
        </span>
      )}
      <div className='dialogContents'>
        {props?.modalTitle && <DialogTitle id='responsive-dialog-title'> {props?.modalTitle}</DialogTitle>}
        <DialogContent>
          <DialogContentText> {props.modalBody} </DialogContentText>
        </DialogContent>

        <DialogActions>
          {props?.buttonArr.map((buttonData: ButtonData) => (
            <Button key={buttonData.id} onClick={() => buttonData.onClickFn()} autoFocus>
              {buttonData.buttonText}
            </Button>
          ))}
        </DialogActions>
      </div>
    </DialogContainer>
  );
};

export default ModalContainer;
