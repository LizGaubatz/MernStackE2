import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default (props) => {
    // const { refresh } = props;
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pet/new", { name, type, description, skill1, skill2, skill3 })
            .then(res => {
                console.log('sucess')
                history.push("/")
                // refresh();
            })
            .catch(err => {
                const errResponse = err.response.data.errors;
                const errorArr = []
                for (const key of Object.keys(errResponse)) {
                    errorArr.push(errResponse[key].message)
                }
                setErrors(errorArr);
            })
    }


    return (

        <div className="container">

            <form onSubmit={onSubmitHandler}>
                <div >
                    <label for="">Pet Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        className="form-control"
                        onChange={e => setName(e.target.value)}
                    />
                    <label for="">Pet Type:</label>
                    <input
                        type="text"
                        name="type"
                        value={type}
                        className="form-control"
                        onChange={e => setType(e.target.value)}
                    />
                    <label for="">Pet Description: </label>
                    <input
                        type="text"
                        name="description"
                        value={description}
                        className="form-control"
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <p>Skills (optional): </p>
                    <label for="">Skill 1: </label>
                    <input
                        type="text"
                        name="skill1"
                        value={skill1}
                        className="form-control"
                        onChange={e => setSkill1(e.target.value)}
                    />
                    <label for="">Skill 2: </label>
                    <input
                        type="text"
                        name="skill2"
                        value={skill2}
                        className="form-control"
                        onChange={e => setSkill2(e.target.value)}
                    />
                    <label for="">Skill 3: </label>
                    <input
                        type="text"
                        name="skill3"
                        value={skill3}
                        className="form-control"
                        onChange={e => setSkill3(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Pet</button>
            </form>
            {errors.map((err, index) => <p key={index}>{err}</p>)}

        </div>

    );
}