import { Link } from "react-router-dom";
import { getDogs } from "./apiManager.js";
import { useEffect, useState } from "react";

export const Dogs = () => {
    const [dogs, setDogs] = useState([]);
    useEffect(() => {
        getDogs()
        .then(setDogs)
      }, [])
    
    
    return <><h2>Dogs</h2>
    {
        dogs.map(d => {
            return <li>
                <Link to={`/dogs/${d.id}`}>{d.name}</Link>
            </li>
        })
    }</>
}