import './Tests.css';


function Tests() {
  return (
    <div>
      <h1>Percentile Rankings on National and State Tests</h1>
      <p>Here are my rankings...</p>
      
      <h2>The Stanford Test</h2>
      <p>The Stanford Test...</p>
      <img 
        id = 'stanfordTest' 
        className = '' 
        src = {require('./stanford.png')}
      />
      
      <h2>The RISD Test</h2>
      <p>The Stanford Test...</p>
      <img 
        id = 'risdTest' 
        className = '' 
        src = {require('./risd.jpeg')}
      />

      <h2>The Iowa Test</h2>
        <p>The Stanford Test...</p>
        <img 
          id = 'iowaTest' 
          className = '' 
          src = {require('./iowa.jpeg')}
        />

      <h2>TAAS Test 1996</h2>
        <p>The Stanford Test...</p>
        <img 
          id = 'taasOne' 
          className = '' 
          src = {require('./taasOne.jpeg')}
        />

      <h2>TAAS Test 2001</h2>
        <p>The Stanford Test...</p>
        <img 
          id = 'taasTwo' 
          className = '' 
          src = {require('./taasTwo.jpeg')}
        />

      <h2>The GRE</h2>
        <p>The Stanford Test...</p>
        <img 
          id = 'gre' 
          className = '' 
          src = {require('./gre.jpeg')}
        />
    </div> 
  );
}

export default Tests;
