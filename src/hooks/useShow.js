import { useEffect, useState } from 'react'

export const useShow = (targetEle, defaultValue= false) => {
    const [show, setShow] = useState(defaultValue);

    useEffect(()=>{
        window.addEventListener("click", hide)
    
        return ()=> window.removeEventListener("click", hide)
    },[show])
    
    function handleShowOnClick(){
        setShow(prev => !prev)
    }

    function hide(e){
        if(e.target !== targetEle && !targetEle?.contains(e.target)){
            setShow(false)
        }
    }

    return {
        handleShowOnClick,
        show
    }
}
