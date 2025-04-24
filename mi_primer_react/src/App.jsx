import { animals } from './animals'; // deestructurando el objeto export para tener animals
import ocean from './assets/ocean.jpg';
function displayFact(e){
  const animalName = e.target.alt;
  const fact = animals[animalName].facts;
  const funFact = fact[Math.floor(Math.random() * fact.length)];
  document.getElementById("fact").innerHTML = funFact;
};

function App() {
  
  const background =
  <img
    className="background"
    alt="ocean"
    src={ ocean }/>;

  let images = [];
  const title = "";
  for (const animal in animals){
    images.push(
    <img
    key= {animal}
    className= 'animal'
    alt= {animal}
    src= {animals[animal].image}
    aria-label= {animal}
    role= 'button'
    onClick={displayFact}/>
    );

  }

  const showBackground = true;
  const animalFacts = (
    <div>
      { showBackground && background}
      <p id="fact"></p>
      <div className="animals">
        { images }
      </div>
      <h1>
      { title !== "" ? title:  "Click an animal for a fun fact" }
      </h1>

    </div>
    
  );
  return animalFacts;
}

export default App;
