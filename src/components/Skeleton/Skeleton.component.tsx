import { Box, Typography, Grid, Skeleton, styled, Stack } from '@mui/material';
import Loader from 'assets/images/loader.svg';
import color from "styles/color";

interface MediaProps {
  loading?: boolean;
  metricsTitle?: string
}

const LoaderContainer = styled(Stack)({
  position: "relative",
  flexDirection: "row",
  justifyContent: "center",
  maxWidth: "100vw",
  '& .content': {
      display: "flex",
      alignItems: "center",
      position: "absolute",
      top: 0,
      bottom: 0
  },
  '& h3': {
    color: color.palette.greyShade.dark,
    marginLeft: "15px"
  },
  '& .MuiSkeleton-rectangular': {
    animation:"none",
    backgroundImage: `linear-gradient(0deg, ${color.palette.secondary.main}, ${color.palette.secondary.light})`,
  } 
})

function Media(props: MediaProps) {

  return (
    <Grid container wrap="nowrap">
      <LoaderContainer>
        {Array.from(new Array(4)).map((item, index) => {
        return(
          <Box key={index} sx={{ marginRight: "20px", mt: "20px" }}>
              <Skeleton variant="rectangular" width={200} height={200} />
          </Box>
        )})}
        <div className="content">
          <img src={Loader} alt="loader" />
          <Typography variant="h3"> {props.metricsTitle} metrics coming up soon</Typography>
        </div>
      </LoaderContainer>
    </Grid>
  );
}

export default function SkeletonContainer(props:{ metricsTitle: string }) {

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media loading {...props}/>
    </Box>
  );
}
