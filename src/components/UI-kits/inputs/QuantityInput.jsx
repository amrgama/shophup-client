import React, { useEffect, useState } from 'react'
import MinusButton from '../buttons/MinusButton';
import PlusButton from '../buttons/PlusButton';

const QuantityInput = ({cb, min, max, shap, extraClasses}) => {
    const className = `countity w-100 d-flex align-items-center bg-white rounded-pill mt-auto ${extraClasses ?? ""}`
    const [value, setValue] = useState(min ?? 1);

    useEffect(()=>{
        cb(value);
    }, [value, setValue])

    return (
        <div className={className}>
            <MinusButton
                setValue={setValue} 
                disable={value === min}
                extraClasses={getShapClass(shap)}
            />
            <hr 
                className='col m-auto'
                style={{minWidth: "12px"}}
            />
            <span className="fw-500 text-dark mx-2">{value}</span>
            <hr 
                className='col m-auto'
                style={{minWidth: "12px"}}
            />
            <PlusButton 
                setValue={setValue} 
                disable={value === max} 
                extraClasses={getShapClass(shap)}
            />
        </div>
    )
}

function getShapClass(shap){
    switch(shap){
        case "pill": 
            return "rounded-pill";
        case "circle":
            return "rounded-circle";
        default:
            return "rounded-1";
    }
}

export default QuantityInput