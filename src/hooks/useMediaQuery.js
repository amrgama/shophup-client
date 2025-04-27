
import { useState } from 'react'

const useMediaQuery = (query) => {
  
    const matchQueryList = window.matchMedia(query);
    const [matches, setMatches] = useState(matchQueryList.matches);

    function handleChange(e) {
        // console.log("ee: ", e)
        setMatches(e.matches);
    }
    matchQueryList.addEventListener("change", handleChange);
    
    // console.log("matches inside hook: ", matches, "matchQueryList: ", matchQueryList);

    return matches;
}

export default useMediaQuery