{edgeIndexes.map((edgeIndex) => (
    <InputEdge id={edgeIndex} onChange={onChange} edgesString={edgesString} edgeIndex={edgeIndex} graph={graph}/>
  ) )}

  
  const [graph, setGraph] = useState([
    {
      edgeIndex = 1,
      node1 = -1,
      node2 = -1,
      weight = 1,
    },
    {
      edgeIndex = 2,
      node1 = -1,
      node2 = -1,
      weight = 1,
    },
    {
      edgeIndex = 3,
      node1 = -1,
      node2 = -1,
      weight = 1,
    }
  ])



  const onChange = (e, edgeIndex) => {
    setGraph(graph.filter((graph) => {
      graph.edgeIndex !== edgeIndex && e.target.value
    }))
  }

  const onSubmit = (e => {
    e.preventDefault()

    if(!edgesString) {
        alert('Please add a task') // creates a popup alert
        return
    }
    setEdges(Array.from(edgesString))
    console.log(edges)
    setEdgesString('')
  })

  onclick value!== ""


  <div className="form-control">
          <label>Number of nodes</label>
          <input type="range"></input>
        </div>


const [edges, setEdges] = useState(
    [[0,1,0.7], [2,3,5], [3,0,4.5], [2,0,2.2], [0,3,2.5]]
  )

  
  const [numEdges, setNumEdges]  = useState(4);

  const [edgesString, setEdgesString] = useState('')

//  const onChange = (e => {
//    console.log(edges)
//    console.log(edgesString)
//    const newEdgesString = e.target.value;
//    setEdgesString(newEdgesString)
//  })




  // convert string to array

  const [edgeIndexes, setEdgeIndexes] = useState([1, 2, 3]);
  const handleAddEdge = () => {
    setNumEdges(numEdges + 1);
    setEdgeIndexes([...edgeIndexes, numEdges]);
  }
  console.log(edgeIndexes);

  
  <AddEdgeButton onAdd={handleAddEdge}/>

  <input type="text" onChange={(e) => (handleValueChange)}></input>


  <div>
      <input type='submit' value='Calculate maxcut' className='btn theme' onClick={handleClick} />
  </div>

axios.post("https://localhost:5000/qaoa")
// axios.post("https://sentiment-backend.herokuapp.com/sentiment", {"sentence": value})
.then((response) => {
  console.log(response);
  setRes(response.data.maxcut)
  // setRes(response.data.sentiment)
})
.catch((err) => {
  console.log(err);
  setRes("Error");
});

const handleClick = () => {
    if(true){
      try {
        const Response = axios.get('https://localhost:5000/qaoa');
        console.log("http response = " + Response.data.maxcut);
        setRes(Response.data.maxcut);
      } catch (ex) {
        console.log("error.status:", ex);
        setRes('error');
      }

    }
  }

  const handleClick = () => {
    if(true){
      try {
        const Response = axios.post('https://sentiment-backend.herokuapp.com/sentiment', {"sentence": value});
        console.log("http response = " + Response.data.sentence);
        setRes(Response.data.sentence);
      } catch (ex) {
        console.log("error.status:", ex);
        setRes('error');
      }

    }
  }