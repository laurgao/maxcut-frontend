import './App.css';
import {useState} from 'react'
import InputEdge from './components/InputEdge';
import AddEdgeButton from './components/AddEdgeButton';
import axios from 'axios';
import { Input } from 'semantic-ui-react';

function App() {
  const [value, setValue] = useState("");
  const [res, setRes] = useState("")

  const handleClick =  () => {
    setRes("Training... do not exit this page.");
    onSubmit();
  }

  const onSubmit = async () => {
    axios.post("http://localhost:5000/qaoa", {"edges": value})
    .then((response) => {
      console.log(response);
      setRes(response.data.maxcut)
    })
    .catch((err) => {
      console.log(err);
      setRes("Error");
    });
  }

  const handleValueChange = (e) => {
    setValue(e.target.value);
    console.log(value)
  }

  return (
    <div className="App">
      <header>
        <h1>Calculate the maximum cut with a <span className="theme">quantum computer</span></h1>
      </header>
      <form>
        <input type="text" onChange={handleValueChange}></input>
      </form>
      <button className="btn theme" onClick={handleClick}>Calculate maxcut!</button>

      <p>{res}</p>
    </div>
  );
}

export default App;
