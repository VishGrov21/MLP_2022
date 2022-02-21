import Card from '@mui/material/Card';
import { styled, CardContent, Stack } from "@mui/material";
import ChildLabour from 'assets/images/childLabour.png';
import pieChartIcon from 'assets/images/pieChartIcon.png';
import barChartIcon from 'assets/images/barChartIcon.png';
import Box from '@mui/material/Box';
import Skeleton from "components/Skeleton/Skeleton.component";

const CardContainer = styled(Stack)({
        '& .MuiPaper-root': {
            border:0,
            background: 'transparent',
        '& button': {
            background: 'transparent',
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            margin: 0,
            '& img': {
                transform: 'rotate(90deg)',
            }
        }
    },
  });

const ContentHead = styled(Stack)({
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& span': {
        fontSize: '16px',
        fontWeight: '700',
        color: '#6C757D',
        '& img': {
            marginRight: '10px',
        }
    }
});

const ContentBody = styled(Stack)({
    color: '#282828',
    '& h2': {
        margin: '15px 0',
        fontSize: '24px',
    },
    '& p': {
        fontSize: '16px',
        margin: 0,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkitLineClamp': '2',
        '-webkitBoxOrient': 'vertical',
        marginBottom: '33px',
        minHeight: '38px',
    },
    '& button': {
        textAlign: 'right',
        '& img': {
            background: '#EEEEEE',
            padding: '5px',
            borderRadius: '6px',
        }
    }
})

export const Cards = (props:any) => {

    const card = (
          <CardContent> 
              <ContentHead sx={{flexDirection: 'row'}}>
                    <span><img src={ChildLabour}/>Child Labour</span>
                    <button><img src="https://img.icons8.com/material/24/000000/more--v2.png"/></button>
              </ContentHead>
              <ContentBody>
                <h2>{props.data.head}</h2>
                <p>{props.data.content}</p>
                {/* <span>{props.data.chartType}</span> */}
                <button><img src={pieChartIcon}/></button>
            </ContentBody>
          </CardContent>
      );

    return (
        <CardContainer className='checking'>
            {props.data ? <Card variant="outlined">{card}</Card> :
            <Skeleton/>}
        </CardContainer>
    )
}

