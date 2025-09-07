import './Profile.css';


function Profile() { 
  return ( 
    <div>
      <img
        id = 'portrait'
        src = {require('./portrait.jpg')}
      />
      <p id = 'firstParagraph' className = 'lastText'>For the most recent news about me, please see the playlists and descriptions on my <a href = "https://www.youtube.com/channel/UCHuaKeCPY91AJ90Yyp08iKg" target="_blank" id = "yTLink">YouTube</a> profile. I am a Geographic Information Systems (GIS) Analyst with a background in anthropology, South Asian languages, and science, technology, engineering, and mathematics (STEM). I bring a combination of analytical rigor, cultural fluency, and technical acumen to my work. My intellectual interests range from science and technology, to environmentalism and plant-based diets. I am committed to cultivating a mindful and erudite life.</p>
    </div>
  );
}

export default Profile;
