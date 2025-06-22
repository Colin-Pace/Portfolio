import './Projects.css';


function Projects() {
  return (
    <div>
      <div className = 'projectImageContainer'>
        <img 
          className = 'projectImage'
          src = {require('./gem.png')}
        />
      </div>  
      <h3 className = 'imageTitle'>Gem Search</h3>    
      <p className = 'imageText'>Designed specifically for desktops, Gem Search is a front end game that has a player use the arrow keys to move a green image around the screen to collect the blue image and to do so without touching the orange images. There is a levels option for easy and hard. Also there is a points tabby that keeps track of one's points. Gem Search uses object oriented design, with classes for the board, player, gem, and opponents (called "traffic" after the frogger game). Gem Search might be thought of as a combination of parts of the games of Frogger and Snake.</p>
      <div className = 'imageLinks'>
        <a 
          href="https://colin-pace.github.io/Gem-Search/"
          target="_blank"
        >Live app</a><br/><br/>
        <a 
          href="https://github.com/Colin-Pace/Gem-Search"
          target="_blank" 
        >GitHub</a>
      </div>

      <div className = 'projectImageContainer'>
        <img 
          className = 'projectImage'
          src = {require('./outerSpace.png')}
        />
      </div>  
      <h3 className = 'imageTitle'>Outer Space Invaders</h3>    
      <p className = 'imageText'>Also designed for desktops, Outer Space Invaders tests a player's ability to launch photon torpedos toward the invading Borg ships. The ships do not launch back, but if they touch the plalyer or the bottom of the board, then the game ends. The game ends also if the player destroys all the borg ships. A front-end game with object-oriented design, Outer Space Invaders challenges a player's intuition and hand-eye coordination.</p>
      <div className = 'imageLinks'>
        <a 
          href="https://colin-pace.github.io/Outer-Space-Invaders/"
          target="_blank"
        >Live app</a><br/><br/>
        <a 
          href="https://github.com/Colin-Pace/Outer-Space-Invaders"
          target="_blank" 
        >GitHub</a>
      </div>
       
      <div className = 'projectImageContainer'>
        <img 
          className = 'projectImage'
          src = {require('./notes.png')}
        />
      </div>  
      <h3 className = 'imageTitle'>Notes Organizer</h3>    
      <p className = 'imageText'>Notes organizer is a front end application that enables the user to create, read, update, and delete notes. Another feature of the application is the sorting option, which can sort the notes according to newest to oldest or oldest to newest. The technology used in the application is described in the GitHub ReadMe, which is linked to below.</p>
      <div className = 'imageLinks'>
        <a 
          href="https://colin-pace.github.io/Notes/"
          target="_blank"
        >Live app</a><br/><br/>
        <a 
          href="https://github.com/Colin-Pace/Notes" 
          target="_blank"
        >GitHub</a>
      </div>
      
      <div className = 'projectImageContainer'>
        <img 
          className = 'projectImage'
          src = {require('./twitter.png')}
        />
      </div>
      <h3 className = 'imageTitle'>Twitter Clone</h3>
      <p className = 'imageText'>The Twitter Clone is a front end application in React that allows a user to register an account and log in to the website. Once logged in, the user can make Tweets and comment on Tweets. Other features include the ability to view the user's profile page and the profile pages of other users. On other users' profile pages, a user can follow them and then see those users' tweets in the user's home page. The technology used in the application is described in the ReadMe on GitHub.</p>
      <div className = 'imageLinks'>
        <a 
          href="https://colin-pace.github.io/TwitterClone/"
          target="_blank"
        >Live app</a><br/><br/>
        <a 
          href="https://github.com/Colin-Pace/TwitterClone" 
          target="_blank"
        >GitHub</a>
      </div>

      <div className = 'projectImageContainer'>
        <img 
          className = 'projectImage'
          src = {require('./dijkstra.png')}
        />
      </div>
      <h3 className = 'imageTitle'>Dijkstra's Algorithm Illustrated</h3>
      <p className = 'imageText'>A vanilla JavaScript game that illustrates Dijkstra's algorithm. The game is to use the up, down, left, and right keys to move steps away from the green block that follows the user's blue block. The path that the green block takes is determined by Dijkstra's algorithm. The board is a wrap around board, which enables the user to move from side to side relatively easily.</p>
      <div className = 'imageLinks'>
        <a 
          href="https://colin-pace.github.io/Dijkstra-Illustrated/"
          target="_blank"
        >Live app</a><br/><br/>
        <a 
          href="https://github.com/Colin-Pace/Dijkstra-Illustrated" 
          target="_blank"
        >GitHub</a>
      </div>

      <div className = 'projectImageContainer'>
        <img 
          className = 'projectImage'
          src = {require('./aap.png')}
        />
      </div>
      <h3 className = 'imageTitle' id="bookLink">Algorithms and Programs: An introduction with JavaScript</h3>
      <p className = 'imageText'><i>Algorithms and Programs</i> is a book that introduces the reader to the syntax of JavaScript and then to basic data structures and algorithms. The book is intended for beginners and has a style of prose that is familiar to those who are used to studying the syntax of human languages.</p>
      <div className = 'imageLinks'>
        <a 
          href="https://colin-pace.github.io/AlgorithmsAndPrograms/static/media/aap.33df4dc1ef27def7ed4e.pdf"
          target="_blank"
        >Live app</a><br/><br/>
        <a 
          href="https://github.com/Colin-Pace/AlgorithmsAndPrograms" 
          target="_blank"
        >GitHub</a>
      </div>

    </div>
  );
}

export default Projects;
