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
      <p className = 'imageText'>Notes organizer is a front end application that enables the user to create, read, update, and delete notes. Another feature of the application is the sorting option, which can sort the notes according to newest to oldest or oldest to newest. The technology used in the application is described in the GitHub ReadMe, which is linked to below.</p>
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
      <p className = 'imageText'>The Twitter Clone is a front end application in React that allows a user to register an account and log in to the website. Once logged in, the user can make Tweets and comment on Tweets. Other features include the ability to view the user's profile page and the profile pages of other users. On other users' profile pages, a user can follow them and then see those users' tweets in the user's home page. The technology used in the application is described in the ReadMe on GitHub.</p>
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
      <p className = 'imageText'>The New York Times Best Sellers Clone is a front end application that displays the current best selling books on the New York Times list. Other features of the application are the abilities of the user to select a type of book that they want to view and also the date of the selection. The application uses React component classes, and more information abou the technology is in the ReadMe on GitHub.</p>
      <div className = 'imageLinks'>
        <a 
          href="https://colin-pace.github.io/NYT-Best-Sellers/"
        >Live app</a><br/><br/>
        <a 
          href="https://github.com/Colin-Pace/NYT-Best-Sellers" 
        >GitHub</a>
      </div>

      <div className = 'projectImageContainer'>
        <img 
          className = 'projectImage'
          src = {require('./aap.png')}
        />
      </div>
      <h3 className = 'imageTitle'>Algorithms and Programs: An introduction with JavaScript</h3>
      <p className = 'imageText'>Algorithms and Programs is a book that introduces the reader to the syntax of JavaScript and then the basic data structures and algorithms. The book is intended for beginners and has prose that will be familiar to those who are used to studying syntax of human languages also.</p>
      <div className = 'imageLinks'>
        <a 
          href=""
        >Live app</a><br/><br/>
        <a 
          href="" 
        >GitHub</a>
      </div>

    </div>
  );
}

export default Projects;
