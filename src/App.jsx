import reactImg from "./assets/react-core-concepts.png";
import {CORE_CONCEPTS} from "./data.js";

const okay = ["Fundamental", "Core","Crucial"]
function tap(max){
  return Math.floor(Math.random() * (max + 1) )
}
function Header(){
  return (
<header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {okay[tap(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}
function Coreconcept(props){
  return(
    <li>
    <img src={props.image} alt={props.title}/>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    </li>
  );
}
function TabButton(prop){
return(
<li><button>{prop.children}</button></li>
);
}


function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <Coreconcept title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}/>
          <Coreconcept title={CORE_CONCEPTS[1].title}
          description={CORE_CONCEPTS[1].description}
          image={CORE_CONCEPTS[1].image}/>
          <Coreconcept title={CORE_CONCEPTS[2].title}
          description={CORE_CONCEPTS[2].description}
          image={CORE_CONCEPTS[2].image}/>
          <Coreconcept title={CORE_CONCEPTS[3].title}
          description={CORE_CONCEPTS[3].description}
          image={CORE_CONCEPTS[3].image}/>
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
      <TabButton>Component</TabButton>
      <TabButton>Jsx</TabButton>
      <TabButton>Props</TabButton>
      <TabButton>State</TabButton>
        </menu>
      </section>
    </div>
  );
}

export default App;
