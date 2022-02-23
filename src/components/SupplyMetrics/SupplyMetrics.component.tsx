import { TabComponent } from '../Tabs/Tabs.component';
import { styled, Stack, Box } from "@mui/material";
import { theme } from "../../Theme.style";
import { TabsI,TabsPropertyI } from 'model/common.model';

interface TabComponentI {
    tabItems: TabsI[]
}
function MetricsCategory(props:TabComponentI) {
    const CategoryHead = styled(Stack)({
        flexDirection: 'row',
        alignItems: 'center',
        margin: '30px 0',
        '& .titleImage': {
            padding: '5px 5px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            marginRight: '10px',
            '& img': {
               padding: 0,
               width: "20px",
               height: "20px",
            }
        },
        '& .title': {
            fontSize: '24px',
            fontWeight: 'bold',
            color: theme.palette.primary.main,
        }
    })


    return (
        <>
            {props.tabItems?.map((data:TabsI) => {
                let color:TabsPropertyI[] = Object.values(data);

                return (
                    <>
                        <CategoryHead>
                            <Box className='titleImage' sx={{background: color[0].color.light }}><img src={color[0].image} alt='economic-icon'/></Box>
                            <span className='title'>{Object.keys(data)}</span>
                        </CategoryHead>
                        {Object.values(data).map((tabData:TabsPropertyI) => {
                            return <TabComponent tabItems= {tabData} />
                        })}
                    </>
                )
            })}
        </>
    );
}

export default MetricsCategory;

