import './App.css';
import {Button, Menu} from 'semantic-ui-react';
import myskills from './component/my-skills';
import {BrowserRouter as Routes, Route, Link } from 'react-router-dom';
import contactme from './component/contact-me';
import aboutme from './component/about-me';
import home from './component/home';
function App() {
  return (
    <div className="App">
      <Menu pointing secondary>
          <Menu.Item className="trans-effect" href="#home">Home</Menu.Item>
          <Menu.Item className="trans-effect" href="#skills">Skills</Menu.Item>
          <Menu.Item className="trans-effect" href="#blogs">Blogs</Menu.Item>
          <Menu.Item className="trans-effect" href="#about-me">About me</Menu.Item>
          <Menu.Item className="trans-effect" href="#contact-me">Contact</Menu.Item>
      </Menu>
      <Routes>
      <div className="home-div" id="home"
      style={{
        background: 'url(/Images/new_nature.jpg)  center no-repeat chocolate',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover'
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
      
      <div className="blogs-div" id="blogs">

      </div>

      <div className="contact-me-div" id="contact-me">
        <Route path="/" component={contactme}></Route>  
      </div>
      </Routes> 
    </div>

    
  );
}

export default App;
