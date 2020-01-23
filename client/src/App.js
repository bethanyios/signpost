import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Map from "./components/Map/Map";
import LandingPage from "./components/LandingPage/LandingPage";
import IconsPage from "./components/IconsPage/IconsPage";
import AboutUs from "./components/AboutUs/AboutUs";
import AddNewService from "./components/AddNewService/AddNewService";
import ThankYou from "./components/ThankYou/ThankYou";

function App() {
  return (
    <Router>
      <Route exact path='/' component={LandingPage} />
      <Route path='/about' component={AboutUs} />
      <Route path='/iconspage' component={IconsPage} />
      <Route path='/map' component={Map} />
      <Route path='/addservice' component={AddNewService} />
      <Route path='thankyou' component={ThankYou} />
    </Router>
  );
}

export default App;
