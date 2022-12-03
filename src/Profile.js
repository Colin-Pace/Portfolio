import './Profile.css';


function Profile() { 
  return ( 
    <div> 
      <p id = 'firstPara' className = 'profileText'>I am an Austin based web developer specializing in React applications. I have a certificate from The Coding Boot Camp at The University of Texas at Austin. </p>
      <p className = 'profileText'>I have studied web development for six years. The projects section of this portfolio website showcases a few recent projects that demonstrate my React skills.</p>
      <p id = 'lastText' className = 'profileText'>In addition to React, I have studied Python and the Django and Flask frameworks as well as Postgres and Express. In the future, I hope to gain employment as a web developer. I am applying to positions and am looking to interview early in 2023.</p>
    </div>
  );
}

export default Profile;
