import './Projects.css';


function Projects() {
  return (
    <div> 
      <h3 id = "projectsTitle">Projects</h3>

      <div className = 'projectImageContainer'>
        <img 
          className = 'projectImage'
          src = {require('./notes.png')}
        />
      </div> 
      <h3 className = 'imageTitle'>Notes Organizer</h3>
      <p className = 'imageText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className = 'imageLinks'>
        <a 
          href="https://colin-pace.github.io/Notes/"
        >Live app</a><br/><br/>
        <a 
          href="https://github.com/Colin-Pace/Notes" 
        >GitHub</a>
      </div>
      
      <div className = 'projectImageContainer'>
        <img 
          className = 'projectImage'
          src = {require('./twitter.png')}
        />
      </div>
      <h3 className = 'imageTitle'>Twitter Clone</h3>
      <p className = 'imageText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className = 'imageLinks'>
        <a 
          href=""
        >Live app</a><br/><br/>
        <a 
          href="" 
        >GitHub</a>
      </div>

      <div className = 'projectImageContainer'>
        <img 
          className = 'projectImage'
          src = {require('./nyt.png')}
        />
      </div>
      <h3 className = 'imageTitle'>NYT Best Sellers Clone</h3>
      <p className = 'imageText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className = 'imageLinks'>
        <a 
          href="https://colin-pace.github.io/NYT-Best-Sellers/"
        >Live app</a><br/><br/>
        <a 
          href="https://github.com/Colin-Pace/NYT-Best-Sellers" 
        >GitHub</a>
      </div>

    </div>
  );
}

export default Projects;
