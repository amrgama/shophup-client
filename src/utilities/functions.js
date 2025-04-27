export const getUrl=(mode)=>{ 
    if(mode == "DEV") return "http://localhost:3600"; 
    return "https://shop-hub-api-production.up.railway.app";
}

export const combineWithBaseURL= (path)=>{
    path= path || "";
    console.log("import.meta.env.VITE_API_URL", getUrl(), ">>>path", path);
    if(path?.startsWith("/")){
    //    return import.meta.env.VITE_API_URL.concat(`${path}`);
    //    return getUrl().concat(`${path}`);
       return `${getUrl()}${path}`;
    }
    
    return `${getUrl()}/${path}`;
}