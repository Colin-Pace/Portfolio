import './Profile.css';


function Profile() { 
  return ( 
    <div>
      <img
        id = 'portrait'
        src = {require('./selfPortrait.jpg')}
      />
      <p id = 'firstParagraph' className = 'lastText'>I am a Geographic Information Systems (GIS) Analyst with a background in anthropology, South Asian languages, and science, technology, engineering, and mathematics (STEM). I bring a combination of analytical rigor, cultural fluency, and technical acumen to my work. My intellectual interests range from science and technology, to environmentalism and plant-based diets. I am committed to cultivating a mindful and erudite life.</p>
    </div>
  );
}

export default Profile;
