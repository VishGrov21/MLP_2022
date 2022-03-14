import { Stack, Typography, Avatar, Box, Input, Button, Checkbox, FormGroup, FormControlLabel } from "@mui/material";

import { styled } from "@mui/material/styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useSelector } from "react-redux";
import { RootState } from "state/store";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import editIcon from "assets/images/editIcon_white.svg";
import { EditFormComponent } from "./EditUserDetails";

const UserProfileContainer = styled(Stack)(({ theme }) => ({
  padding: "50px",
  width: "100%",
  "& .MuiInput-underline": {
    "&:before, &:after": {
      display: "none",
    },
  },
  "& button": {
    textTransform: "capitalize",
  },
  "& input, .MuiFormControlLabel-label": {
    fontFamily: "Roboto Regular",
    color: theme.palette.grey[700],
  },
}));

const ProfileHeader = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  margin: "0 20px",
  "& .backBtn": {
    margin: "0 3% 5% 0",
    background: theme.palette.common.white,
    borderRadius: "6px",
    color: theme.palette.common.black,
    textTransform: "capitalize",
    boxShadow: "1.93553px 2.9033px 3.87106px rgba(0, 0, 0, 0.1)",
    padding: "3px 37px 3px 47px",
    fontSize: "16px",
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      left: "5%",
    },
  },
  "& .MuiAvatar-root": {
    width: "135px",
    height: "132px",
    marginRight: "30px",
    fontSize: "50px",
    border: `2px solid ${theme.palette.common.white}`,
    "&:before": {
      content: '""',
      background: theme.palette.common.white,
      padding: "65px",
      position: "absolute",
      bottom: "-65%",
      borderRadius: "50%",
      right: 0,
    },
  },
  "& .MuiBadge-badge": {
    left: "50%",
    transform: "translate(-26px, 5px)",
    padding: 0,
    cursor: "pointer",
    color: theme.palette.grey[600],
    bottom: "13%",
  },
}));

const UserDetails = styled(Stack)(({ theme }) => ({
  padding: "50px 60px",
  position: "relative",
  maxWidth: "980px",
  width: "100%",
  boxSizing: "border-box",
  background: theme.palette.common.white,
  flexWrap: "wrap",
  "& .editBtn": {
    position: "absolute",
    right: "3%",
    top: "7%",
    justifyContent: "flex-end",
  },
  "&:not(:last-child)": {
    margin: "50px 0 30px",
  },
  "& h2": {
    marginBottom: "50px",
  },
  "& .MuiBox-root": {
    flex: 1,
    "&:not(:last-child)": { marginBottom: "30px" },
    "& > div": {
      flexDirection: "row",
      alignItems: "center",
      "&:not(:last-child)": {
        marginBottom: "30px",
        [theme.breakpoints.down("sm")]: {
          flexWrap: "wrap",
        },
      },
      "& .MuiInputBase-root": {
        width: "100%",
        flex: 2,
      },
      "& p": {
        "&:not(:last-child)": {
          width: "30%",
        },
        paddingRight: "10px",
      },
    },
    "& .editableField": {
      flex: 2,
    },
  },
  "& label": {
    width: "fit-content",
    "& span": {
      fontSize: "14px",
    },
  },
  "& .MuiTypography-body2": {
    color: theme.palette.grey[700],
  },
  "& .passwordContainer": {
    margin: "20px 0",
    "& input": {
      border: `1px solid ${theme.palette.grey[100]}`,
      background: theme.palette.grey[100],
      color: theme.palette.grey[600],
      padding: "5px 25px 5px 18px",
      marginRight: "50px",
    },
    "& button": {
      color: theme.palette.grey[800],
    },
  },
}));

const UserProfileDetails = () => {
  const userData = useSelector((state: RootState) => state.user.user);
  const navigate = useNavigate();
  const { state }: any = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const [editProfile, setEditProfile] = useState(false);

  const handlepicturechange = () => {
    console.log("Avatar change");
  };

  return (
    <UserProfileContainer alignItems='center'>
      <ProfileHeader>
        <Button
          className='backBtn'
          startIcon={<ArrowBackIcon />}
          onClick={() => {
            navigate("/supply-metrics");
          }}
        >
          {" "}
          Back
        </Button>
        <Stack direction='row' alignItems='center'>
          <Badge
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            badgeContent={<CameraAltIcon onClick={handlepicturechange} />}
          >
            <Avatar {...state?.bgcolor} />
          </Badge>

          <Box>
            <Typography variant='h1'>Hello, {userData.name.split(" ")[0]}</Typography>
            <Typography variant='h3' mt={2}>
              Keep up to date your profile and manage your account’s settings{" "}
            </Typography>
          </Box>
        </Stack>
      </ProfileHeader>
      {!editProfile ? (
        <UserDetails direction='row'>
          <Button className='editBtn'>
            <img src={editIcon} alt='edit-icon' onClick={() => setEditProfile(true)} />
          </Button>
          <Box>
            <Typography variant='h2'>Basic Information</Typography>
            <Stack>
              <Typography variant='body1'>Name</Typography>
              <Typography variant='body2'>{userData.name}</Typography>
            </Stack>
            <Stack>
              <Typography variant='body1'>Company</Typography>
              <Typography variant='body2'>{userData.company}</Typography>
            </Stack>
            <Stack>
              <Typography variant='body1'>Job Title</Typography>
              <Typography variant='body2'>{userData.jobTitle}</Typography>
            </Stack>
          </Box>
          <Box>
            <Typography variant='h2'>Contact Information</Typography>
            <Stack>
              <Typography
                variant='body1'
                sx={{ width: `${userData.email.length < 35 ? "inherit" : "auto!important"}` }}
              >
                Email
              </Typography>
              <Typography variant='body2'>{userData.email}</Typography>
            </Stack>
            <Stack>
              <Typography variant='body1'>Phone Number</Typography>
              <Typography variant='body2'>{userData.mobile}</Typography>
            </Stack>
          </Box>
        </UserDetails>
      ) : (
        <UserDetails direction='row'>
          <EditFormComponent userData={userData} closeProfileDialogFn={() => setEditProfile(false)} />
        </UserDetails>
      )}
      <UserDetails>
        <Typography variant='h2'>Password</Typography>
        <Typography variant='body2'>Last updated on January 1, 2022</Typography>
        <Stack direction='row' className='passwordContainer'>
          <Input type={showPassword ? "text" : "password"} defaultValue={userData.password} disabled />
          <Button variant='outlined'>Change Password</Button>
        </Stack>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label='Show Password'
            onChange={() => {
              setShowPassword(!showPassword);
            }}
          />
        </FormGroup>
      </UserDetails>
    </UserProfileContainer>
  );
};

export default UserProfileDetails;
