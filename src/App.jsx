import "./css/App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Blogs from "./components/blogs/Blogs";
import BlogDetail from "./components/blogs/BlogDetails";
import Advertising from "./components/services/advertising/Advertising";
import Logo from "./components/services/logo/Logo";
import SocialContent from "./components/services/socialContent/SocialContent";
import Reserve from "./components/services/Reserve/Reserve";
import Seo from "../src/components/services/SEO/Seo.jsx";
function App() {
  const [isToggle, setIsToggle] = useState(false);
  const [dark, setDark] = useState(false);

  const toggle = () => {
    setIsToggle(!isToggle);
  };
  const modeSwitch = (state) => {
    setDark(state)
  };


  return (
    <Router>
      <div className={!dark ?"App" : "App dark"}>
        {/* <Route path="/" exact component={Blogs} />
    <Route path="/blog/:id" component={BlogDetail} /> */}
        {/* <Seo /> */}

        {/* <Advertising /> */}
        <Navbar isToggle={isToggle} toggle={toggle} funcMode={modeSwitch} dark={dark}/>
        <Home isToggle={isToggle} dark={dark} />
        <Switch>
          {/* <Route  path='/home'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/services'>
        <Services/>
      </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
