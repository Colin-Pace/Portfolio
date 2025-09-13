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
          >Science Articles</a>
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
        <p id = 'footerTitle'>Around the Web</p>

        <p>Email: pace.colin@icloud.com</p>

        <a 
          className = 'AW'
          href="https://youtube.com/@colinpace-o8g?si=g4NKZfl6UL8sb2cb" 
          target="_blank" 
          id = ""

        >YouTube
          
        </a>

        <br></br>
        <br></br>

        <a

          className = 'AW'
          href="https://www.facebook.com/profile.php?id=61580997774035" 
          target="_blank" 
          id = ""
        
        >Facebook</a>

        <br></br>
        <br></br>

        <a
  
          className = 'AW'
          href="https://x.com/colin_pace_1987?s=21&t=n3_aN2-S346aY0LHuCzdhA" 
          target="_blank" 
          id = ""
        
        >X</a>
        
          
   
      </div>
    </div>
  );
}

export default App;
 