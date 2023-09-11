import { Link, useNavigate } from "react-router-dom";
import { getDogs } from "../apiManager.js";
import { useEffect, useState } from "react";

export const Dogs = () => {

    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        getDogs()
        .then(setDogs)
      }, [])

    const navigate = useNavigate()

    const handleAddDogButton = (evt) => {
        evt.preventDefault()
        navigate("/addadog")
    }
    
    return <><h2>Dogs</h2>
    {
        dogs.map(d => {
            return <li key={d.id}>
                <Link to={`/dogs/${d.id}`}>{d.name}</Link>
            </li>
        })
    }
    <input type="submit" value="Add Dog" onClick={handleAddDogButton}></input>
    </>
}