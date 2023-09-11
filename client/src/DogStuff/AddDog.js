import { useEffect, useState } from "react"
import { addNewDog, getCities, getDogs, getWalkers } from "../apiManager.js";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";

export const AddDog = () => {
    const [cities, setCities] = useState([]);
    const [walkers, setWalkers] = useState([]);
    const [dogs, setDogs] = useState([]);    
    const [newDog, setNewDog] = useState({
        name: null,
        walkerId: null,
        cityId: null
    })
    useEffect(() => {
        getCities()
        .then(setCities)
        getWalkers()
        .then(setWalkers)
        getDogs()
        .then(setDogs)
    }, [])
    const navigate = useNavigate()

    const handleAddDogButton = (evt) => {
        evt.preventDefault()

        const newDogToSendToAPI = {
            name: newDog.name,
            walkerId: newDog.walkerId,
            cityId: newDog.cityId
        }

        addNewDog(newDogToSendToAPI)
        .then(() => {navigate(`/dogs/${dogs.length + 1}`)})
    }

    return <>
    <Form onSubmit={handleAddDogButton}>
        <FormGroup>
            <Label for="DogName">
                Dog Name
            </Label>
            <Input
            id="dogName"
            name="Name"
            placeholder="Rover? Spot?"
            type="text"
            onChange={(evt) => {
                const copy = { ...newDog } 
                copy.name = evt.target.value
                setNewDog(copy)
            }}  
            />
        </FormGroup>
        <FormGroup tag="fieldset">
            <legend>
                Select a city:
            </legend>
            {
                cities.map(c => {
                    return <FormGroup key={c.id} check>
                        <Input
                        name={c.name}
                        type="radio"
                        value={c.id}
                        onChange={(evt) => {
                            const copy = { ...newDog }
                            copy.cityId = evt.target.value
                            setNewDog(copy)
                        }}
                        />
                        {' '}
                        <Label check>
                            {c.name}
                        </Label>
                        </FormGroup>
                })
            }
        </FormGroup>
        <FormGroup tag="fieldset">
            <legend>
                Select a walker:
            </legend>
            {
                walkers.map(w => {
                    return <FormGroup key={w.id} check>
                        <Input
                        name={w.name}
                        type="radio"
                        value={w.id}
                        onChange={(evt) => {
                            const copy = { ...newDog }
                            copy.walkerId = evt.target.value
                            setNewDog(copy)
                        }}
                        />
                        {' '}
                        <Label check>
                            {w.name}
                        </Label>
                        </FormGroup>
                })
            }
        </FormGroup>
        <Button>Submit</Button>
    </Form>
    </>
}