import Card from '@mui/material/Card';
import { styled, CardContent, Stack } from "@mui/material";
import ChildLabour from 'assets/images/childLabour.png';
import pieChartIcon from 'assets/images/pieChartIcon.png';
import barChartIcon from 'assets/images/barChartIcon.png';
import info from 'assets/images/moreInfo.svg';
import { theme }from "Theme.style";
import { TabsContentI } from 'model/common.model';

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
        color: theme.palette.greyShade.main,
        '& img': {
            marginRight: '10px',
        }
    },
});

const ContentBody = styled(Stack)({
    color: theme.palette.primary.main,
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
            background: theme.palette.secondary.dark,
            padding: '5px',
            borderRadius: '6px',
        }
    }
})
interface cardsI {
    propdata: TabsContentI
}

export const Cards = (props:cardsI) => {

    const card = (
          <CardContent> 
              <ContentHead sx={{flexDirection: 'row'}}>
                    <span><img src={ChildLabour} alt="titleImage"/>Child Labour</span>
                    <button><img src={info} alt="moreInfo"/></button>
              </ContentHead>
              <ContentBody>
                <h2>{props.propdata.head}</h2>
                <p>{props.propdata.content}</p>
                {props.propdata.chartType !== '' &&
                    <button><img src={(props.propdata.chartType === 'pieChart') ? pieChartIcon : barChartIcon} alt="chartIcon" /></button>
                }
            </ContentBody>
          </CardContent>
      );

    return (
        <CardContainer>
            <Card variant="outlined">{card}</Card> 
        </CardContainer>
    )
}

