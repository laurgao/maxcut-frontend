import React from 'react'
import { FaPlus } from 'react-icons/fa'

function AddEdgeButton({onAdd, edgeIndex}) {
    return (
        <div style={{display:'flex', opacity: 0.3}} className='btn-3' onClick={onAdd}>
            <FaPlus/>
            <p style={{marginLeft:'10px', marginTop:'-2px' }}>Add edge (n)</p>
        </div>
    )
}

export default AddEdgeButton
