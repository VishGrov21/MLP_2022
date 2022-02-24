import * as React from "react";
import { Box, Typography, Tab, Tabs, styled, ImageList, ImageListItem } from "@mui/material";
import { Cards } from "components/cards/Cards.component";
import color from "styles/color";
import { TabsPropertyI, TabsContentI, TabsHeadI } from "model/common.model";

import Skeleton from "components/skeleton/LoaderSkeleton.component";

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
        <Box sx={{ pt: 3 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function getallProps(index: number) {
  return { id: `tabIndex-${index}`, "aria-controls": `tabpanel-${index}`, key: index };
}

interface TabComponentI {
  tabItems: TabsPropertyI;
  metricTitle: string[];
}

export const TabComponent = (props: TabComponentI) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const TabContainer = styled("div")({
    "& .MuiBox-root": {
      padding: 0,
    },
    "& button": {
      fontFamily: "Roboto Medium",
      fontSize: "20px",
      textTransform: "capitalize",
      color: color.palette.greyShade.dark,
      alignItems: "baseline",
      minWidth: "auto",
      padding: 0,
      marginRight: "35px",
      "&.Mui-selected": {
        color: color.palette.primary.dark,
        textAlign: "left",
      },
    },
    "& .MuiTabs-indicator": {
      backgroundColor: props.tabItems.tabcolor.light,
      height: "5px",
      borderRadius: "10px",
    },
  });

  const ListContainer = styled("div")({
    "& ul.MuiImageList-root": {
      margin: "10px 0 0",
      gridTemplateColumns: "repeat(4, 1fr)",
      "& li": {
        margin: "20px 20px 0 0",
        background: color.palette.secondary.main,
        boxShadow: "0px 12px 24px rgba(69, 124, 189, 0.03)",
        borderRadius: "6px",
        "& .MuiCardContent-root": {
          lineHeight: "initial",
          padding: "13px 10px 10px 20px",
          position: "relative",
        },
      },
    },
  });

  return (
    <TabContainer>
      <Box sx={{ borderBottom: 1, borderColor: color.palette.greyShade.light }}>
        <Tabs value={value} onChange={handleChange} aria-label='metrics-tab'>
          {props.tabItems.tabdata.map((data: TabsHeadI, index: number) => {
            return <Tab label={data.tabhead} {...getallProps(index)} key={index} />;
          })}
        </Tabs>
      </Box>

      {props.tabItems.tabdata.map((data: TabsHeadI, i: number) => {
        return (
          <TabPanel value={value} index={i} key={i}>
            {data.tabcontent.length !== 0 ? (
              <ListContainer>
                <ImageList cols={4}>
                  {data.tabcontent.map((n: TabsContentI, index: number) => {
                    return (
                      <ImageListItem key={index}>
                        <Cards propdata={data.tabcontent.length !== 0 ? n : {}} />
                      </ImageListItem>
                    );
                  })}
                </ImageList>
              </ListContainer>
            ) : (
              <Skeleton metricsTitle={props.metricTitle[0]} />
            )}
          </TabPanel>
        );
      })}
    </TabContainer>
  );
};
