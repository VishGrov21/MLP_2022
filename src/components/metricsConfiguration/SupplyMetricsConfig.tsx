import { Typography, styled, Box } from "@mui/material";
import LabourMetrics from "components/settings/config-lead/LabourMetrics.component";

const ConfigContainer = styled(Box)(({ theme }) => ({
  padding: "25px",
  width: "100%",
  "& h2": {
    padding: "25px 0",
  },
}));

const SupplyMetricsConfig = (props: any) => {
  return (
    <ConfigContainer>
      <Typography variant='h1'>
        {props.configuredData.product} | {props.configuredData.origin} Sustainability Metrics Configuration
      </Typography>
      <Typography variant='h2'>Economic Metrics </Typography>
      <LabourMetrics />
    </ConfigContainer>
  );
};

export default SupplyMetricsConfig;
