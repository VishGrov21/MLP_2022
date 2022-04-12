import supplyChainIcon from "assets/images/supplyChainDataInput.svg";
import grievancesIcon from "assets/images/griecancesDataInput.svg";
import { Button, Grid, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TitleBar from "components/common/TitleBar.component";

const DATA_INPUT_TILES = [
  {
    title: "Supply Chains",
    description: "Enter data for your supply chain’s metrics",
    icon: supplyChainIcon,
    path: "supply-chain",
  },
  {
    title: "Grievances",
    description: "Manage grievances and follow their status ",
    icon: grievancesIcon,
    path: "data-approver",
  },
];

const GridContainer = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "85vh",
  "& .tileContainer": {
    marginLeft: "2rem",
    "& .iconContainer": {
      backgroundColor: theme.palette.common.white,
      borderRadius: "6.34146px 6.34146px 0px 0px",
      boxShadow: "0px 1.58537px 2.37805px rgba(0, 0, 0, 0.25);",
      marginBottom: "1px",
      img: {
        display: "block",
        margin: "3rem auto",
        width: "120px",
        cursor: "pointer",
        [theme.breakpoints.up("lg")]: {
          width: "150px",
        },
      },
    },
    "& .textContainer": {
      backgroundColor: theme.palette.common.white,
      padding: "2rem",
      textAlign: "center",
      borderRadius: "0 0 6.34146px 6.34146px",
    },
  },
}));

const DataInput = () => {
  const navigate = useNavigate();
  const handleTileClick = (path: string) => {
    navigate(path);
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <TitleBar title='Data Input Manager' />
      <GridContainer container direction='row' justifyContent='center' alignItems='center'>
        {DATA_INPUT_TILES.map((tile, index) => (
          <Grid className='tileContainer' key={index + tile.title} item>
            <Grid container direction='column'>
              <Grid item className='iconContainer'>
                <Button sx={{ width: "100%" }} onClick={() => handleTileClick(tile.path)}>
                  <img src={tile.icon} alt={`${tile.title} icon`} className='icon' />
                </Button>
              </Grid>
              <Grid item className='textContainer'>
                <Typography variant='h2'>{tile.title}</Typography>
                <Typography variant='subtitle1'>{tile.description}</Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </GridContainer>
    </div>
  );
};

export default DataInput;
