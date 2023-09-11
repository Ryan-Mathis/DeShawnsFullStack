import { useParams } from "react-router-dom"
import { getDog } from "../apiManager.js"
import { useEffect, useState } from "react"

export const Dog = () => {
    const { id } = useParams()
    const [dog, setDog] = useState({})
    useEffect(() => {
        getDog(id)
        .then(setDog)
    }, [])

    return <>
    <h1>{dog.name}</h1>
    <p>{dog.walker?.name}</p>
    </>
}