import './Profile.css';


function Profile() { 
  return ( 
    <div> 
      <img 
        id = 'portrait' 
        src = {require('./portrait.jpg')}
      />
      <p id = 'firstParagraph' className = 'profileText'>Hello! Welcome to my profile. I'm Colin. I live in Austin, Texas. My education was at The University of Texas at Austin. I have a BA in Anthropology, MA in Asian Cultures and Languages, and a coding boot camp certificate. After university, I have had a couple great jobs, and I'm currently an Information Processing Specialist for TCS.</p>
      <p className = 'profileText'>Please explore my profile. The code section has my coding projects. The CV section has my resume. The blog link takes you to my science blog on Medium.</p>
      <p className = 'lastText'>As a science blogger and a vegan, I offer a synthesis of intellectual curiosity, scholarly achievement, and open-mindedness.</p>
    </div>
  );
}

export default Profile;
