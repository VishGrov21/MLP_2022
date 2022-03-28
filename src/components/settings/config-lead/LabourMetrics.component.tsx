import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MenuItem,
  Select,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  DataGrid,
  GridCallbackDetails,
  GridCellEditCommitParams,
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
  GridRowId,
  GridSelectionModel,
} from "@mui/x-data-grid";
import { CHILD_LABOUR_METRICS_ARR } from "constants/settings.constants";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "state/store";
import { useEffect } from "react";
import { childLabourMetricsActionCreator } from "state/actions/settings/config-lead/configLead.action";

const DataGridContainer = styled(DataGrid)(({ theme }) => ({
  margin: "1% 2rem",
  background: theme.palette.common.white,
  padding: "20px",

  "& .MuiDataGrid-columnHeadersInner, & .MuiDataGrid-row, & .MuiDataGrid-virtualScrollerRenderZone": {
    width: "100%",
  },
  "& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell": {
    "&:nth-of-type(2)": {
      width: "42%!important",
      minWidth: "42%!important",
      maxWidth: "42%!important",
    },
    "&:nth-of-type(3)": {
      width: "12%!important",
      minWidth: "12%!important",
      maxWidth: "12%!important",
    },
    "&:nth-of-type(4),&:nth-of-type(5)": {
      width: "9%!important",
      minWidth: "9%!important",
      maxWidth: "9%!important",
    },
    "&:nth-of-type(6)": {
      width: "25%!important",
      minWidth: "25%!important",
      maxWidth: "25%!important",
    },
  },
  "& .metricName, & .metricHeader": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    whiteSpace: "initial",
    fontSize: "14px",
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px",
    },
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    ...theme.typography.body1,
    textOverflow: "initial",
    whiteSpace: "break-spaces",
    fontSize: "14px",
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px",
    },
  },
  "& .MuiDataGrid-columnHeaderCheckbox, & .MuiDataGrid-cellCheckbox": {
    width: "40px!important",
    minWidth: "40px!important",
    maxWidth: "40px!important",
  },

  "& .MuiDataGrid-columnHeader:last-child > .MuiDataGrid-columnSeparator": { display: "none" },
  "& .range": {
    border: `1px solid ${theme.palette.grey[500]}`,
    boxSizing: "border-box",
    borderRadius: "4px",
    width: "100%",
    textAlign: "center",
  },
  "& .MuiOutlinedInput-root": {
    width: "80%",
    height: "80%",
    margin: "auto auto",
  },

  [theme.breakpoints.up("xl")]: {
    "& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell": {
      width: "15%!important",
      minWidth: "15%!important",
      maxWidth: "15%!important",
      "&:nth-of-type(2)": {
        width: "30%!important",
        minWidth: "30%!important",
        maxWidth: "30%!important",
      },
      "&:nth-of-type(3),&:nth-of-type(4),&:nth-of-type(5)": {
        width: "12%!important",
        minWidth: "12%!important",
        maxWidth: "12%!important",
      },
    },
    "& .MuiDataGrid-columnHeaderCheckbox, & .MuiDataGrid-cellCheckbox": {
      width: "10%!important",
      minWidth: "10%!important",
      maxWidth: "10%!important",
    },
  },
}));

const AccordionContainer = styled(Accordion)(({ theme }) => ({
  "& .metricsSize": {
    width: "6rem",
    backgroundColor: `${theme.palette.grey[700]}`,
    color: "white",
    textAlign: "center",
    borderRadius: "16px",
    marginRight: "16px",
  },
}));

const LabourMetrics = () => {
  const childLabourData = useSelector((state: RootState) => state.configLead.childLabourMetrics);
  const dispatch = useAppDispatch();

  const MetricsHeader = (params: GridColumnHeaderParams) => {
    return (
      <Stack>
        <Typography className='metricHeader'>Metric</Typography>
        <Typography variant='subtitle1' className='metricHeader'>
          Reporting on these metrics is mandatory
        </Typography>
      </Stack>
    );
  };

  const MetricName = (params: GridRenderCellParams) => {
    return (
      <Typography className='metricName' variant='body2'>
        {params.row.metricName}
      </Typography>
    );
  };

  const RangeLow = (params: GridRenderCellParams) => {
    return <Typography className='range'>{params.row.rangeLow}</Typography>;
  };

  const RangeHigh = (params: GridRenderCellParams) => {
    return <Typography className='range'>{params.row.rangeHigh}</Typography>;
  };

  function updateFieldData(
    id: GridRowId,
    value: string | number | boolean | object | Date | null | undefined,
    field: string
  ) {
    // Find the object such that it can be editted.
    let edittedObj = childLabourData.find((obj) => obj.id === +id);
    if (edittedObj) {
      if (value) edittedObj = { ...edittedObj, [field]: value };

      // Find object index such that the updated object can be replaced by previous object.
      const objIndex = childLabourData.findIndex((obj) => obj.id === +id);
      const tempArr = [...childLabourData];
      tempArr.splice(objIndex, 1, edittedObj);

      // Dispatch the updated array to Redux
      dispatch(dispatch(childLabourMetricsActionCreator(tempArr)));
    }
  }
  const handleCellEdit = (params: GridCellEditCommitParams) => {
    const { id, value, field } = params;
    updateFieldData(id, value, field);
  };

  const DataCollectionMethod = (params: GridRenderCellParams) => {
    const handleChange = (event: any) => {
      const { name, value } = event.target;
      updateFieldData(name, value, "dataCollectionMethod");
    };
    const value = params.row.dataCollectionMethod;
    const name = `${params.row.id}`;
    return (
      <Select variant='outlined' value={value} onChange={handleChange} name={name}>
        <MenuItem value={"screen"}>On-screen Input</MenuItem>
        <MenuItem value={"source"}>Pull from source system</MenuItem>
      </Select>
    );
  };

  const columns: GridColDef[] = [
    {
      field: "metricName",
      headerName: "Metrics",
      renderHeader: (params) => MetricsHeader(params),
      renderCell: (params) => MetricName(params),
    },
    { field: "unit", headerName: "Units of Measure", align: "center" },
    {
      field: "rangeLow",
      headerName: "Range Low",
      renderCell: (params) => RangeLow(params),
      editable: true,
    },
    {
      field: "rangeHigh",
      headerName: "Range High",
      renderCell: (params) => RangeHigh(params),
      editable: true,
    },
    {
      field: "dataCollectionMethod",
      headerName: "Data Collection Method",
      renderCell: (params) => DataCollectionMethod(params),
    },
  ];

  const handleCheckboxSelect = (selectionModel: GridSelectionModel, details: GridCallbackDetails) => {
    // selectionModel.length > 0 ? setIsUpdateBtnDisabled(false) : setIsUpdateBtnDisabled(true);
    // setSelectedRow(selectionModel);
  };

  useEffect(() => {
    dispatch(childLabourMetricsActionCreator(CHILD_LABOUR_METRICS_ARR));
  }, [dispatch]);

  return (
    <AccordionContainer sx={{ width: "100%" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ width: "100%" }}>
          <Typography variant='body2'>Labour / Child Labour</Typography>
          <Typography className='metricsSize' variant='body2'>
            8 Metrics
          </Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <DataGridContainer
          rows={childLabourData}
          columns={columns}
          autoHeight
          hideFooter={true}
          checkboxSelection={true}
          onSelectionModelChange={handleCheckboxSelect}
          onCellEditCommit={handleCellEdit}
        />
      </AccordionDetails>
    </AccordionContainer>
  );
};

export default LabourMetrics;
