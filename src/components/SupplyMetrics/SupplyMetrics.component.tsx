import { TabComponent } from '../Tabs/Tabs.component';
import { styled, Stack } from "@mui/material";
import globeIcon from "../../assets/images/economic.svg";

const economicTabs:Array<object> = [{tabhead: 'Labour'},{tabhead:'Economic Prosperity'}];

const CategoryHead = styled(Stack)({
    flexDirection: 'row',
    alignItems: 'center',
    margin: '30px 0',
    '& .titleImage': {
        background: '#E27338',
        padding: '5px 5px',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        marginRight: '10px',
        '& img': {
           padding: 0,
        }
    },
    '& .title': {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#282828',
    }
})

const CategoryContainer = styled(Stack)({
    //To write styling for other categories
})

function MetricsCategory() {
    return (
        <CategoryContainer>
            <CategoryHead>
                <span className='titleImage'><img src={globeIcon} alt='economic-icon'/></span>
                <span className='title'>Economic</span>
            </CategoryHead>
            <TabComponent tabItems={economicTabs} />
        </CategoryContainer>
    );
}

export default MetricsCategory;

