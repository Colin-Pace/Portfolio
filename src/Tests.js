import './Tests.css';


function Tests() {
  return (
    <div id = "testSection">
      <h1>Percentile Rankings on National and State Tests</h1>
      <p>Throughout my early and young-adult life, I placed well on standardized tests. Here are six tests in which I placed in the 95th percentile or higher. Most of the tests are marked by their sections, and on the sections, I have 5-10 placements in the 99th percentile and then 3-8 placements in the 95th-98th percentiles. The format of the list is the test name, my percentile rankings on it, and my age during the test.
        <ol>
          <li><a href = "#testOneTitle">The Stanford Early School Achievement Test, 98th percentile (composite), age 5</a></li>
          <li><a href = "#testTwoTitle">The Metropolitan Readiness Tests, 95th percentile (composite), age 6</a></li>
          <li><a href = "#testThreeTitle">The Iowa Tests of Basic Skills, 99th (advanced mathematics), 99th (mathematics), 99th (advanced reading), 97th (reading) percentiles, age 9</a></li>
          <li><a href = "#testFourTitle">The Texas Assessment of Academic Skills, 99th* (reading) and 97th* (mathematics) percentiles, age 9</a></li>
          <li><a href = "#testFiveTitle">The Texas Assessment of Academic Skills, 99th* (reading), 98th* (mathematics), and 99th* (science) percentiles, age 14</a></li>
          <li><a href = "#testSixTitle">The Graduate Record Examinations, 96th+ (verbal reasoning) and 96th+ (analytical writing) percentile, age 22</a></li>
        </ol>
      Key: * denotes ChatGPT's estimation percentile based on the test result form, and + denotes a likely higher percentile by age range.
      </p>
      
      <h2 id = "testOneTitle">The Stanford Test 1992</h2>
      <p><b>98th percentile (composite)</b>: My first achievement, I placed in the 98th percentile on the Stanford Test at age 5. With more than 205 questions, the Stanford Test assessed reading, mathematics, and some other topics.</p>
      <img 
        id = 'stanfordTest' 
        className = '' 
        src = {require('./stanford.png')}
      />
      
      <h2 id = "testTwoTitle">The Metropolitan Test 1993</h2>
      <p><b>95th percentile (composite)</b>: The following year, at age 6, I took the Metropolitan Test. I did less well on the Metropolitan Test than I did on the Stanford Test, but I still did well on the Metrpolitan Test. I am proud of this ranking.</p>
      <img 
        id = 'risdTest' 
        className = '' 
        src = {require('./risd.jpeg')}
      />

      <h2 id = "testThreeTitle">The Iowa Test 1996</h2>
        <p><b>99th (advanced mathematics), 99th (mathematics), 99th (advanced reading), 97th (reading) percentiles</b>: The Iowa Test is the first time I placed in the top percentile, and here I netted three such placements. The total reading score is also good.</p>
        <img 
          id = 'iowaTest' 
          className = '' 
          src = {require('./iowa.jpeg')}
        />

      <h2 id = "testFourTitle">The Texas (TAAS) Test 1996</h2>
        <p><b>99th* (reading) and 97th* (mathematics) percentiles</b>: I'm unsure how to interpret these results. 3-94 appears to be the maximum score possible (possibly the first time I answered every qusetion correctly), and ChatGPT estimated that the score places me in the 99th percentile. The 3-89 is less strong, but, again, still a strong score and percentile. ChatGPT estimated all the TAAS scores displayed.</p>
        <img 
          id = 'taasOne' 
          className = '' 
          src = {require('./taasOne.jpeg')}
        />

      <h2 id = "testFiveTitle">The Texas (TAAS) Test 2001</h2>
        <p><b>99th* (reading), 98th* (mathematics), and 99th* (science) percentiles</b>: ChatGPT thinks I did equally well in reading on the second TAAS test by percentile if not score. The mathematics percentile is also good.</p>
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

      <h2 id = "testSixTitle">The Graduate Record Examinations (GRE) 2009</h2>
        <p><b>96th+ (verbal reasoning) and 96th+ (analytical writing) percentiles</b>: The GRE was an interesting test for me for a number of reasons. It's the last standardized test that I took. Also, I didn't study or try on the mathematics section, which is why I received a much lower placement. Perhaps most noteworthy after the two 96th percentile placements in verbal reasoning and analytical writing is the age at which I tested: 22. Today, the average test taker is 24 years old, with 50% of test takers older than 22. If this was true when I took the test, then for my age range, I probably placed higher, perhaps even again in the top percentile for both categories. The testing service, ETS, doesn't give statistics, so the status of the percentiles remains unclear.</p>
        <img 
          id = 'gre' 
          className = '' 
          src = {require('./gre.jpeg')}
        />
    </div> 
  );
}

export default Tests;
