import { TabComponent } from '../Tabs/Tabs.component';
import { styled, Stack } from "@mui/material";
import globeIcon from "../../assets/images/economic.svg";
import { theme } from "../../Themes/Theme.style";
import { TabsI,TabsContentI } from 'model/common.model';

const CategoryHead = styled(Stack)({
    flexDirection: 'row',
    alignItems: 'center',
    margin: '30px 0',
    '& .titleImage': {
        background: theme.palette.orange.main,
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
        color: theme.palette.primary.main,
    }
})

const CategoryContainer = styled(Stack)({
    //To write styling for other categories
})

const metricsData:TabsContentI[] = [
    {head:'80 %',content: 'Percentage of school aged children attending school',chartType: 'pieChart'},
    {head:'Yes',content: 'Active CLMS in place',chartType: ''},
    {head:'50',content: 'Number of Farming Households in Farmer Group Covered by CLMS',chartType: ''},
    {head:'15',content: 'Number of unannounced inspections',chartType: 'barChart'},
    {head:'10 %',content: 'Percentage of Farming Households where an inspection has occurred',chartType: 'pieChart'},
    {head:'30',content: 'Number of children identified in child labour through inspections',chartType: ''},
    {head:'5 %',content: 'Percentage of child labour cases remediated or referred',chartType: 'barChart'}
];

const tabItems:Array<TabsI> = [{tabhead: 'Labour',content:metricsData},{tabhead:'economic',content:[]}];

function MetricsCategory() {
    return (
        <CategoryContainer>
            <CategoryHead>
                <span className='titleImage'><img src={globeIcon} alt='economic-icon'/></span>
                <span className='title'>Economic</span>
            </CategoryHead>
            <TabComponent tabItems={tabItems} />
        </CategoryContainer>
    );
}

export default MetricsCategory;

