import './Resume.css';


function Resume() {
  return (
    <div>
      <h3 id = 'resumeTitle'>Resume</h3>
      <div id = 'resumeContainer'>
        <div id = 'resumeLeft'>
          <div className = 'edStint'>
            <p className = 'sideTitle'>Education</p>
            <p className = 'school'>The Coding Boot Camp at The University of Texas at Austin</p>
            <p className = 'date'>2021 - 2022</p>
            <p className = 'moreInfo'>- Coding and web development with languages like HTML, CSS, and JavaScript</p>
          </div>

          <div className = 'edStint'>
            <p className = 'school'>Self study in programming</p>
            <p className = 'date'>2017 - 2021</p>
            <p className = 'moreInfo'>- Focus on web development, data structures, and algorithms</p>
          </div>
          
          <div className = 'edStint'>
            <p className = 'school'>Graduate study in Anthropology at The Univesity of Texas</p>
            <p className = 'date'>2014 - 2017</p>
            <p className = 'moreInfo'>- Courses for the MA/PhD program</p>
            <p className = 'moreInfo'>- Funded by The National Science Foundation</p>
          </div>

          <div className = 'edStint'>
            <p className = 'school'>The University of Texas at Austin -- Master's</p>
            <p className = 'date'>2012 - 2014</p>
            <p className = 'moreInfo'>- The degree is in Asian Cultures and Languages</p>
            <p className = 'moreInfo'>- Focus on Modern Standard Hindi</p>
            <p className = 'moreInfo'>- MA report titled "Reflections on Hindi and History"</p>
            <p className = 'moreInfo'>- Funded by Foreign Language Area Scholarships</p>
          </div>

          <div className = 'edStint'>
            <p className = 'school'>The University of Texas at Austin -- Bacherlor of Arts</p>
            <p className = 'date'>2006 - 2011</p>
            <p className = 'moreInfo'>- The degree is in Anthropology and was awarded with honors</p>
          </div>
        </div>
        <div id = 'resumeRight'>
          <p className = 'sideTitle'>Development Skills</p>
          <p className = 'moreInfoRight'>- HTML</p>
          <p className = 'moreInfoRight'>- CSS</p>
          <p className = 'moreInfoRight'>- JavaScript</p>
          <p className = 'moreInfoRight'>- React</p>
          <p className = 'moreInfoRight'>- Git</p>
          <p id = 'accomplishments' className = 'sideTitle'>Accomplishments</p>
          <p className = 'moreInfoRight'>- National Science Foundation Graduate Research Fellowship, 2014 - 2017</p>
          <p className = 'moreInfoRight'>- Department of Education Foreign Language Area Scholarships, 2012 - 2014</p>
          <p className = 'moreInfoRight'>- Graduate Record Examinations (GRE) 96th percentile nationally in both verbal reasoning and analytical writing, 2009</p>
        </div>
      </div> 
    </div>
  );
}

export default Resume;
