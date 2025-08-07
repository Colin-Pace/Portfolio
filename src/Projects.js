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
      <p className = 'imageText'>Designed specifically for desktops, Gem Search is a front-end game that has a player use the arrow keys to move a green image around the screen and collect the blue image for points. If the green image touches an orange image, the game ends. There is an option for an easy or hard level. Also there is a score that keeps track of points. Gem Search uses object oriented design, with classes for the board, player, gem, and opponents (called "traffic" after the frogger game). Gem Search can be thought of as a combination of Frogger and Snake.</p>
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
          src = {require('./notes.png')}
        />
      </div>  
      <h3 className = 'imageTitle'>Notes Organizer</h3>    
      <p className = 'imageText'>Notes organizer is a front-end application that enables a user to create, read, update, and delete notes. Another feature of the application is a sorting option, which can sort the notes according to newest to oldest or oldest to newest. The technology used in the application is described in the GitHub ReadMe, which is linked below.</p>
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
          src = {require('./dijkstra.png')}
        />
      </div>
      <h3 className = 'imageTitle'>Dijkstra's Algorithm Illustrated</h3>
      <p className = 'imageText'>This is a vanilla JavaScript game that illustrates Dijkstra's algorithm. The game is to use the up, down, left, and right keys to move steps away from the green block that follows the user's blue block. The path that the green block takes is determined by Dijkstra's algorithm and is illustrated with orange blocks. The board is a wrap around board, which enables the user to move easily from either side of the board to the other.</p>
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
