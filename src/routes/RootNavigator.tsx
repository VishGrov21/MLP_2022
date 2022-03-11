import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "pages/Login.page";
import ForgotPassword from "components/login/ForgotPassword.component";
import Layout from "routes/Layout";
import { useState } from "react";
import UserProfileDetails from "components/userProfileDetails/UserProfileDetails";

const RootNavigator = () => {
  // This is true because the screen jumps to login on any error during development
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={!isLoggedIn ? <Navigate replace to='/login' /> : <Layout />} />
        <Route path='/login' element={<Login setIsLogedIn={setIsLoggedIn} />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/user-profile' element={<UserProfileDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigator;
