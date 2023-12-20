/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/home/landing";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getLoginStatus } from "./services/authService.js";
import { SET_LOGIN_USER } from "./redux/features/auth/authSlice.js";
import LoginContainer from "./components/login/LoginContainer.js";
import Userhome from "./components/user/Userhome.js";
import SerVices from "./components/Services/Services.js";
import Contact from "./components/Contact/contact.js";
import NGO_page from "./components/NGO/NGO_Page.js";
import MainDashboard from "./components/adminDashboard/MainDashboard";
import UserTable from "./components/adminDashboard/tables/UserTable";
import NGOsTable from "./components/adminDashboard/tables/NGOsTable";
import FeedbackTable from "./components/adminDashboard/tables/FeedbackTable";
import ReviewsTable from "./components/adminDashboard/tables/ReviewsTable";
import MessagesTable from "./components/adminDashboard/tables/MessagesTable";
import DonationsTable from "./components/adminDashboard/tables/DonationsTable";
import Feedback from "./components/feedback/Feedback";
import Rating from "./components/Rating/Ratings";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      console.log(status);
      dispatch(SET_LOGIN_USER(status));
    }
    loginStatus();
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div class="page-wrapper">
          <Routes forceRefresh={true}>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/login" element={<LoginContainer />} />
            <Route exact path="/user" element={<Userhome />} />
            <Route exact path="/services" element={<SerVices />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/user" element={<Userhome />} />
            <Route exact path="/ngo" element={<NGO_page />} />
          </Routes>
        </div>
      <Routes>
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/adminDashboard" element={<MainDashboard />} />
        <Route path="/adminDashboard/UserTable" element={<UserTable />} />
        <Route
          path="/adminDashboard/FeedbackTable"
          element={<FeedbackTable />}
        />
        <Route path="/adminDashboard/ReviewsTable" element={<ReviewsTable />} />
        <Route
          path="/adminDashboard/DonationsTable"
          element={<DonationsTable />}
        />
        <Route
          path="/adminDashboard/MessagesTable"
          element={<MessagesTable />}
        />
        <Route path="/adminDashboard/NGOsTable" element={<NGOsTable />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
