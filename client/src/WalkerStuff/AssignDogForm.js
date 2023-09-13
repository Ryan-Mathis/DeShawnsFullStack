import { useEffect, useState } from "react";
import { assignWalkerToDog, getAvailableDogsByWalkerId } from "../apiManager.js";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

export const AssignDogForm = () => {
    const { walkerId } = useParams();
    const [availableDogs, setAvailableDogs] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAvailableDogsByWalkerId(walkerId)
            .then(setAvailableDogs)
    }, [])

    const handleAssignDogWalker = (e) => {
        e.preventDefault()
        assignWalkerToDog(e.target.value, walkerId)
        .then(navigate(`/dogs/${e.target.value}`))
    }

    return <>
        <Col sm={{
        offset: 5,
        size: 3
      }}>
            <Row>
                {
                    availableDogs.map(d => {
                        return <Button
                            key={d.id}
                            value={d.id}
                            onClick={handleAssignDogWalker}
                            >
                            {d.name}
                        </Button>
                    })
                }
            </Row>
        </Col>
    </>
}