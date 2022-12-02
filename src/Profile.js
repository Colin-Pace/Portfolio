import './Profile.css';


function Profile() { 
  return ( 
    <div>
      <h3 id = "profileTitle">Profile</h3>
      <p className = 'profileText'>I am an Austin based web developer. I have studied web development for six years. The focus of my web development is building front end applications with HTML, CSS, and JavaScript. Often I use the React framework for applications. The projects section of this portfolio website demonstrates three such projects: notes organizer, a Twitter clone, and a clone of the New York Times Best Sellers website.</p>
      <p className = 'profileText'>After a few years of self study in web development, I enrolled in and then graduated from The Coding Boot Camp at The University of Texas at Austin (UT Austin). The curriculum centered on front end web development with JavaScript. Since graduating from the coding boot camp, I have built front end applications and practiced data structures and algorithms. I have also studied Python and the Django and Flask frameworks.</p>
      <p className = 'profileText'>I became interested in web development while I was a graduate student in The Department of Anthropology at UT Austin. For about four years, I conducted fieldwork in north India where I studied language and culture. Hindi and Sanskrit are the languages I studied while living in India. My Master’s degree, in Asian Cultures and Languages, which I obtained in 2014, elucidated the historical development of Modern Standard Hindi in relation to other languages of the subcontinent.</p>
      <p className = 'profileText'>The connection between my graduate work at UT Austin and web development is the study of language, of syntax and vocabulary, in the composition of text. After I mastered the basics of JavaScript, I wrote a book, <i>Algorithms and Programs: An Introduction with JavaScript</i>, that first explains the syntax of JavaScript for beginners and then introduces the reader to data structures and algorithms. The book also serves as an introduction to the most advanced book <i>Cracking the Coding Interview</i>.</p>
      <p id = 'lastText' className = 'profileText'>In the future, I hope to gain employment as a web developer. I am applying to positions and am looking to interview early in 2023.</p>
    </div>
  );
}

export default Profile;
