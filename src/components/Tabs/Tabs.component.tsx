import * as React from 'react';
import { Box, Typography,Tab, Tabs, styled,ImageList,ImageListItem } from '@mui/material';
import { Cards } from "components/cards/Cards.component";

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
  tabItems: Array<Object>
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
        color: '#9FA9B3',
        alignItems: 'baseline',
        minWidth: 'auto',
        padding: 0,
        marginRight: '35px',
       '&.Mui-selected': {
            color: '#000',
            fontWeight: '700',
            textAlign: 'left',
        }
    },
    '& .MuiTabs-indicator': {
        backgroundColor: '#E78E5F',
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
              background: '#fff',
              boxShadow: '0px 12px 24px rgba(69, 124, 189, 0.03)',
              borderRadius: '6px',
              '& .MuiCardContent-root': {
                  lineHeight: 'initial',
                  padding: '10px 10px 10px 20px',
              }
          },
      },
    });

  return (
      <TabContainer>
          <Box sx={{ borderBottom: 1, borderColor: '#CED4DA' }}>
            <Tabs value={value} onChange={handleChange} aria-label="metrics-tab">
                    {props.tabItems.map((data:any,index:number) => {
                        return <Tab label={data.tabhead} {...getallProps(index)} key={index}/>
                    })}
            </Tabs>
          </Box>

          {props.tabItems.map((data:any,i:number) => {
            return (
              <TabPanel value={value} index={i} key={i}>
                  <ListContainer>
                      <ImageList cols={4}>                      
                          {(data.content && data.content.length !== 0) 
                              ? 
                              data.content.map((n:object,index:number) => {
                                  return (
                                      <ImageListItem key={index} >
                                          <Cards data = {data.content.length !== 0 ? n : false}/>
                                      </ImageListItem>
                                  );
                              }) 
                              : 
                              <ImageListItem>
                                  <Cards data = {false}/>
                              </ImageListItem>
                          }
                      </ImageList>
                  </ListContainer>
              </TabPanel>
              )}
          )}
      </TabContainer>
  );
}