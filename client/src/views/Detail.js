import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import Delete from '../components/Delete';

export default (props) => {
    const [pet, setPet] = useState({})
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => setPet(res.data))
            .catch(err => console.error(err));
    });

    const reload = () => {
        history.push('/')
    }


    return (
        pet ?
            <div className="container">
                <h1>Pet Shelter</h1>
                <Link to='/' >Back to Home</Link>
                <h4>Details about {pet.name}:</h4>
                <Delete reload = {reload} id = {id}>Adopt {pet.name}</Delete>
                <p>Pet Type: {pet.type}</p>
                <p>Description: {pet.description}</p>
                {pet.skill1 || pet.skill2 || pet.skill3 ? (
                <p>Skills: <br></br>{pet.skill1}<br></br>{pet.skill2}<br></br>{pet.skill3}</p>): <p></p>}
            </div>
            : <p></p>
    )
}