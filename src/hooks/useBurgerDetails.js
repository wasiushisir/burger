import { useEffect, useState } from "react";

const useBurgerDetails=(burgerId)=>
{
    const [burger,setBurgerDtails]=useState({});
    useEffect(()=>{
        const url=`http://localhost:5000/service/${burgerId}`;
        
         fetch(url)
        .then(response=>response.json())
        .then(data=>setBurgerDtails(data))
    },[burgerId])

    return[burger]
}

export default useBurgerDetails; 