import './app.css';
import { useState } from 'react';
import Hamburger from 'hamburger-react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
import MobileMenu from './components/mobileMenu/MobileMenu';
import Home from './components/pages/home/Home';
import Portfolio from './components/pages/portfolio/Portfolio';
import About from './components/pages/about/About';
import CaseStudy from './components/pages/caseStudy/CaseStudy';
import Contact from './components/pages/contact/Contact';
import AnimatedCursor from "react-animated-cursor"

const App = () => {
  const [isOpen, setOpen] = useState(false)
  const [mobileMenuDisplay, setMobileMenuDisplay] = useState("none")
  return (

    <Router>
      {/* <AnimatedCursor className="cursor" color='0, 196, 16'/> */}
      <div className="App">
        <div className="mobileHeader">
          <Hamburger toggled={isOpen} onToggle={() => {
            if (isOpen) {
              setOpen(false);
              setMobileMenuDisplay("none")
            } else {
              setOpen(true);
              setMobileMenuDisplay("block")
            }
          }} />
        </div>
        <div className="appContainer">
          <Sidebar />
          <MobileMenu mobileMenuDisplay={mobileMenuDisplay} setMobileMenuDisplay={setMobileMenuDisplay} setOpen={setOpen} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/case-study">
              <CaseStudy />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
