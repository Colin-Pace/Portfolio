import './Resume.css';


function Resume() {
  return (
    <div>
      <div id = 'resumeContainer'>
        <div id = 'resumeLeft'>
          <div id = 'experience'>
            <p className = 'sideTitle'>Experience</p>
            <p className = "title">Information Processing Specialist for Tata Consultancy Services at Apple, 2024</p>
            <p className = 'title'>Hindi Teacher on Preply, 2024</p>
            <p className = 'title'>Project Coordinator for ADU Geeks, 2023</p>
            <p className = 'title'>Research Engineering Scientist Associate I, Applied Research Laboratories (ARL) at UT Austin, 2021</p>
          </div>

          <div id="education" className = 'edStint'>
            <p className = 'sideTitle'>Education</p>
            <p className = 'school'>Google Project Management Certificate, 2023</p>
          </div>

          <div className = 'edStint'>
            <p className = 'school'>Coding Boot Camp Certificate, The University of Texas at Austin, 2021</p>
          </div>

          <div className = 'edStint'>
            <p className = 'school'>Master of Arts, UT Austin, 2014</p>
          </div>

          <div className = 'edStint'>
            <p className = 'school'>Bachelor of Arts with Honors, UT Austin, 2011</p>
          </div>
        </div>
        <div id = 'resumeRight'>
          <p className = 'sideTitle'>Skills</p>
          <p className = 'moreInfoRight'>Geographic Information Systems (GIS)</p>
          <p className = 'moreInfoRight'>Project Management</p>
          <p className = 'moreInfoRight'>Web Development</p>
          <p className = 'moreInfoRight'>Google Docs, Sheets, Slides</p>
          <p className = 'moreInfoRight'>Microsoft Office</p>
          <p className = 'moreInfoRight'>Hindi (conversational)</p>
          <p id = 'accomplishments' className = 'sideTitle'>Accomplishments</p>
          <p className = 'moreInfoRight'>Co-Supervised MA Report by Director of the Hindi Urdu Flagship at UT Austin via the U.S. Department of Defense, 2014</p>
          <p className = 'moreInfoRight'>U.S. National Science Foundation (NSF) Graduate Research Fellowship, 2013</p>
          <p className = 'moreInfoRight'>Foreign Language and Area Studies (FLAS) Fellowship, South Asia Institute at UT Austin via the U.S. Department of Education, 2013s</p>
        </div>
      </div>

      <p id = "testingProfileTitle" className = 'sideTitle'>Testing Profile</p>
      <img 
        id = 'testingProfile' 
        src = {require('./TestingProfile.png')}
      />

      <p id = 'accomplishments' className = 'sideTitle'>Profile in STEM Education</p>
      <p>While my professional roles as a GIS Analyst and a Research Engineering Scientist attest to my technological and engineering competencies, my university-level coursework in the natural sciences and mathematics extends the arc of my STEM profile.</p>
      <p>Courses in Natural Science at The University of Texas at Austin:</p>
      <ul>
        <li className = 'stemItem'>Ecology, Evolution, and Society</li>
        <li className = 'stemItem'>Introduction to Astronomy</li>
        <li className = 'stemItem'>Galaxies, Quasars, and the Universe</li>
      </ul>
      <p id = "mathCourses">Courses in Mathematics:</p>
      <ul id = "mathCourseList">
        <li className = 'stemItem'>Credit for Introduction to Probability and Statistics at The University of North Texas from an Advanced Placement score </li>
        <li className = 'stemItem'>College Algebra at The University of North Texas</li>
        <li className = 'stemItem'>Elementary Functions and Coordinate Geometry (pre-calculus) at The University of Texas at Austin</li>
      </ul>
    </div> 
  );
}

export default Resume;
