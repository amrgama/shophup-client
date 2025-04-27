import React, { useEffect, useRef, useState } from 'react'
import QuantityInput from '../../UI-kits/inputs/QuantityInput';
import ActionButton from '../../UI-kits/ActionButton';
import DeleteRowButton from './DeleteRowButton';
import { combineWithBaseURL } from '../../../helper/helper.js';

const Row = ({index, data, setData, extraClasses}) => {
    const className = `${extraClasses ?? ""}`;
    const [rowData, setRowData] = useState(data);
    const rowRef = useRef();

    const handleQuantity = (value)=>{
        setRowData({...rowData, Qty: value})
    }

    const deleteRow = ()=>{
        rowRef.current.remove();
    }

    useEffect(()=>{
        console.log("rowData: ", rowData);
    }, [rowData])

    return(
        <tr ref={rowRef} id={`row-${index}`} className={className}>
            <td scope="col" className='product align-middle'>
                <div className="d-flex align-items-center gap-3 py-2">
                    <img 
                        src={combineWithBaseURL(rowData.product.image)} 
                        alt={rowData.product.title} 
                        style={{width: "50px", height: "50px"}} 
                    />
                    <span>{data.product.title}</span>
                </div>
            </td>
            <td scope="col" className='price align-middle'>${rowData.product.price}</td>
            <td scope="col" className='quantity align-middle'>
                <QuantityInput cb={handleQuantity} min={1} max={10} />
            </td>
            <td scope="col" className="total align-middle">${rowData.product.price * rowData.Qty}</td>
            <td scope="col" className="action align-middle">
                <div className="d-flex">
                    <DeleteRowButton rowId={`row-${index}`} onClick={deleteRow} />
                </div>
                {/* <ActionButton icon={} /> */}
            </td>
        </tr>
    )
}

export default Row