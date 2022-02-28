import { TabComponent } from "components/common/Tabs.component";
import { styled, Stack, Box, Typography } from "@mui/material";
import { TabsI, TabsPropertyI } from "model/common.model";
import { Fragment } from "react";

interface TabComponentI {
  tabDatas: TabsI[];
}
function MetricsCategory(props: TabComponentI) {
  const CategoryHead = styled(Stack)({
    flexDirection: "row",
    alignItems: "center",
    margin: "30px 0 20px",
    "& .titleImage": {
      display: "flex",
      alignItems: "center",
      marginRight: "10px",
      "& img": {
        padding: 0,
        width: "30px",
        height: "30px",
      },
    },
  });

  return (
    <>
      {props.tabDatas?.map((data: TabsI, index: number) => {
        let color: TabsPropertyI[] = Object.values(data);

        return (
          <Fragment key={index}>
            <CategoryHead>
              <Box className='titleImage'>
                <img src={color[0].image} alt='economic-icon' />
              </Box>
              <Typography variant='h2'>{Object.keys(data)}</Typography>
            </CategoryHead>

            {Object.values(data).map((tabData: TabsPropertyI,index:number) => {
              return <TabComponent key={index} tabItems={tabData} />;
            })}
          </Fragment>
        );
      })}
    </>
  );
}

export default MetricsCategory;
