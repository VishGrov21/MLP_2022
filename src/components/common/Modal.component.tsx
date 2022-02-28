import * as React from 'react';
import { useNavigate } from "react-router-dom";

import { styled,useTheme,Button,useMediaQuery,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from '@mui/material';

import leavesImg from "assets/images/leaves.png";
import color from "styles/color";


const DialogContainer = styled(Dialog)({
    backgroundImage: `url(${leavesImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '85% center',
    '& .MuiDialog-paper': {
        padding: '20px 35px 30px 50px',
        '& .dialogContents': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'self-end',
        },

        '& .MuiDialogContent-root': {
            padding: '20px 0 8%',
            '& .MuiDialogContentText-root': {
                color: color.palette.primary.main,
                fontFamily: "Roboto Regular",
            },
        },
        '& .MuiDialogActions-root': {
            padding: 0,
            outline: 0,
            boxShadow: 'none',
            border:0,
            '& button': {
                background: color.palette.yellow.main,
                color: color.palette.primary.main,
                textTransform: 'capitalize',
                padding: '5px 78px',
                '& .MuiTouchRipple-root': {
                    display: 'none',
                },
                '&:hover': {
                    background: color.palette.yellow.dark,
                }
            },
        },
        '& .close': {
            textAlign: 'right',
            padding: '0',
            cursor: 'pointer'
        }
    },
  });

  interface ButtonData {
    buttonName: string,
    redirection: string
  }

  interface ModalDataI {
    modalTitle?: string,
    modalBody: string,
    closeIcon: boolean,
    buttonProps: ButtonData[],
    gifImage?: ImageData,
  }

const ModalContainer = (props:ModalDataI) => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(true);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
    const handleClose = () => {
      setOpen(true);
    };
  
    /**
     * @param value The url to which user needs to navigate
     */
    const handleButtonClick = (value:string) => {
        navigate(value);
    };

    return (
            <DialogContainer
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
               
            >
                {props.closeIcon && <span className='close' onClick={handleClose}>x</span>}
                <div className='dialogContents'>
                    {props?.modalTitle &&
                        <DialogTitle id="responsive-dialog-title"> {props?.modalTitle}</DialogTitle>                    
                    }
                    <DialogContent>
                        <DialogContentText> {props.modalBody} </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                        {props?.buttonProps.map((buttonData:ButtonData,index:number) => (
                            <Button key={index} onClick={() => handleButtonClick(buttonData.redirection)} autoFocus>
                                {buttonData.buttonName}
                            </Button>
                        ))}

                    </DialogActions>
                </div>
            </DialogContainer>
    )
}


export default ModalContainer;