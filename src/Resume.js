import './Resume.css';


function Resume() {
  return (
    <div>
      <div id = 'resumeContainer'>
        <div id = 'resumeLeft'>
          <div id = 'experience'>
            <p className = 'sideTitle'>Experience</p>
            <p className = 'title'>Research and Machine Intelligence Analyst - GlobalLogic</p>
            <p className = 'title'>Research Engineering Scientist Associate I - Applied Research Laboratories, Pickle Research Campus, The University of Texas at Austin</p>
          </div>

          <div className = 'edStint'>
            <p className = 'sideTitle'>Education</p>
            <p className = 'school'>Certificate from The Coding Boot Camp - The University of Texas at Austin</p>
          </div>

          <div className = 'edStint'>
            <p className = 'school'>MA in Asian Cultures and Languages - The University of Texas at Austin</p>
          </div>

          <div className = 'edStint'>
            <p className = 'school'>BA in Anthropology - The University of Texas at Austin</p>
          </div>
        </div>
        <div id = 'resumeRight'>
          <p className = 'sideTitle'>Skills</p>
          <p className = 'moreInfoRight'>HTML</p>
          <p className = 'moreInfoRight'>CSS</p>
          <p className = 'moreInfoRight'>JavaScript</p>
          <p className = 'moreInfoRight'>React</p>
          <p className = 'moreInfoRight'>Express</p>
          <p className = 'moreInfoRight'>Python</p>
          <p className = 'moreInfoRight'>Django</p>
          <p className = 'moreInfoRight'>Postgres</p>
          <p className = 'moreInfoRight'>Git</p>
          <p className = 'moreInfoRight'>Microsoft Office</p>
          <p className = 'moreInfoRight'>Google Docs</p>
          <p className = 'moreInfoRight'>Hindi (conversational)</p>
          <p id = 'accomplishments' className = 'sideTitle'>Accomplishments</p>
          <p className = 'moreInfoRight'>National Science Foundation Graduate Research Fellowship</p>
          <p className = 'moreInfoRight'>Department of Education Foreign Language Area Scholarships</p>
          <p className = 'moreInfoRight'>Graduate Record Examinations (GRE) 96th percentile nationally in both verbal reasoning and analytical writing</p>
        </div>
      </div> 
    </div>
  );
}

export default Resume;
