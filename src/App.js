import './Home.css';
import {Switch, Route} from "react-router-dom"
import Home from "./Home"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {
  return (
    <div className="home">
      <Switch>
        <Route exact path="/AboutMe">
          <AboutMe/>
        </Route>
        <Route exact path="/Contact"/>
          <Contact/>
        <Route exact path="/Projects">
          <Projects/>
        </Route>
        <Route exact path="/Skills">
          <Skills/>
        </Route>
        <Route exact path="/">
          <Home/>    
        </Route>
      </Switch>
      <Home/>
    </div>
  );
}

export default App;
