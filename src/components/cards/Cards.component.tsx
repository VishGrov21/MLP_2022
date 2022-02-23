import Card from '@mui/material/Card';
import { styled, CardContent, Stack, Typography } from "@mui/material";
import ChildLabour from 'assets/images/childLabour.png';
import pieChartIcon from 'assets/images/pieChartIcon.svg';
import barChartIcon from 'assets/images/barChartIcon.svg';
import info from 'assets/images/moreInfo.svg';
import color from "styles/color";
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
    alignItems: 'flex-start',
    '& button': {
        position: "absolute",
        right: "20px",
    },
    '& span': {
        fontSize: '16px',
        fontWeight: '700',
        color: color.palette.greyShade.main,
        '& img': {
            marginRight: '10px',
        }
    },
});

const ContentBody = styled(Stack)({
    color: color.palette.primary.main,
    '& h2': {
        margin: "18px 0 5px",
        fontSize: '24px',
    },
    '& p': {
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
            maxWidth: "30px",
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
                <Typography variant="h2">{props.propdata.cardHead}</Typography>
                <Typography variant="body2">{props.propdata.cardContent}</Typography>
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

