import { Box, styled, Typography } from "@mui/material";

const Bar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[800],
  display: "block",
  width: "100%",
  "& h1": {
    color: theme.palette.common.white,
    padding: "30px 38px",
  },
}));

const TitleBar = ({ title }: { title: string }) => {
  return (
    <Bar>
      <Typography variant='h1'>{title}</Typography>
    </Bar>
  );
};

export default TitleBar;
