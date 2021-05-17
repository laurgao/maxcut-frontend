import React from 'react'

const HowToUse = ({togglePopUp}) => {
    return (
        <div className="modal" onClick={togglePopUp}>
            <div className="modal_content">
                <span className="close" onClick={togglePopUp}>
                    &times;
                </span>
                <iframe src="https://postulate.us/@laura/p/2021-05-17-How-to-use-this-webapp-jAkZGnrMFsciDeukX3R2oz" title="What is maxcut?"></iframe>
            </div>
        </div>
    )
}

export default HowToUse