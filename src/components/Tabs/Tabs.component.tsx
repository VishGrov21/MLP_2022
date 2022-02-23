import * as React from 'react';
import { Box, Typography,Tab, Tabs, styled,ImageList,ImageListItem, Stack } from '@mui/material';
import { Cards } from "components/cards/Cards.component";
import { theme }from "Theme.style";
import { TabsPropertyI,TabsContentI,TabsHeadI } from 'model/common.model';
import Loader from 'assets/images/loader.svg';

interface TabPanelI {
  children: string | object, 
  value: number,
  index: number,
  key?:number
}

function TabPanel(props:TabPanelI) {

  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tabIndex-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function getallProps(index:number) {
  return { id: `tabIndex-${index}`, 'aria-controls': `tabpanel-${index}`,key: index};
}

interface TabComponentI {
  tabItems: TabsPropertyI
}

export const TabComponent = (props:TabComponentI) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event:React.SyntheticEvent, newValue:number) => {
    setValue(newValue);
  };

  const TabContainer = styled('div')({
    '& button': {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '20px',
        textTransform: 'capitalize',
        color: theme.palette.greyShade.dark,
        alignItems: 'baseline',
        minWidth: 'auto',
        padding: 0,
        marginRight: '35px',
       '&.Mui-selected': {
            color: theme.palette.primary.dark,
            fontWeight: '700',
            textAlign: 'left',
        }
    },
    '& .MuiTabs-indicator': {
        backgroundColor: props.tabItems.color.light,
        height: '5px',
        borderRadius: '10px',
    }
  });

  const ListContainer = styled('div')({
      '& ul.MuiImageList-root': {
          margin: '30px 0 10px 0',
          gridTemplateColumns: 'repeat(4, 1fr)',
          '& li': {
              margin: '0 20px 20px 0',
              background: theme.palette.secondary.main,
              boxShadow: '0px 12px 24px rgba(69, 124, 189, 0.03)',
              borderRadius: '6px',
              '& .MuiCardContent-root': {
                  lineHeight: 'initial',
                  padding: '10px 10px 10px 20px',
              }
          },
      },
    });
  const LoaderContainer  = styled(Stack)({
    flexDirection: "row",
    alignItems: "center",
    '& span': {
      fontWeight: 500,
      fontSize: "20px",
      color: theme.palette.greyShade.dark,
      marginLeft: "15px"
    } 
  });

  return (
      <TabContainer>
          <Box sx={{ borderBottom: 1, borderColor: theme.palette.greyShade.light }}>
            <Tabs value={value} onChange={handleChange} aria-label="metrics-tab">
                    {props.tabItems.tabdata.map((data:TabsHeadI,index:number) => {
                        return <Tab label={data.tabhead} {...getallProps(index)} key={index}/>
                    })}
            </Tabs>
          </Box>

          {props.tabItems.tabdata.map((data:TabsHeadI,i:number) => {
            return (
              <TabPanel value={value} index={i} key={i}>
                  <ListContainer>
                      <ImageList cols={4}>                      
                          {(data.tabcontent && data.tabcontent.length !== 0) 
                              ? 
                              data.tabcontent.map((n:TabsContentI,index:number) => {
                                  return (
                                      <ImageListItem key={index} >
                                          <Cards propdata = {data.tabcontent.length !== 0 ? n : {}}/>
                                      </ImageListItem>
                                  );
                              }) 
                              : 
                              <LoaderContainer>
                                <img src={Loader} alt="loader" /><span>Metrice coming up soon</span>
                              </LoaderContainer>
                          }
                      </ImageList>
                  </ListContainer>
              </TabPanel>
              )}
          )}
      </TabContainer>
  );
}