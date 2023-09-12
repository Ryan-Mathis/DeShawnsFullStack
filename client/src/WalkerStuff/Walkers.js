import { useEffect, useState } from "react"
import { getCities, getWalkers, getWalkersByCity } from "../apiManager.js";
import { FormGroup, Input, Label } from "reactstrap";

export const Walkers = () => {

    const [cities, setCities] = useState([]);
    const [filteredWalkers, setFilteredWalkers] = useState([]);
    const [cityId, setCityId] = useState(null)

    useEffect(() => {
        getWalkers()
            .then(setFilteredWalkers)
        getCities()
            .then(setCities)
    }, []);
    
    useEffect(() => {
        getWalkersByCity(cityId)
        .then(setFilteredWalkers)
    }, [cityId])

    return <>
        <h2>Walkers</h2>
        {
            filteredWalkers.map(w => {
                return <ul key={w.id}>
                    {w.name}
                </ul>
            })
        }
        <FormGroup>
            <Label for="cityToFilterBy">
                Looking for a walker in a specific city?
            </Label>
            <Input
                id="cityToFilterBy"
                name="cityFilter"
                type="select"
                onChange={(e) => {
                    const cityIdToFilterBy = parseInt(e.target.value)
                    setCityId(cityIdToFilterBy)
                }}
            >
                <option
                value={null}>
                    Pick a city from this list:
                </option>
                {
                    cities.map(c => {
                        return <option
                        id={c?.id}
                        key={c?.id}
                        value={c.id}>
                            {c?.name}
                        </option>
                    })
                }
            </Input>
        </FormGroup>
    </>
}