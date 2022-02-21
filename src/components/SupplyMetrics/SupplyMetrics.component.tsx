import { TabComponent } from '../Tabs/Tabs.component';
import { styled, Stack } from "@mui/material";
import globeIcon from "../../assets/images/economic.svg";
import { theme } from "../../Themes/Theme.style";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const economicTabs:Array<object> = [{tabhead: 'Labour'},{tabhead:'Economic Prosperity'}];

const CategoryHead = styled(Stack)({
    flexDirection: 'row',
    alignItems: 'center',
    margin: '30px 0',
    '& .titleImage': {
        background: theme.palette.primary.main,
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

const metricsData:Array<object> = [
    {head:'80 %',content: 'Percentage of school aged children attending school',chartType: 'pie'},
    {head:'Yes',content: 'Active CLMS in place',chartType: ''},
    {head:'50',content: 'Number of Farming Households in Farmer Group Covered by CLMS',chartType: ''},
    {head:'15',content: 'Number of unannounced inspections',chartType: 'bar'},
    {head:'10 %',content: 'Percentage of Farming Households where an inspection has occurred',chartType: 'pie'},
    {head:'30',content: 'Number of children identified in child labour through inspections',chartType: ''},
    {head:'5 %',content: 'Percentage of child labour cases remediated or referred',chartType: 'pie'}
];
const metricsData1:Array<object> = [
    {head:'Heading21',content: 'content data',chartType: 'pie'},
    {head:'Heading22',content: 'content data1',chartType: 'pie2'},
    {head:'Heading23',content: 'content data2',chartType: 'pie3'}
];
const metricsData2:Array<object> = [
    {head:'Heading31',content: 'content data',chartType: 'pie'},
    {head:'Heading32',content: 'content data1',chartType: 'pie2'},
    {head:'Heading33',content: 'content data2',chartType: 'pie3'}
];

const tabItems:Array<object> = [{tabhead: 'Labour',content:metricsData},{tabhead:'economic',content:metricsData1},{tabhead:'social',content:[]}];

function MetricsCategory() {
    return (
        // <ThemeProvider theme={theme}>
        <CategoryContainer>
            <CategoryHead>
                <span className='titleImage'><img src={globeIcon} alt='economic-icon'/></span>
                <span className='title'>Economic</span>
            </CategoryHead>
            <TabComponent tabItems={tabItems} />
        </CategoryContainer>
        // </ThemeProvider>
    );
}

export default MetricsCategory;

