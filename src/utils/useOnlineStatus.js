import { useEffect, useState } from "react"

const useOnlineStatus = () =>{
    const [status, setStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener('online', ()=>{
            if(status == false){
                setStatus(true);
            }
        })
    
        window.addEventListener('offline', ()=>{
            if(status == true){
                setStatus(false);
            }
        })
    }, [])

    return status;
}

export default useOnlineStatus;