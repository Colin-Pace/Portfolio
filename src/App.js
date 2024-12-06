import {useState} from 'react';
import './App.css';
import Profile from './Profile';
import Projects from './Projects';
import Resume from './Resume';
import Tests from './Tests';
import Education from './Education';

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
       
          {/* <a
            className = 'navTitle'
            onClick = {handleTestsClick}
            id = {display === 'tests' ? 'selectedTestsTitle' : 'testsTitle'}
          >Tests</a>

          <a
            className = 'navTitle'
            onClick = {handleEducationClick}
            id = {display === 'education' ? 'selectedEducationTitle' : 'educationTitle'}
          >Education</a> */}


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
        
          <a id = 'blog'
            href = "https://medium.com/@colinpace1987"
            target="_blank"
          >Blog</a>

          {/* <a
            id = 'youTube'
            href = 'https://www.youtube.com/@colinpace1987'
            target = "_blank"
          >YouTube</a> */}

        </div>

      </div>
  
      
      { display === 'profile' ? 
        <Profile/> :
          display === 'tests' ?
          <Tests/> :
            display === 'education' ?
              <Education/> :
                display === 'projects' ?
                  <Projects/> :
                  <Resume/>
        }

      <div id = 'footer'>
        <p id = 'footerTitle'>Contact me:</p>
        <div id = 'contacts'>
          {/* <a href = 'https://www.youtube.com/@colinpace1987'>
            <img
              id = 'youTubeIcon'
              className = 'contactIcon' 
              src = {require('./youTube.png')}
            />
          </a> */}
          <a
            href = 'https://www.instagram.com/colinpace1987/?hl=en'
            target = '_blank'
          >
            <img 
              id = 'igIcon' 
              className = 'contactIcon' 
              src = {require('./ig_icon.png')}
            />
          </a>
          <a
            href = 'https://x.com/i/flow/login?redirect_after_login=%2FColin_Pace_1987'
            target = '_blank'
          >
            <img
              id = 'xIcon'  
              className = 'contactIcon' 
              src = {require('./x_icon.png')}
            />
          </a>
          <a 
            href = 'https://www.linkedin.com/in/colin-pace-6b7ba7241'
            target = '_blank'
          >
            <img 
              className = 'contactIcon' 
              src = {require('./linkedIn.png')}
            />
          </a>
          <a 
            href = 'https://github.com/Colin-Pace?tab=repositories'
            target = '_blank'  
          >
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
 