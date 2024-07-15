import './Profile.css';


function Profile() { 
  return ( 
    <div> 
      <img 
        id = 'portrait' 
        src = {require('./portrait.jpg')}
      />
      <p id = 'firstParagraph' className = 'profileText'>Hello! Welcome to my profile. I'm Colin. I live in Austin, Texas. My education was at The University of Texas at Austin. I have had a couple great jobs, though I'm currently job searching.</p>
      <p className = 'profileText'>Please explore my profile. The tests section contains my placements on the high end of the spectrum for IQ and aptitude tests. The code section has my coding projects. The CV section has my resume. The blog and YouTube links take you to my science blog on Medium and my YouTube channel.</p>
      <p className = 'lastText'>As a perspicacious science blogger and an unwavering vegan, I offer a synthesis of intellectual curiosity, scholarly achievement, and open-mindedness.</p>
    </div>
  );
}

export default Profile;
