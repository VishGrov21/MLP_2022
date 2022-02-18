import * as React from "react";
import { Box, Typography, Tab, Tabs, styled } from "@mui/material";
import { TabsI } from "model/common.model";

interface TabPanelI {
  children: string;
  value: number;
  index: number;
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
        <Box sx={{ pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function getallProps(index: number) {
  return { id: `tabIndex-${index}`, "aria-controls": `tabpanel-${index}`, key: index };
}

interface TabComponentI {
  tabItems: Array<TabsI>;
}

export const TabComponent = (props: TabComponentI) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const TabContainer = styled("div")({
    "& button": {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "20px",
      textTransform: "capitalize",
      color: "#9FA9B3",
      alignItems: "baseline",
      minWidth: "auto",
      padding: 0,
      marginRight: "35px",
      "&.Mui-selected": {
        color: "#000",
        fontWeight: "700",
        textAlign: "left",
      },
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#E78E5F",
      height: "5px",
      borderRadius: "10px",
    },
  });

  return (
    <TabContainer>
      <Box sx={{ borderBottom: 1, borderColor: "#CED4DA" }}>
        <Tabs value={value} onChange={handleChange} aria-label='metrics-tab'>
          {props.tabItems.map((data: TabsI, index: number) => (
            <Tab label={data.tabhead} {...getallProps(index)} key={index} />
          ))}
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        Tab 1 content
      </TabPanel>
      <TabPanel value={value} index={1}>
        Tab 2 content
      </TabPanel>
    </TabContainer>
  );
};
