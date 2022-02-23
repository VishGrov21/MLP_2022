import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "pages/Login.page";
import Layout from "routes/Layout";
import { useState } from "react";

const RootNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={!isLoggedIn ? <Navigate replace to='/login' /> : <Layout />} />
        <Route path='/login' element={<Login setIsLogedIn={setIsLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigator;
