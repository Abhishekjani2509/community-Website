// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import ProtectedRoute from "./Context/ProtectedRoute";
import ScrollToTop from "./component/layout/scrolltop";
import AboutPage from "./pages/about";
import ActivityPage from "./pages/activity";
import BlogPage from "./pages/blog";
import BlogDetails from "./pages/blog-single";
import BlogPageTwo from "./pages/blogtwo";
import ComingSoonPage from "./pages/comingsoon";
import CommunityPage from "./pages/community";
import ContactUs from "./pages/contact";
import ErrorPage from "./pages/errorpage";
import GroupPage from "./pages/group";
import GroupDetails from "./pages/groupsingle";
import HomePage from "./pages/home";
import HomePageThree from "./pages/homethree";
import HomePageTwo from "./pages/hometwo";
import LogIn from "./pages/login";
import MemberDetails from "./pages/member-single";
import MembersPage from "./pages/members";
import MembershipPage from "./pages/membership";
import ShopPage from "./pages/shop";
import ShopCart from "./pages/shopcart";
import ShopDetails from "./pages/shopdetails";
import SignUp from "./pages/signup";
import Policy from "./pages/policy";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="members"
            element={
              <ProtectedRoute>
                <MembersPage />
              </ProtectedRoute>
            }
          />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="register" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route
            path="member-single/:id"
            element={
              <ProtectedRoute>
                <MemberDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
