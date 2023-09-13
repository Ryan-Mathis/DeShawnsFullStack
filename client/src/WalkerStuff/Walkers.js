import { useEffect, useState } from "react"
import { getCities, getWalkers, getWalkersByCity } from "../apiManager.js";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate()

    return <>
        <h2>Walkers</h2>
        {
            filteredWalkers.map(w => {
                return <>
                <ul key={w.id}>
                    {w.name}
                </ul>
                <Button
                onClick={() => navigate(`/assignnewdog/${w.id}`)}>
                Add Dog
                </Button>
                </>
            })
        }
        <FormGroup>
            <Label for="cityToFilterBy">
                Looking for a walker in a specific city?
            </Label>
            <select
                id="cityToFilterBy"
                name="cityFilter"
                type="select"
                placeholder="Select a city here:"
                onChange={(e) => {
                    const cityIdToFilterBy = parseInt(e.target.value)
                    setCityId(cityIdToFilterBy)
                }}
            >
                <option
                value=""
                disabled
                selected>
                Select a city here:
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
            </select>
        </FormGroup>
    </>
}