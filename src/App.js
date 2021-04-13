import './App.css';
import {Button, Menu,Icon} from 'semantic-ui-react';
import myskills from './component/my-skills';
import {BrowserRouter as Routes, Route, Link } from 'react-router-dom';
import contactme from './component/contact-me';
import aboutme from './component/about-me';
import home from './component/home';
import project from './component/project';
function App() {
  return (
    <div className="App">
      <Menu inverted style={{margin:0}} fixed="true">
          <Menu.Item className="trans-effect" href="#home">
            Home</Menu.Item>
          <Menu.Item className="trans-effect" href="#skills">
            Skills</Menu.Item>
          <Menu.Item className="trans-effect" href="#about-me">
            About me</Menu.Item>
          <Menu.Item className="trans-effect" href="#contact-me">
            Contact</Menu.Item>
      </Menu>
      <Routes>
      <div className="home-div" id="home"
      style={{
        background: 'url(/Images/Back-Image4.jpg)  center no-repeat',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        minHeight: 670
        }}
      >
      <Route path="/" component={home}></Route>
      </div>

      <div className="my-skills-div" id="skills">
        <Route path="/" component={myskills}></Route>
      </div>
      
      <div className="about-me-div" id="about-me">
      <Route path="/" component={aboutme}></Route>
      </div>
      
      <div className="project-div" id="project">
        <Route path="/" component={project}></Route>
      </div>

      <div className="contact-me-div" id="contact-me">
        <Route path="/" component={contactme}></Route>  
      </div>
      </Routes> 
    </div>

    
  );
}

export default App;
