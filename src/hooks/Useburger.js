import { useEffect, useState } from "react"

const Useburger=()=>
{
const [burgers,setBurgers]=useState([])
useEffect(()=>{
    fetch('http://localhost:5000/service')
    .then(response=>response.json())
    .then(data=>setBurgers(data))
},[])
return [burgers,setBurgers]


}
export default Useburger;