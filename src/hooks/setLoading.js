import { useState, useEffect } from "react";

const useLoading = (param) => {
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        if(param === null || param === undefined || param.length === 0)
        { setLoading(true) }
        else{setLoading(false)}
    }, [param])

    return loading
}

export default useLoading