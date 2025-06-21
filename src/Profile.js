import './Profile.css';


function Profile() { 
  return ( 
    <div>
      <img
        id = 'portrait'
        src = {require('./portrait.jpg')}
      />
      <p id = 'firstParagraph' className = 'lastText'>I am a geographic information systems (GIS) analyst with a background in anthropology, South Asian languages, and science, technology, engineering, and mathematics (STEM). I bring a combination of analytical rigor, cultural fluency, and technical acumen to my work. My intellectual interests range from current science and ethical technology, to environmentalism and veganism. I am committed to cultivating a mindful and erudite life.</p>
    </div>
  );
}

export default Profile;
