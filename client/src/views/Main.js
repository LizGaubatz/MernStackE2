import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Delete from '../components/Delete';
// import List from '../components/List';
// import { mapReduce } from '../../../server/models/pet.model';


const Main = (props) => {
    const [pets, setPets] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
            .then(res => {
                setPets(res.data);
                // setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [loaded]);


    const reload = () => {
        // history.push('/')
        setLoaded(!loaded)
    }

    return (
        <div className='container'>
            <Link to="/pet/new"> Add a pet</Link>
            <h1> Pet Shelter</h1>
            <table className="table">
                <thead>
                    <tr>
                        <td>Name </td>
                        <td>Type </td>
                        <td colSpan={2}>Actions </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets &&
                        pets.map((pet, i) => (
                            <tr key={i}>
                                {/* <td><Link to={`/pet/${pet._id}`}>{pet.title} </Link></td> */}
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={`/pet/${pet._id}`} className="btn m-3 btn-primary">View</Link>
                                    <Link to={`/pet/edit/${pet._id}`} className="btn m-3 btn-primary">Edit</Link>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            {/* <button onClick={e => setRefresh(!refresh)}>Click me to reset</button> */}
        </div>
    )
}
{/* <div className="container">
    <div className='d-flex justify-content-even m-3 align-middle'>
        <h1 className='align-text-middle p-2 flex-grow-1'>Pet Shelter</h1>
        <Link to='/pet/new' className="btn btn-primary text-center align-middle">Add a pet</Link>
    </div>
    {pets ?
        pets.map((pet, i) => {
            return (
                <div key={i}>
                    {/* <h3>{pet.name}</h3> */}
//                     <table className="table table-bordered table-hover">
//                         <tr bs-ta>
//                             <th>Name</th>
//                             <th>Type</th>
//                             <th>Actions</th>
//                         </tr>
//                         <tr>
//                             <td>{pet.name}</td>
//                             <td>{pet.type}</td>
//                             <td>
//                                 <Link to={`/pet/${pet._id}`} className="btn m-3 btn-primary">View</Link>
//                                 <Link to={`/pet/edit/${pet._id}`} className="btn m-3 btn-primary">Edit</Link>
//                             </td>
//                         </tr>
//                     </table>
//                     {/* <div>
//                                 <Link to={`/pet/${pet._id}`} className="btn m-3 btn-primary">View</Link>
//                                 <Link to={`/pet/edit/${pet._id}`} className="btn m-3 btn-primary">Edit</Link>
//                                 {/* <Delete reload={reload} id={pet._id}></Delete> */}
//                 </div>
//                 // </div> * /}

//             )
//         }) : <>None</>}
// </div >
//     )
// } */}

export default Main;