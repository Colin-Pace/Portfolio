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
      <a id = 'blog'
         href = "https://medium.com/@colinpace1987">Blog</a>
      
      <div id = "navBar">
        <a
          className = 'navTitle'
          onClick = {handleProfileClick}
          id = {display === 'profile' ? 'selectedProfileTitle' : 'profileTitle'}
        >Profile</a>
        <a
          className = 'navTitle'
          onClick = {handleProjectsClick}
          id = {display === 'projects' ? 'selectedProjectsTitle' : 'projectsTitle'}
        >Projects</a>
        <a
          className = 'navTitle'
          onClick = {handleResumeClick}
          id = {display === 'resume' ? 'selectedResumeTitle' : 'resumeTitle'}
        >Resume</a>
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
          <a href = 'https://www.youtube.com/@colinpace1987'>
            <img
              id = 'youTubeIcon'
              className = 'contactIcon' 
              src = {require('./youTube.png')}
            />
          </a>
          <a href = 'www.linkedin.com/in/colin-pace-6b7ba7241'>
            <img 
              className = 'contactIcon' 
              src = {require('./linkedIn.png')}
            />
          </a>
          <a href = 'https://github.com/Colin-Pace?tab=repositories'>
            <img 
              id = 'githubIcon' 
              className = 'contactIcon' 
              src = {require('./github.png')}
            />
          </a>
          <a
            href = 'mailto:colinpace1987@gmail.com'
            target = '_blank'
            rel = 'noopener noreferrer'
          >
            <img 
              className = 'contactIcon' 
              src = {require('./gmail.png')}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
