import { useState, useEffect } from "react";
const useFetch = (url) =>{
    const[data, setData] = useState(null);
    const[IsPending , setIsPending ] = useState(true);
    const[Error , setError ] = useState(null);

    useEffect (() => {
        const abortcont = new AbortController();

        setTimeout(() => { 
        fetch(url, {signal:abortcont.signal})
            .then(res => {
                console.log(res);
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data =>{
            setData(data);
            setIsPending(false);
            setError(null);
            })
            .catch(err =>{
                if (err.name === 'AbortError') {
                    console.log('fetch Aborted');
                } 
                else {
                    setIsPending(false);
                    setError(err.message);    
                }
            })
        }, 1000);
        return () => abortcont.abort();
    },[url]);
return { data, IsPending, Error }
}
export default useFetch;