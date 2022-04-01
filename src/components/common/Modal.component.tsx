import { useState, useEffect } from "react";

import { styled, Button, Dialog, DialogActions, DialogContent, ButtonProps } from "@mui/material";

import color from "styles/color";
import useMobileScreen from "hooks/useMobileScreen.hooks";

const DialogContainer = styled(Dialog)(({ theme }) => ({
  backgroundRepeat: "no-repeat",
  backgroundPosition: "85% center",
  "& .MuiDialog-paper": {
    padding: "20px 35px 30px 50px",

    "& .MuiDialogContent-root": {
      padding: "20px 0 8%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& .MuiDialogContentText-root": {
        color: color.palette.grey[900],
        fontFamily: "Roboto Regular",
      },
      "& img": {
        width: "210px",
      },
    },
    "& .MuiDialogActions-root": {
      padding: 0,
      outline: 0,
      boxShadow: "none",
      border: 0,
      "& button": {
        textTransform: "capitalize",
        width: "10rem",
      },
    },
    "& .close": {
      textAlign: "right",
      padding: "0",
      cursor: "pointer",
    },
  },
}));

export interface ButtonData {
  id: number;
  buttonText: string;
  onClickFn: Function;
  variant?: ButtonProps["variant"];
}

interface ModalDataI {
  title?: React.ReactNode;
  body: React.ReactNode;
  showCloseIcon?: boolean;
  buttonArr: ButtonData[];
  gifImage?: string;
  showModal: boolean;
  closeModalCB?: Function;
}

const ModalContainer = (props: ModalDataI) => {
  const [open, setOpen] = useState(true);
  const fullScreen = useMobileScreen();
  const { showModal, closeModalCB, body, title, showCloseIcon, buttonArr, gifImage } = props;

  useEffect(() => {
    setOpen(showModal);
  }, [showModal]);

  const handleClose = () => {
    if (closeModalCB) closeModalCB();
    setOpen(false);
  };

  return (
    <DialogContainer
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby='responsive-dialog-title'
    >
      {showCloseIcon && (
        <span className='close' onClick={handleClose}>
          x
        </span>
      )}
      <div>
        {title && <div> {title}</div>}
        {body && (
          <DialogContent>
            {gifImage && <img src={gifImage} alt='password_reset' />}
            {body}
          </DialogContent>
        )}

        <DialogActions>
          {buttonArr.map((buttonData: ButtonData) => (
            <Button
              key={buttonData.id}
              onClick={() => buttonData.onClickFn()}
              autoFocus
              variant={buttonData?.variant ? buttonData.variant : "contained"}
            >
              {buttonData.buttonText}
            </Button>
          ))}
        </DialogActions>
      </div>
    </DialogContainer>
  );
};

export default ModalContainer;
