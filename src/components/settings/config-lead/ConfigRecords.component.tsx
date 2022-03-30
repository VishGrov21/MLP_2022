import { Box, Button, IconButton, Stack, styled, Typography } from "@mui/material";
import { DataGrid, GridCallbackDetails, GridColDef, GridSelectionModel } from "@mui/x-data-grid";
import { useState } from "react";
import { CONFIGURED_C, IN_PROGRESS_C, NOT_STARTED_C } from "constants/settings.constants";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ConfigUpdateModal from "./ConfigUpdateModal.component";
import ModalContainer, { ButtonData } from "components/common/Modal.component";
import warningIcon from "assets/images/warningIconRed.svg";
import color from "styles/color";
import { useSelector } from "react-redux";
import { RootState } from "state/store";

const statusStyles = {
  padding: "5px",
  borderRadius: "2px",
  textTransform: "uppercase",
  width: "7rem",
  textAlign: "center",
  fontSize: "14px",
};

const DataGridContainer = styled(DataGrid)(({ theme }) => ({
  margin: "1% 2rem",
  background: theme.palette.common.white,
  padding: "20px",
  "& .header": {
    borderBottom: `1px solid ${theme.palette.grey[500]}`,
    paddingBottom: "1rem",
  },
  "& .MuiDataGrid-columnHeadersInner, & .MuiDataGrid-row, & .MuiDataGrid-virtualScrollerRenderZone": {
    width: "100%",
  },
  "& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell": {
    width: "20%!important",
    minWidth: "20%!important",
    maxWidth: "20%!important",
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
    width: "50px!important",
    minWidth: "50px!important",
    maxWidth: "50px!important",
  },
  "& .configured": {
    ...statusStyles,
    border: `1px solid ${theme.palette.green.main}`,
    color: theme.palette.green.main,
  },
  "& .not-started": {
    ...statusStyles,
    border: `1px solid ${theme.palette.grey[700]}`,
    color: theme.palette.grey[700],
  },
  "& .in-progress": {
    ...statusStyles,
    border: `1px solid #2897E0`,
    color: "#2897E0",
  },
  "& .delete-button": {
    marginBottom: "-5px",
    marginRight: "20px",
    padding: 0,
    "& .delete-icon": {
      fontSize: "180%",
    },
  },
  "& .update-btn": {
    width: "8rem",
  },

  "& .MuiDataGrid-columnHeader:last-child > .MuiDataGrid-columnSeparator": { display: "none" },

  [theme.breakpoints.up("xl")]: {
    "& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell": {
      width: "17%!important",
      minWidth: "17%!important",
      maxWidth: "17%!important",
    },
    "& .MuiDataGrid-columnHeaderCheckbox, & .MuiDataGrid-cellCheckbox": {
      width: "10%!important",
      minWidth: "10%!important",
      maxWidth: "10%!important",
    },
  },
}));

const StatusComponent = (status: string) => {
  let className = "";
  switch (status) {
    case NOT_STARTED_C: {
      className = "not-started";
      break;
    }
    case IN_PROGRESS_C: {
      className = "in-progress";
      break;
    }
    case CONFIGURED_C: {
      className = "configured";
      break;
    }
    default:
      className = "";
  }
  return <Typography className={className}>{status}</Typography>;
};

const columns: GridColDef[] = [
  { field: "product", headerName: "Product" },
  { field: "origin", headerName: "Origin" },
  {
    field: "traceabilityStatus",
    headerName: "Traceability Metrics Configuration Status",
    renderCell: (params) => StatusComponent(params.row.traceabilityStatus),
  },
  {
    field: "sustainabilityStatus",
    headerName: "Sustainability Metrics Configuration Status",
    renderCell: (params) => StatusComponent(params.row.sustainabilityStatus),
  },
  { field: "lastUpdated", headerName: "Last Updated" },
];

interface HeaderProps {
  isUpdateDisabled: boolean;
  isDeleteDisabled: boolean;
  handleUpdateCB: Function;
  handleDeleteCB: Function;
}

function Header(props: HeaderProps) {
  const { isUpdateDisabled, isDeleteDisabled, handleUpdateCB, handleDeleteCB } = props;
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center' className='header'>
      <Typography variant='h3'>Configuration Records</Typography>
      <Box>
        <IconButton
          aria-label='delete'
          disabled={isDeleteDisabled}
          onClick={() => handleDeleteCB()}
          className='delete-button'
        >
          <DeleteForeverIcon className='delete-icon' />
        </IconButton>
        <Button
          variant='contained'
          color='primary'
          className='update-btn'
          disabled={isUpdateDisabled}
          onClick={() => handleUpdateCB()}
        >
          Update
        </Button>
      </Box>
    </Stack>
  );
}

const TitleStyles = styled(Stack)(({ theme }) => ({
  "&.title": {
    width: "100%",
    padding: "16px",
    "& .warning-icon": {
      width: "60px",
      marginRight: "1.5rem",
    },
  },
}));

const DeleteModalTitle = () => {
  return (
    <TitleStyles className='title' direction='row' alignItems='center'>
      <img src={warningIcon} alt='Warning Icon' className='warning-icon' />
      <Box>
        <Typography variant='h3'>Warning</Typography>
        <Typography variant='body2' className='message-description'>
          You are about to delete all data associated
        </Typography>
        <Typography variant='body2' className='message-description'>
          to this record.
        </Typography>
      </Box>
    </TitleStyles>
  );
};

const DeleteModalBody = () => {
  return (
    <Typography variant='body2' sx={{ color: color.palette.grey[700], margin: "0 auto" }}>
      Are you sure that you want to continue?
    </Typography>
  );
};

const ConfigRecords = () => {
  const [isUpdateBtnDisabled, setIsUpdateBtnDisabled] = useState(true);
  const [isDeleteBtnDisabled, setIsDeleteBtnDisabled] = useState(true);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<GridSelectionModel>([]);
  const rowData = useSelector((state: RootState) => state.configLead.configManager);

  // const handleRowSelect = (params: GridRowParams, event: MuiEvent<React.MouseEvent>, details: GridCallbackDetails) => {
  // console.log("🚀 ~ file: ConfigRecords.component.tsx ~ line 158 ~ handleRowSelect ~ params", params)
  //   setIsUpdateBtnDisabled(false);
  // };

  const handleCheckboxSelect = (selectionModel: GridSelectionModel, details: GridCallbackDetails) => {
    selectionModel.length > 0 ? setIsDeleteBtnDisabled(false) : setIsDeleteBtnDisabled(true);
    selectionModel.length === 1 ? setIsUpdateBtnDisabled(false) : setIsUpdateBtnDisabled(true);
    setSelectedRow(selectionModel);
  };

  const handleDeleteModalProceed = () => {
    setShowDeleteModal(false);
  };
  const handleDeleteModalCancel = () => {
    setShowDeleteModal(false);
  };

  const buttonArr: ButtonData[] = [
    { id: 1, buttonText: "cancel", onClickFn: handleDeleteModalProceed, variant: "outlined" },
    { id: 2, buttonText: "Proceed", onClickFn: handleDeleteModalCancel, variant: "contained" },
  ];

  const headerProps = {
    isUpdateDisabled: isUpdateBtnDisabled,
    isDeleteDisabled: isDeleteBtnDisabled,
    handleUpdateCB: () => setShowUpdateModal(true),
    handleDeleteCB: () => setShowDeleteModal(true),
  };

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGridContainer
        rows={rowData}
        columns={columns}
        components={{ Toolbar: Header }}
        componentsProps={{ toolbar: { ...headerProps } }}
        hideFooter={true}
        checkboxSelection={true}
        // onRowClick={handleRowSelect}
        onSelectionModelChange={handleCheckboxSelect}
      />
      <ConfigUpdateModal id={selectedRow} showModal={showUpdateModal} closeModalCB={() => setShowUpdateModal(false)} />

      <ModalContainer
        title={DeleteModalTitle()}
        body={DeleteModalBody()}
        showModal={showDeleteModal}
        buttonArr={buttonArr}
      />
    </div>
  );
};

export default ConfigRecords;
