import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import MetricsCategory from "components/supplyMetrics/SupplyMetrics.component";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import infoIcon from "assets/images/info.svg";
import color from "styles/color";
import { RootState } from "state/store";
import { getMetricsData } from "state/actions/supplyMetrics/supplyMetrics.action";

const MetricsContainer = styled(Box)({
  padding: "30px 28px",
  marginTop: "80px",
});

const Heading = styled("div")({
  margin: "0 0 10px 0",
});

const SubContent = styled(Stack)({
  flexDirection: "row",
  fontSize: "16px",
  color: color.palette.greyShade.main,
  "& img": {
    paddingRight: "5px",
  },
});

const SupplyMetrics = () => {
  const dispatch = useDispatch();

  const { tilesData } = useSelector((state: RootState) => state.metrics);

  /* Fetches the supply metrics data from the API */
  useEffect(() => {
    dispatch(getMetricsData());
  }, [dispatch]);

  return (
    <MetricsContainer>
      <Heading>
        <Typography variant='h1'>Metrics</Typography>
      </Heading>
      <SubContent>
        <img src={infoIcon} alt='info-icon' />
        <Typography variant='body2'>
          The metrics shown are aggregated across all of your suppliers and commodities. Use the filters to select
          specific data sets
        </Typography>
      </SubContent>

      <MetricsCategory tabDatas={tilesData} />
    </MetricsContainer>
  );
};

export default SupplyMetrics;
