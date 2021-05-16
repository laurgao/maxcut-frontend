import './App.css';
import {useState} from 'react'
import InputEdge from './components/InputEdge';
import AddEdgeButton from './components/AddEdgeButton';
import axios from 'axios';

const templateEdge = [1, 2, 0.7];

function App() {
  const [res, setRes] = useState("")
  const [edgeIndexes, setEdgeIndexes] = useState([1, 2, 3]);
  const [numEdges, setNumEdges]  = useState(4);
  const [edges, setEdges] = useState([[null, null, null], [null, null, null], [null, null, null]]); // because useEffect doesnt work i'll just hard code it based on the intial humber of edges

  const handleAddEdge = () => {
    setNumEdges(numEdges + 1);
    setEdgeIndexes([...edgeIndexes, numEdges]);
    setEdges ([...edges, templateEdge]);
  }

  const handleChange = (edgeIndex, vertexIndex, event) => {
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
  setEdges([[0,1,0.7],[2,3,5],[3,0,4.5], [2,0,2.2], [0,3,2.5]]);
  setNumEdges(6);
  setEdgeIndexes([1, 2, 3, 4, 5]);
}

  const handleClick =  (e) => {
    e.preventDefault();
    setRes("Training... do not exit this page.");
    submit();
  }

  const submit = async () => {
    axios.post("http://localhost:5000/qaoa", {"edges": edges})
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
      <header>
        <h1>Calculate the maximum cut with a <span className="theme">quantum computer</span></h1>
      </header>
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
    </div>
  );
}

export default App;
