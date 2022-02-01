import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Delete = (props) => {
    const [pet, setPet] = useState({})
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => setPet(res.data))
            .catch(err => console.error(err));
    });
    
    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/pet/delete/${props.id}`)
        .then(res => {
            console.log("response when deleting", res)
            // props.reload()
            history.push("/")
        })
        .catch(err => console.log(err))
    }
    return (
        
        <button onClick={deletePet} type="button"  className="btn btn-danger">Adopt {pet.name}</button>
        
    )
}

export default Delete;