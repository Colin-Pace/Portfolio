import './Profile.css';


function Profile() { 
  return ( 
    <div>
      <img
        id = 'portrait'
        src = {require('./SelfPortrait.jpg')}
      />
      <p id = 'firstParagraph'>I am exploring a campaign to become president of the United States of America. I have a potentially globally and historically unprecedented testing profile. I have theorized and, as president, would develop a treatment for disease with genetic engineering, and I plan to negotiate with the possible medical advancements for world peace. I have other campaign goals. To read about them and more about me, please click the link at the top of the page for my autobiography.</p>
      <p id = 'lastText'>Professionally, I am a Geographic Information Systems Analyst with a background in anthropology, South Asian languages, and science, technology, engineering, and mathematics. I bring a combination of analytical rigor, cultural fluency, and technical acumen to my work. My intellectual interests range from science and technology, to environmentalism and plant-based diets. I am committed to cultivating a mindful and erudite life.</p>
    </div>
  );
}

export default Profile;
