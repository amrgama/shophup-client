import React from 'react'

const Accordian = ({index, title, children}) => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button fs-5 bg-white" type="button" data-bs-toggle="collapse" data-bs-target={`collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                    {title}
                </button>
            </h2>
            <div id={`collapse${index}`} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body text-start">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Accordian