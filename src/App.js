import './App.css';
import {useState} from 'react';
import Profile from './Profile';
import Projects from './Projects';
import Resume from './Resume';

function App() {
  const [display, setDisplay] = useState('profile');

  const handleProfileClick = function() {
    setDisplay('profile');
  }

  const handleProjectsClick = function() {
    setDisplay('projects');
  }

  const handleResumeClick = function() {
    setDisplay('resume');
  }

  return ( 
    <div className="App">
      <h1 id = 'nameTitle'>Colin Pace</h1>
      <h3 id = 'webDevTitle'>Web Development</h3>
      
      <div id = "navBar">
        <p
          className = 'navTitle'
          onClick = {handleProfileClick}
          id = {display === 'profile' ? 'selectedProfileTitle' : 'profileTitle'}
        >Profile</p>
        <p 
          className = 'navTitle'
          onClick = {handleProjectsClick}
          id = {display === 'projects' ? 'selectedProjectsTitle' : 'projectsTitle'}
        >Projects</p>
        <p 
          className = 'navTitle'
          onClick = {handleResumeClick}
          id = {display === 'resume' ? 'selectedResumeTitle' : 'resumeTitle'}
        >Resume</p>
      </div>
      
      { display === 'profile' ? 
        <Profile/> :
        display === 'projects' ?
        <Projects/> :
        <Resume/>
      }

      <div id = 'footer'>
        <p id = 'footerTitle'>Contact me:</p>
        <div id = 'contacts'>
          <img 
            className = 'contactIcon' 
            src = {require('./linkedIn.png')}
          />
          <img 
            id = 'githubIcon' 
            className = 'contactIcon' 
            src = {require('./github.png')}
          />
          <img 
            className = 'contactIcon' 
            src = {require('./gmail.png')}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
