import './Resume.css';


function Resume() {
  return (
    <div>
      <div id = 'resumeContainer'>
        <div id = 'resumeLeft'>
          <div id = 'experience'>
            <p className = 'sideTitle'>Experience</p>
            <p className = "title">Information Processing Specialist - Tata Consultancy Services</p>
            {/* <p className = 'title'>Web Developer and Project Coordinator - Casa de Luz Foundation</p> */}
            <p className = 'title'>Hindi Teacher - Preply</p>
            <p className = 'title'>Project Coordinator - ADU Geeks</p>
            {/* <p className = 'title'>Estimator - Fabrick</p> */}
            <p className = 'title'>Research Engineering Scientist Associate I - Applied Research Laboratories</p>
          </div>

          <div id="education" className = 'edStint'>
            <p className = 'sideTitle'>Education</p>
            <p className = 'school'>Certificate in Project Management - Google</p>
          </div>

          <div className = 'edStint'>
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
          <p className = 'moreInfoRight'>Project Management</p>
          <p className = 'moreInfoRight'>Web Development</p>
          <p className = 'moreInfoRight'>Microsoft Office</p>
          <p className = 'moreInfoRight'>Google Docs, Sheets, Slides</p>
          <p className = 'moreInfoRight'>Hindi (conversational)</p>
          <p id = 'accomplishments' className = 'sideTitle'>Accomplishments</p>
          <p className = 'moreInfoRight'> IQ 172 (99.9999th percentile) on Lexiq</p>
          <p className = 'moreInfoRight'>6 placements in the 99th percentile and 8 placements in the 95th-98th percentiles on IQ, aptitude, and achievement tests</p>
          <p className = 'moreInfoRight'>National Science Foundation Graduate Research Fellowship</p>
          <p className = 'moreInfoRight'>Department of Education Foreign Language and Area Studies Fellowships</p>
        </div>
      </div> 
    </div> 
  );
}

export default Resume;
