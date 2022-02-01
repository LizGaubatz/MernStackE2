import Form from "../components/Form";
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";

export default () => {
    const [pets, setPets] = useState([]);

    const history = useHistory();

    // const refresh = () => {
    //     setLoaded(!loaded)
    // }

    const newPet = pets => {
        axios.post('http://localhost:8000/api/pet/new', pets)
        .then(res => {
            history.push('/api/pet')
            // props.reload()
        })
        .catch(err => console.log(err))
    }
    return (
        
        <div className="container">
            <h3> Add a Pet </h3>
            <Link to='/' >Home</Link>
            <Form
                onSubmitProp = {newPet}
                initialName=''
                initalType=''
                initialDescription=''
                initalSkill1=''
                initalSkill2=''
                initalSkill3=''
            />
        </div>
        
    )

}