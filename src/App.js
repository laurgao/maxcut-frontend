import './App.css';
import {useState} from 'react'
import InputEdge from './components/InputEdge';
import AddEdgeButton from './components/AddEdgeButton';
import axios from 'axios';
import Navbar from './components/Navbar';
import WhatIsMaxcut from './components/WhatIsMaxcut';
import HowToUse from './components/HowToUse';
import sampleGraphLabelledNodes from './img/sample-graph-labelled-nodes.PNG';

const templateEdge = [null, null, 1];

function App() {
  const [res, setRes] = useState("")
  const [edgeIndexes, setEdgeIndexes] = useState([1, 2, 3]);
  const [numEdges, setNumEdges]  = useState(4);
  const [edges, setEdges] = useState([[null, null, 1], [null, null, 1], [null, null, 1]]); // because useEffect doesnt work i'll just hard code it based on the intial humber of edges
  const [popUpMaxcut, setPopUpMaxcut] = useState(false);
  const [popUpUse, setPopUse] = useState(false);
  const [isSampleGraph, setIsSampleGraph] = useState(false);

  const togglePopUpMaxcut = () => {
    setPopUpMaxcut(!popUpMaxcut);
  }
  const togglePopUpUse = () => {
    setPopUse(!popUpUse);
  }

  const handleAddEdge = () => {
    setNumEdges(numEdges + 1);
    setEdgeIndexes([...edgeIndexes, numEdges]);
    setEdges ([...edges, templateEdge]);
  }

  const handleChange = (edgeIndex, vertexIndex, event) => {
    setIsSampleGraph(false);
    const edges1 = edges.map((edge, index) => {
      if (index===edgeIndex-1) {
        const vertices = edge.map((vertex, idx) => {
          return vertexIndex===idx ? event.target.value : vertex;
        })
        edge = vertices;
      }
    return edge;
    });
    setEdges(edges1);
    console.log(edges);
  }

const setSampleGraph = () => {
  setEdges([['0','1','0.7'], ['2','3','5'], ['2','0','2.2'], ['0','3','2.5']]);
  setNumEdges(5);
  setEdgeIndexes([1, 2, 3, 4]);
  setIsSampleGraph(true);
}

  const handleClick =  (e) => {
    e.preventDefault();
    setRes("Training... do not exit this page.");
    submit();
  }

  const submit = async () => {
    axios.post("http://maxcut-backend.herokuapp.com/qaoa", {"edges": edges})
    .then((response) => {
      console.log(response);
      setRes(response.data.maxcut)
    })
    .catch((err) => {
      console.log(err);
      setRes("Error");
    });
  }

  return (
    <div className="App">
      {popUpMaxcut && <WhatIsMaxcut togglePopUp={togglePopUpMaxcut}/>}
      {popUpUse && <HowToUse togglePopUp={togglePopUpUse}/>}
      <main>
        <Navbar togglePopUpMaxcut={togglePopUpMaxcut} togglePopUpUse={togglePopUpUse}/> 
        <header>
          <h1>Find the maxcut of any graph with a <span className="theme">quantum computer</span></h1>
          <p className="subtitle">The first webapp to run a quantum machine learning algorithm no-code</p>
        </header>
        {isSampleGraph && <img src={sampleGraphLabelledNodes} alt="Visual depiction of sample graph"/>}
        <form className="form form-control">
          {edgeIndexes.map((edgeIndex) => (
            <InputEdge id={edgeIndex} handleChange={handleChange} edges={edges} edgeIndex={edgeIndex}/>
          ) )}
        </form>
        <AddEdgeButton onAdd={handleAddEdge}/>
        <div className="buttons"> {// tailwind would be cool here, this clas will onlly ever be used once. 
  }
          <button className="btn regular regular2" onClick={setSampleGraph}>Sample graph</button>
          <button className="btn theme" onClick={(e) => handleClick(e)}>Calculate maxcut!</button>
        </div>
        <p>{res}</p>
      </main>

    </div>
  );
}

export default App;
