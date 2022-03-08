import { Box, styled, Typography } from "@mui/material";

const Bar = styled(Box)({
  height: "100px",
  backgroundColor: "#393939",
  paddingLeft: "50px",
  display: "block",
  width: "100%",
});

const TitleBar = ({ title }: { title: string }) => {
  return (
    <Bar>
      <Typography variant='h1' style={{ color: "white", paddingTop: "35px", fontSize: "40px" }}>
        {title}
      </Typography>
    </Bar>
  );
};

export default TitleBar;
