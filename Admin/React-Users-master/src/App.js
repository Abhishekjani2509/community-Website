import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";
import Register from "./components/pages/Register";
import Profile from "./components/pages/Profile";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import { ProtectedRoute } from "./Context/ProtectedRoute";
import { useAuth } from "./Context/AuthContext";

function App() {
const {token} = useAuth();
  return (
    <Router>
      {token?(
        <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          {/* <Route exact path="/about" component={About} /> */}
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          <Route component={NotFound} />
        </Switch>
      </div>
      ):(
        <Route  path="/" component={Login} />
      )}
      
    </Router>
  );
}

export default App;
