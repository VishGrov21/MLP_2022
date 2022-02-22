import { useEffect, useState } from "react";
import { Box, Snackbar, Stack, styled, Typography } from "@mui/material";
import { commonConstants } from "constants/common.constants";
import circleTickIcon from "assets/images/circleTickGreen.svg";

const ContentContainer = styled(Stack)({
  width: "23rem",
  height: "8rem",
  backgroundColor: "white",
  position: "relative",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "4px",
});

const SideBand = styled(Box)(({ bgColor }: { bgColor: string }) => ({
  position: "absolute",
  width: "3%",
  height: "100%",
  backgroundColor: bgColor,
  borderRadius: "4px 0px 0px 4px",
  left: 0,
}));

const TextContainer = styled(Stack)({
  width: "100%",
  height: "100%",
  flexGrow: 1,
});

const MsgIcon = styled("img")({
  width: 28,
  height: 28,
});

type SUCCESST = "success";
type ERRORT = "error";

const { SUCCESS_SIDE_BAND_COLOR, ERROR_SIDE_BAND_COLOR } = commonConstants;

type SuccessSidebandT = typeof SUCCESS_SIDE_BAND_COLOR;
type ErrorSidebandT = typeof ERROR_SIDE_BAND_COLOR;

interface MessagePropsI {
  openFl: boolean;
  closeMessageFn?: Function;
  textToDisplay: string;
  variant: SUCCESST | ERRORT;
  duration?: number;
}

const Message = (props: MessagePropsI) => {
  const [imageSrc, setImageSrc] = useState("");
  const [altText, setAltText] = useState("");
  const [sidebandColor, setSidebandColor] = useState<SuccessSidebandT | ErrorSidebandT>(SUCCESS_SIDE_BAND_COLOR);
  const [openMsg, setOpenMsg] = useState(false);

  const { openFl, textToDisplay, variant, closeMessageFn, duration = 4000 } = props;

  useEffect(() => {
    if (variant === "success") {
      setSidebandColor(SUCCESS_SIDE_BAND_COLOR);
      setImageSrc(circleTickIcon);
      setAltText("success");
    } else {
      setSidebandColor(ERROR_SIDE_BAND_COLOR);
      setAltText("error");
    }
    setOpenMsg(openFl);
  }, [openFl, variant]);

  const handleCloseMsg = () => {
    // closeMessageFn prop is for resetting the state
    // if this is missed then your state will remain in true state and Message component won't display again
    if (closeMessageFn) closeMessageFn();
    setOpenMsg(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openMsg}
        autoHideDuration={duration}
        onClose={handleCloseMsg}
      >
        <ContentContainer justifyContent='center' alignItems='center'>
          <SideBand bgColor={sidebandColor} />
          <TextContainer direction='row' justifyContent='center' alignItems='center' spacing={2}>
            <MsgIcon src={imageSrc} alt={altText} />
            <Typography>{textToDisplay}</Typography>
          </TextContainer>
        </ContentContainer>
      </Snackbar>
    </div>
  );
};

export default Message;
