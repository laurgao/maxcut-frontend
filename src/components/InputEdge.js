import React from 'react'

function InputEdge( {handleChange, edgeIndex, edges} ) {
    return (
        <div className="form-control-2">
        <label class='edge-header'>Edge {edgeIndex}</label>

        <div class="form-item">
          <input 
          type="text" 
          placeholder='1'
          value={edges && edges[edgeIndex-1] && edges[edgeIndex-1][0] ? edges[edgeIndex-1][0] : null} 
          onChange={(event) => handleChange(edgeIndex, 0, event)}
          ></input>
          <label>Node 1</label>
        </div>
        
        <div class="form-item">
          <input 
            type="text" 
            placeholder='2'
            value={edges && edges[edgeIndex-1] && edges[edgeIndex-1][1] ? edges[edgeIndex-1][1] : null} 
            onChange={(event) => (handleChange(edgeIndex, 1, event))}
          ></input>
          <label>Node 2</label>
        </div>
        
        <div class="form-item">
          <input 
          type="text" 
          placeholder='0.7'
          value={edges && edges[edgeIndex-1] && edges[edgeIndex-1][2]} 
          onChange={(event) => (handleChange(edgeIndex, 2, event))}
          ></input>
          <label>Weight (optional)</label>
        </div>
      </div>
    )
}

export default InputEdge
