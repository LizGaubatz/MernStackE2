import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory, Link } from "react-router-dom"
// import { useHistory } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Edit = (props) => {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => {
                console.log(res)
                setName(res.data.name)
                setType(res.data.type)
                setDescription(res.data.description)
                setSkill1(res.data.skill1)
                setSkill2(res.data.skill2)
                setSkill3(res.data.skill3)
            })
            .catch(err => console.log(err))
    }, []);




    // const changeHandler = (e) => {
    //     console.log("changed in form detected!!")
    //     setPetInfo({
    //         [e.target.name]: e.target.value,
    //         [e.target.type]: e.target.value,
    //         [e.target.description]: e.target.value,
    //         [e.target.skill1]: e.target.value,
    //         [e.target.skill2]: e.target.value,
    //         [e.target.skill3]: e.target.value,
    //     })
    // }

        const editPet = (e) => {
            e.preventDefault();
            axios.put(`http://localhost:8000/api/pet/edit/${id}`, { name, type, description, skill1, skill2, skill3 })
                .then(res => {
                    console.log(res)
                    history.push("/")
                })
                .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }


    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to='/' >Back to Home</Link>
            <h4>{name}</h4>
            <form onSubmit={editPet}>
            <div className="form-group">
                {/* <h4>About:</h4>
                <p>Pet Type: {type}</p>
                <p>Description: {description}</p>
                <p>Skills: {skill1}{skill2}{skill3}</p> */}
                <label> Name: </label>
                <input type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <label> Type: </label>
                <input type="text"
                    name="type"
                    value={type}
                    onChange={e => setType(e.target.value)} />
                <label> Description: </label>
                <input type="text"
                    name="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)} />
                <label> Skill 1: </label>
                <input type="text"
                    name="skill1"
                    value={skill1}
                    onChange={e => setSkill1(e.target.value)} />
                <label> Skill 2: </label>
                <input type="text"
                    name="skill2"
                    value={skill2}
                    onChange={e => setSkill2(e.target.value)} />
                <label> Skill 3: </label>
                <input type="text"
                    name="skill3"
                    value={skill3}
                    onChange={e => setSkill3(e.target.value)} />
                {/* <button type="button" className="btn btn-primary m-3" onClick={(e) => { history.push("/") }}>Cancel</button> */}
                <input type="submit" className="btn btn-primary" />
            </div>
            </form>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </div>
    )
}

export default Edit;