import { Stack, styled, Typography } from "@mui/material";
import { Fragment, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import fileUploadIcon from "assets/images/fileUploadIcon.svg";
import color from "styles/color";

const Container = styled(Stack)(({ theme }) => ({
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.grey[700],
  outline: "none",
  transition: "border .24s ease-in-out",
  "& .highlight": {
    color: theme.palette.grey[800],
  },
  "& .drag": {
    padding: "20px",
    width: "100%",
    cursor: "pointer",
  },
}));

interface DropzoneI {
  onFilesAccept: Function;
  acceptedFileFormat?: string;
  maxFileSize?: number;
  maxFilesCount?: number;
  disabled?: boolean;
}

const Dropzone = (props: DropzoneI) => {
  const { onFilesAccept, acceptedFileFormat, maxFileSize, maxFilesCount, disabled } = props;
  const onDrop = useCallback(
    (acceptedFiles) => {
      onFilesAccept(acceptedFiles);
    },
    [onFilesAccept]
  );
  const onClick = useCallback(
    (acceptedFiles) => {
      onFilesAccept(acceptedFiles);
    },
    [onFilesAccept]
  );
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: acceptedFileFormat,
    maxFiles: maxFilesCount,
    maxSize: maxFileSize,
    disabled,
  });

  const handleBackgroundColor = () => {
    if (disabled) return color.palette.grey[500];
    else if (acceptedFiles.length > 0) return "rgba(244, 218, 125, 0.1)";
    else return "inherit";
  };

  return (
    <Fragment>
      <Container justifyContent='center' alignItems='center' style={{ backgroundColor: handleBackgroundColor() }}>
        <div className='drag' {...getRootProps()}>
          <img src={fileUploadIcon} alt='File Upload Icon' style={{ margin: "1rem auto", display: "block" }} />
          <input {...getInputProps({ onClick })} />
          {acceptedFiles.length === 0 && (
            <Typography style={{ textAlign: "center" }}>
              Drag file to upload or <span className='highlight'>browse</span> files
            </Typography>
          )}
          {acceptedFiles.length > 0 && <Typography style={{ textAlign: "center" }}>{acceptedFiles[0].name}</Typography>}
        </div>
      </Container>
    </Fragment>
  );
};

export default Dropzone;
