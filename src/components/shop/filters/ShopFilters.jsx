import React, { useEffect, useRef, useState } from 'react'
import ShopFiltersSM from './ShopFiltersSM'
import useMediaQuery from '../../../hooks/useMediaQuery'
import ShopFiltersLG from './ShopFiltersLG';

const ShopFilters = () => {
    
    const isMatchesLG = useMediaQuery("only screen and (min-width: 992px)");
    const [matchesLG, setMatchesLG] = useState(isMatchesLG);

    useEffect(()=>{

        setMatchesLG(isMatchesLG);
    }, [isMatchesLG, setMatchesLG])

    return(
        (matchesLG)?
            <ShopFiltersLG />
        :
            <ShopFiltersSM />
    )
}

export default ShopFilters