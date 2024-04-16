/*

=========================================================
* Now UI Kit React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2023 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";

import ProfilePage from "views/examples/ProfilePage.js";
import FileUpload from "views/inputSTLPage/stlinputpage";
import SignUpPage from "views/examples/SignupPage";
import InputPage from "views/examples/InputPage";
import Aboutus from "pages/aboutus/aboutus";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/nucleo-icons" element={<NucleoIcons />} />
     
      {/* <Route path="/profile-page" element={<ProfilePage />} /> */}
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/signup-page" element={<SignUpPage/>}/>
      {/* <Route path="/stlINPUT" element={< FileUpload/>} /> */}
      <Route path="/fileUpload" element={<InputPage/>}/>
      <Route path="/aboutus" element={< Aboutus/>} /> 



      <Route path="*" element={<Navigate to="/index" replace />} />
    </Routes>
  </BrowserRouter>
);
