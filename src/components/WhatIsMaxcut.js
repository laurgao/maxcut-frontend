import React from 'react'

const WhatIsMaxcut = ({togglePopUp}) => {
    return (
        <div className="modal" onClick={togglePopUp}>
            <div className="modal_content">
                <span className="close" onClick={togglePopUp}>
                    &times;
                </span>
                <iframe src="https://postulate.us/@laura/p/2021-05-17-What-is-maxcut%3F-dYuqZASdgoG6cFjh1LTC9E" title="What is maxcut?"></iframe>
            </div>
        </div>
    )
}

export default WhatIsMaxcut
