import { useRouteError } from "react-router-dom"
const Error = ()=>{
    const err = useRouteError();
    console.log(err);

    return(
        <>
        <h1>{err.status}</h1>
        <h2>{err.ststusText}</h2>
        </>
    )

}

export default Error;