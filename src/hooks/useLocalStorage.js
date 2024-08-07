import { useEffect, useState } from "react"

function useLocalStorege(key,fallback){
    const [val, setVal]=useState(
    JSON.parse(localStorage.getItem(key))??fallback
);
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(val));
        
    },[key,val]);
    return[val,setVal]
};

export{useLocalStorege};

