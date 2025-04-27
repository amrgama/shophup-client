import { useEffect, useState } from "react";

const useFetch= (defaultMethod= "get", defaultApiConfig= {}) =>{
    const [response, setResponse]= useState(null);
    const [isIdel, setIsIdel]= useState(true);
    const [isLoading, setIsLoading]= useState(false);
    const [isSuccess, setIsSuccess]= useState(false);
    const [isError, setIsError]= useState(false);
    const [errorMsg, setErrorMsg]= useState("");

    async function callApi(url, apiConfig= defaultApiConfig){

        if(!!!url){
            throw new Error("You must pass url");
        }

        try{
            
            setIsIdel(false);
            setIsLoading(true);
            const res = await fetch(url, {
                ...apiConfig
            })
            console.log("res", res)
            if(!res.ok){
                throw res.json();
            }
            const data = await res.json();
            setResponse(data)
            setIsLoading(false);
            setIsSuccess(true);
        }
        catch(err){
            console.log("error in useFetch", err)
            setIsError(true);
            setErrorMsg(err);
            console.log("error in usefetch", err)
        }
    }

    return {
        callApi,
        isIdel,
        isLoading,
        isSuccess,
        isError,
        response,
        errorMsg
    }
}

export default useFetch;