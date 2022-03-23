import { Dialog, styled } from "@mui/material";
import { useEffect, useState } from "react";
import ConfigForm from "./ConfigForm.component";

const DialogContainer = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    padding: "60px",
  },
}));

interface ModalProps {
  showModal: boolean;
  closeModalCB?: Function;
}

const ConfigFormDialog = (props: ModalProps) => {
  const [open, setOpen] = useState(false);
  const { showModal, closeModalCB } = props;
  useEffect(() => {
    setOpen(showModal);
  }, [showModal]);
  const handleClose = () => {
    if (closeModalCB) closeModalCB();
    setOpen(false);
  };
  return (
    <DialogContainer open={open} onClose={handleClose} maxWidth='xs'>
      <ConfigForm cancelCB={handleClose} />
    </DialogContainer>
  );
};

export default ConfigFormDialog;
