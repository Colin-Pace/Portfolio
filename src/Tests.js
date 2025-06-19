import './Tests.css';


function Tests() {
  return (
    <div id = "testSection">
      <h1>IQ, Aptitude, and Achievement Tests</h1>
      <p>Throughout my life, I have placed well on tests. Here is an IQ, an aptitude, and at least 12 achievement tests. The tests are mostly subject tests, rather than composite tests. On almost all types of tests, I placed in the 95th percentile or higher. I have at least 6 placements in the 99th percentile and 8 placements in the 95th-98th percentiles. The format of the list is the test name, my percentile rankings on it, and my age during the test. After the tests is a <a href = "#societies">list</a> of the societies I've joined.
        <ol>
          <li><a href = "#testSevenTitle">Lexiq, IQ 172 (99.9999th percentile), age 37</a></li>
          <li><a href = "#testSixTitle">The Graduate Record Examinations, 96th+ (verbal reasoning) and 96th+ (analytical writing) percentile, age 22</a></li>
          <li><a href = "#testFiveTitle">The Texas Assessment of Academic Skills, 99th* (reading), 98th* (mathematics), and 99th* (science) percentiles, age 14</a></li>
          <li><a href = "#testFourTitle">The Texas Assessment of Academic Skills, 99th* (reading) and 97th* (mathematics) percentiles, age 9</a></li>
          <li><a href = "#testThreeTitle">The Iowa Tests of Basic Skills, 99th (advanced mathematics), 99th (mathematics), 99th (advanced reading), 97th (reading) percentiles, age 9</a></li>
          <li><a href = "#testTwoTitle">The Metropolitan Readiness Tests, 95th percentile (composite), age 6</a></li>
          <li><a href = "#testOneTitle">The Stanford Early School Achievement Test, 98th percentile (composite), age 5</a></li>
        </ol>
      Key: * denotes ChatGPT's estimation percentile based on the test result form, and + denotes a likely higher percentile by age range.
      </p>

        <h2 id = "testSixTitle">The Graduate Record Examinations (GRE) 2009</h2>
          <ul>
            <li><b>96th+ percentile in verbal reasoning</b></li>
            <li><b>96th+ percentile in analytical writing</b></li>
          </ul>
          <p>The GRE was an interesting test for me for a number of reasons. It's the first aptitude test that I took. Also, I didn't study or try on the mathematics section, which is why I received a much lower placement. Perhaps most noteworthy after the two 96th percentile placements in verbal reasoning and analytical writing is the age at which I tested: 22. According to Kaplan, today, the average test taker is 24 years old, with 50% of test takers older than 22. If this was true when I took the test, then for my age range, I probably placed higher, perhaps even again in the top percentile for both categories. The testing service, the Educational Testing Service (ETS), doesn't give statistics, so the status of the percentiles remains unclear.</p>
          <img 
            id = 'gre' 
            className = '' 
            src = {require('./gre.jpeg')}
          />

        <h2 id = "testFiveTitle">The Texas (TAAS) Test 2001</h2>
          <ul>
            <li><b>99th* percentile in reading</b></li>
            <li><b>98th* prcentile in mathematics</b></li>
            <li><b>99th* percentile in science</b></li>
          </ul>
          <p>The last achievement tests I took, the TAAS tests were good tests for me. ChatGPT estimated all the TAAS percentiles displayed. I placed well on the TAAS test in reading and science. The mathematics percentile is also good.</p>
          <img 
            id = 'taasTwo' 
            className = '' 
            src = {require('./taasTwo.jpeg')}
          />
          <img 
            id = 'science' 
            className = '' 
            src = {require('./science.jpeg')}
          />


        <h2 id = "testFourTitle">The Texas (TAAS) Test 1996</h2>
          <ul>
            <li><b>99th* percentile in reading</b></li>
            <li><b>97th* percentile in mathematics</b></li>
          </ul>
          <p>I'm unsure how to interpret these results. 3-94 appears to be the maximum score possible (possibly the first time I answered every qusetion correctly on an achievement test), and ChatGPT estimates that the score places me in the 99th percentile. The 3-89 is less strong, but, again, it is still a strong score and has a strong percentile.</p>
          <img 
            id = 'taasOne' 
            className = '' 
            src = {require('./taasOne.jpeg')}
          />

        <h2 id = "testThreeTitle">The Iowa Test 1996</h2>
          <ul>
            <li><b>99th percentile in advanced mathematics</b></li>
            <li><b>99th percentile in mathematics</b></li>
            <li><b>99th percentile in advanced reading</b></li>
            <li><b>97th percentile in reading</b></li>
          </ul>
          <p>The Iowa Test is the second time I placed in the top percentile, and here I netted three such placements. The total reading score is also good.</p>
          <img 
            id = 'iowaTest' 
            className = '' 
            src = {require('./iowa.jpeg')}
          />

        <h2 id = "testTwoTitle">The Metropolitan Test 1993</h2>
          <ul>
            <li><b>95th percentile in a composite score</b></li>
          </ul>
          <p>At age 6, I took the Metropolitan Test. I did less well on the Metropolitan Test than I did on the others, but I still did well on the Metrpolitan Test. I am proud of this ranking.</p>
          <img 
            id = 'risdTest' 
            className = '' 
            src = {require('./risd.jpeg')}
          />
        
        <h2 id = "testOneTitle">The Stanford Test 1992</h2>
          <ul>
            <li><b>98th percentile in a composite score</b></li>
          </ul>
          <p>My first achievement, I placed in the 98th percentile on the Stanford Test at age 5. With more than 205 questions, the Stanford Test assessed reading, mathematics, and some other topics. It was the first time I placed in the 99th percentile in one of the test's categories.</p>
          <img 
            id = 'stanfordTest' 
            className = '' 
            src = {require('./stanford.png')}
          />
      
      <h1 id = "societies">Societies</h1>
      <ol id = "societiesList">
          <li><a 
            href = "https://psiq6.com/"
            target = "_blank">PSIQ6</a>: A mega high IQ community
          </li>
          <li><a 
            href = "https://psiq.org/home.html"
            target = "_blank">World Genius Directory</a>: A list of geniuses from around the world
          </li>
          <li><a 
            href = "https://cprobusinessva.wixsite.com/lits"
            target = "_blank">The Literarians</a>: A literary society for gifted people
          </li>
        </ol>
    </div> 
  );
}

export default Tests;
