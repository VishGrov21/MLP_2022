import { Box, styled, Tab, Tabs, Typography } from "@mui/material";
import SupplyMetricsConfig from "components/metricsConfiguration/SupplyMetricsConfig";
import { SyntheticEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";

const TabsContainer = styled(Tabs)(({ theme }) => ({
  backgroundColor: theme.palette.grey[800],
  position: "sticky",
  top: "84px",
  zIndex: 100,
  "& .MuiTab-root": {
    ...theme.typography.body1,
    color: theme.palette.common.white,
    padding: "2rem",
    textTransform: "none",
    letterSpacing: "1px",
    "&.Mui-selected": {
      backgroundColor: `${theme.palette.grey[700]}`,
      color: theme.palette.common.white,
    },
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));
interface TabPanelI {
  children: string | object;
  value: number;
  index: number;
  key?: number;
}

function TabPanel(props: TabPanelI) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tabIndex-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const MetricsConfiguration = () => {
  const [tabValue, setTabValue] = useState(0);
  const metricsArr = useSelector((state: RootState) => state.configLead.configuredData);

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <TabsContainer value={tabValue} onChange={handleTabChange}>
        <Tab label='Economic Metrics' />
        <Tab label='Social Metrics' />
        <Tab label='Environmental Metrics' />
      </TabsContainer>
      <TabPanel value={tabValue} index={0}>
        <SupplyMetricsConfig configuredData={metricsArr} />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        Social Metrics coming soon
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        Environmental Metrics coming soon
      </TabPanel>
    </Box>
  );
};

export default MetricsConfiguration;
