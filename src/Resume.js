import './Resume.css';


function Resume() {
  return (
    <div>
      <div id = 'resumeContainer'>
        <div id = 'resumeLeft'>
          <div id = 'experience'> 
            <p className = 'sideTitle'>Experience</p>
            <p className = "title">Information Processing Specialist for Tata Consultancy Services at Apple, 2024</p>
            <p className = 'title'>Hindi Teacher for Preply, 2024</p>
            <p className = 'title'>Project Coordinator for ADU Geeks, 2023</p>
            <p className = 'title'>Research Engineering Scientist Associate I for Applied Research Laboratories (ARL) at The University of Texas at Austin (UT Austin), 2021</p>
          </div>

          <div id="education" className = 'edStint'>
            <p className = 'sideTitle'>Education</p>
            <p className = 'school'>Google Project Management Certificate, 2023</p>
          </div>

          <div className = 'edStint'>
            <p className = 'school'>Coding Boot Camp Certificate, UT Austin, 2021</p>
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
          <p className = 'moreInfoRight'>Google Workspace</p>
          <p className = 'moreInfoRight'>Microsoft Office</p>
          <p className = 'moreInfoRight'>Hindi (conversational)</p>
          
          <p id = 'accomplishments' className = 'sideTitle'>Accomplishments</p>
          <p className = 'moreInfoRight'>MA Report Co-Supervised by the Director of the Hindi Urdu Flagship at UT Austin, 2014</p>
          <p className = 'moreInfoRight'>U.S. National Science Foundation (NSF) Graduate Research Fellowship, 2013</p>
          <p className = 'moreInfoRight'>Foreign Language and Area Studies (FLAS) Fellowship from The South Asia Institute at UT Austin, 2013</p>

        </div>
      </div>

      <p id = "testingProfileTitle" className = 'sideTitle'>Testing Profile</p>
      
      <h3>Norm-referenced tests</h3>

      <div id = "tableContainer">

        <table>
          <thead>
            <tr>
              <th>Test</th>
              <th>Year</th>
              <th>Grade</th>
              <th>Age</th>
              <th>Subject</th>
              <th>National Percentile Rank</th>
              <th>Grade Equivalence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="8" className="test-name">Stanford Early School Achievement Test (SESAT)</td>
              <td rowSpan="8">1992</td>
              <td rowSpan="8">K</td>
              <td rowSpan="8">5</td>
              <td>Environment</td>
              <td>99</td>
              <td>3.5</td>
            </tr>
            <tr><td>Reading</td><td>97</td><td>1.2</td></tr>
            <tr><td>Math</td><td>95</td><td>1.2</td></tr>
            <tr><td>Listening</td><td>95</td><td>2.0</td></tr>
            <tr className="summary-row"><td>Basic Battery</td><td>98</td><td>1.2</td></tr>
            <tr className="summary-row"><td>Complete Battery</td><td>98</td><td>1.3</td></tr>
            
          </tbody>

          <tbody>
            <tr>
              <td rowSpan="4" className="test-name">Metropolitan Readiness Tests (MRT)</td>
              <td rowSpan="4">1993</td>
              <td rowSpan="4">K</td>
              <td rowSpan="4">6</td>
              <td>Visual</td>
              <td>92</td>
              <td rowSpan="4" className="note">Not available</td>
            </tr>
            <tr><td>Language</td><td>97</td></tr>
            <tr className="summary-row"><td>Composite (with other subjects not listed)</td><td>95</td></tr>
          
          </tbody>

          <tbody>

            <tr>
              <td rowSpan="4" className="test-name">Iowa Test of Basic Skills (ITBS)</td>
              <td rowSpan="4">1995</td>
              <td rowSpan="4">2</td>
              <td rowSpan="4">8</td>
              <td>Reading Total</td>
              <td>92</td>
              <td rowSpan="4" className="note">Not available</td>
            </tr>
            <tr><td>Math Total</td><td>92</td></tr>

          </tbody>

          <tbody>

            <tr>
              <td rowSpan="5" className="test-name">ITBS</td>
              <td rowSpan="5">1996</td>
              <td rowSpan="5">3</td>
              <td rowSpan="5">9</td>
              <td>Advanced Math</td>
              <td>99</td>
              <td rowSpan="6" className="note">Not available</td>
            </tr>
            <tr><td>Math Total</td><td>99</td></tr>
            <tr><td>Advanced Reading</td><td>99</td></tr>
            <tr><td>Reading Total</td><td>97</td></tr>
              
          </tbody>
        </table>

      </div>

      <h2 className = "testTitle"><b>Graduate Record Examinations</b> (GRE): taken in 2009 at age 22</h2>

      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Percentile Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="test-name">Verbal Reasoning</td>
            <td>96</td>          
          </tr>
          <tr>
            <td className="test-name">Analytical Writing</td>
            <td>96</td>
          </tr>
        </tbody>
      </table>


      <h3>Criterion-referenced tests</h3>

      <h2 className = "testTitle">Texas Assessment of Academic Skills (TAAS)</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Grade</th>
            <th>Age</th>
            <th>Subject</th>
            <th>Items Corrent / Number of Items</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="8">1996</td>
            <td rowSpan="8">3</td>
            <td rowSpan="8">9</td>
          </tr>
          <tr><td>Reading</td><td>36 / 36</td></tr>
          <tr><td>Mathematics</td><td>42 / 44</td></tr>
        </tbody>
        <tbody>
          <tr>
            <td rowSpan="8">2001</td>
            <td rowSpan="8">8</td>
            <td rowSpan="8">14</td>
          </tr>
          <tr><td>Reading</td><td>47 / 48</td></tr>
          <tr><td>Mathematics</td><td>59 / 60</td></tr>
          <tr><td>Science</td><td>39 / 40</td></tr>
          <tr><td>Writing</td><td>38 / 40</td></tr>
        </tbody>
      </table>


      
      <p id = 'accomplishments' className = 'sideTitle'>Profile in Science, Technology, Engineering, and Mathematics (STEM)</p>
      <p className = "profileItem">Milestones: 
        <ul>
          <li className = 'stemItem'>Professional roles as a GIS Analyst and a Research Engineering Scientist</li>
          
          <li className = 'stemItem'><a className = 'milestone' id = 'mediumLink' href = "https://medium.com/@colinpace1987" target="_blank">My Medium blog</a> about the natural sciences</li>
          
          <li className = 'stemItem'><a href="https://colin-pace.github.io/AlgorithmsAndPrograms/static/media/aap.33df4dc1ef27def7ed4e.pdf" target="_blank" className = 'milestone' id = "bookLink">Algorithms and Programs</a>, a book I wrote about coding</li>
          
        </ul>
      </p>
        
        <p className = "profileItem">Courses I took in natural science at The University of Texas at Austin:</p>
        <ul>
          <li className = 'stemItem'>Ecology, Evolution, and Society</li>
          <li className = 'stemItem'>Introduction to Astronomy</li>
          <li className = 'stemItem'>Galaxies, Quasars, and the Universe</li>
        </ul>
       
        <p className = "profileItem" id = "mathCourses">Courses in mathematics at university:</p>
        <ul id = "mathCourseList">
          <li className = 'stemItem'>Credit for Introduction to Probability and Statistics at The University of North Texas from an Advanced Placement score </li>
          <li className = 'stemItem'>College Algebra at The University of North Texas</li>
          <li className = 'stemItem'>Elementary Functions and Coordinate Geometry (pre-calculus) at The University of Texas at Austin</li>
        </ul>
    </div> 
  );
}
  
export default Resume;
