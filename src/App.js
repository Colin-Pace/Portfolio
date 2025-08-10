import {useState} from 'react';
import './App.css';
import Profile from './Profile';
import Projects from './Projects';
import Resume from './Resume';

function App() {
  const [display, setDisplay] = useState('profile');

  const handleProfileClick = function() {
    setDisplay('profile');
  }

  const handleTestsClick = function() {
    setDisplay('tests');
  }

  const handleEducationClick = function() {
    setDisplay('education');
  }

  const handleProjectsClick = function() {
    setDisplay('projects');
  }

  const handleResumeClick = function() {
    setDisplay('resume');
  }

  return ( 
    <div className="App"> 
      <div id = "top">

        <h1 id = "nameTitle">Colin Pace</h1>
        
        <div id = "navBar">
          <a 
            className = 'navTitle'
            onClick = {handleProfileClick}
            id = {display === 'profile' ? 'selectedProfileTitle' : 'profileTitle'}
          >Bio</a>
      
          <a
            className = 'navTitle'
            onClick = {handleProjectsClick}
            id = {display === 'projects' ? 'selectedProjectsTitle' : 'projectsTitle'}
          >Code</a>
          <a
            className = 'navTitle'
            onClick = {handleResumeClick}
            id = {display === 'resume' ? 'selectedResumeTitle' : 'resumeTitle'}
          >CV</a>
          <a
            href="https://medium.com/@colinpace1987" 
            target="_blank" 
            id = "blogLink"
            className = 'navTitle'
          >Science Blog</a>
          <a 
          className = 'navTitle'
          href="https://colin-pace.github.io/AlgorithmsAndPrograms/static/media/aap.33df4dc1ef27def7ed4e.pdf" 
          target="_blank" 
          id = "navbarBookLink">Coding Book</a>
        </div>

      </div>
  
      
      { display === 'profile' ? 
        <Profile/> :
              display === 'projects' ?
                <Projects/> :
                <Resume/>
      }

      <div id = 'footer'>
        <p id = 'footerTitle'>Social Media Links:</p>
        <div id = 'contacts'>

          <a 
            href = 'https://www.facebook.com/ColinPace1987'
            target = '_blank'
            id = 'facebookIcon'
          >
            <img 
              className = 'contactIcon' 
              src = {require('./facebookIcon.png')}
            />
          </a>

          <a 
            href = 'https://www.linkedin.com/in/colin-pace-6b7ba7241'
            target = '_blank'
            id = "linkedInIcon"
          >
            <img 
              className = 'contactIcon' 
              src = {require('./linkedIn.png')}
            />
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default App;
 