import './Profile.css';


function Profile() { 
  return ( 
    <div> 
      <p className = 'profileText'>I am intelligent, educated, and experienced. My intelligence is attested by the Graduate Record Examinations (GRE): I placed in the 96th percentile nationally in the US in both the subjects of verbal reasoning and analytical writing - that is the top four percent. My education is evidenced by my BA and MA degrees and a coding certificate which I received from the University of Texas at Austin (UT); a world-class university, UT was recently ranked 43rd among universities globally and 23rd in the nation. Furthermore, only 13% of citizens in the US have a Master’s degree or higher.</p>
      <p id = 'lastText' className = 'profileText'>In terms of work experience, the two titles I have had are Research and Machine Intelligence Analyst and also Research Engineering Scientist Associate. From the titles, it is clear that my work experience is in STEM subjects which is a passion of mine. As an analyst, I analyzed machine intelligence responses to user prompts and created improvements which the machine was then trained on. As an engineering scientist, I performed both manual and automated testing of software, and I wrote the automated tests in Cypress. Both experiences gave me insight into working in the STEM fields and prepared me for further related work.</p>
    </div>
  );
}

export default Profile;
