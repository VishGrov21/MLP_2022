import MetricsCategory from "components/supplyMetrics/SupplyMetrics.component";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import infoIcon from "assets/images/info.svg";
import UserProfileHeader from "components/common/UserProfileHeader.component";

const MetricsContainer = styled(Box)({
  padding: "30px",
  background: "#F9F9F9",
  marginTop: "6rem",
});

const Heading = styled("p")({
  fontSize: "30px",
  color: "#282828",
  margin: "0 0 10px 0",
  fontWeight: "bold",
});

const SubContent = styled(Stack)({
  flexDirection: "row",
  fontSize: "16px",
  color: "#6C757D",
  "& img": {
    paddingRight: "5px",
  },
});

const SupplyMetrics = () => {
  return (
    <>
      <MetricsContainer>
        <Heading>Metrics</Heading>

        <SubContent>
          <img src={infoIcon} alt='info-icon' />
          The metrics shown are aggregated across all of your suppliers and commodities. Use the filters to select
          specific data sets
        </SubContent>

        <MetricsCategory />
      </MetricsContainer>
    </>
  );
};

export default SupplyMetrics;
