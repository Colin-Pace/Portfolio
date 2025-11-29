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
      <p className = 'imageText'>Designed specifically for desktops, Gem Search is a front-end game that enables a player to use the up, down, left, and right arrow keys to move a green image around the screen and collect the blue image for points. If the green image touches an orange image, the game ends. There is an option for an easy or hard level. Also there is a score that keeps track of points. Gem Search uses object-oriented design, with classes for the board, player, gem, and opponents (the opponents are called "traffic" after the frogger game). Gem Search can be thought of as a combination of Frogger and Snake. The technology used in the application is described in the GitHub ReadMe. Below, there are links to the live app and to the GitHub page.</p>
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
          src = {require('./dijkstraIllustrated.png')}
        />
      </div>  
      <h3 className = 'imageTitle'>Dijkstra Illustrated</h3>    
      <p className = 'imageText'>The app is a fun game that illustrates Dijkstra's Algorithm. A type of a graph search, Dijkstra's Algorithm finds the shortest path in a non-negatively weighted graph. For example, if you open a maps application, like Google Maps, to find a route between your current location and a destination, it's likely that the program uses Dijkstra's Algorithm. The point of the game is to use the arrow keys to move the blue image around the screen while the green image follows the blue image. The yellow line between the blue and green images is the shortest path between the two images, which the green image takes to reach the blue one. Once the green image reaches the blue image, the game ends. In the game, there is a single obstacle that is in the center of the game board, and the obstacle obstructs movement by the player and opponent. The game board is a wrap-around board, enabling the player easily to move from side to side. The game is coded with JavaScript and no libraries. The game uses object oriented design with classes for the grid, player, opponent, and obstacle.</p>
      <div className = 'imageLinks'>
        <a 
          href="https://colin-pace.github.io/Dijkstra-Illustrated/"
          target="_blank"
        >Live app</a><br/><br/>
        <a 
          href="https://github.com/Colin-Pace/Dijkstra-Illustrated/tree/main"
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
      <p className = 'imageText'>Notes organizer is a front-end application that has a user create, read, update, and delete notes. Another feature of the application is a sorting option, which sorts notes according to the time of their creation, either from newest to oldest or from oldest to newest.</p>
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
      

      <div id = 'bookImage'>
        <img
          id = 'bookImage'
          src = {require('./bookImage.png')}
        />
      </div>
      <h3 className = 'imageTitle' id="bookLink">Algorithms and Programs: An introduction with JavaScript</h3>
      <p className = 'imageText'><i>Algorithms and Programs</i> is a book that introduces a reader to the syntax of JavaScript and then to data structures and algorithms.</p>
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
