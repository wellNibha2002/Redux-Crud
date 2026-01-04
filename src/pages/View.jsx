import React from 'react'
import "../style/View.css"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const View = () => {
    const showdata = useSelector((state)=>state.Employees.viewdata)
    const navigate = useNavigate()
    // console.log(showdata);

    const handleback =() =>{
        navigate("/Table")
    }
    
    
    return (
        <>
        <div className="box1">
            <div className="view-container">
                <div className="profile-card">

                    {/* <!-- Profile Image --> */}
                    <div className="profile-img">
                        <img src="https://via.placeholder.com/120" alt="Profile" />
                    </div>

                    {/* <!-- Name & Designation --> */}
                    <h2>{showdata.name}</h2>
                    <p className="designation">{showdata.designation}</p>

                    {/* <!-- Details --> */}
                    <div className="details">
                        <div><span>ID:</span>{showdata.id}</div>
                        <div><span>Email:</span>{showdata.email}</div>
                        <div><span>Date of Birth:</span>{showdata.dob} </div>
                        <div><span>Age:</span>{showdata.age} </div>
                        <div><span>Gender:</span>{showdata.gender} </div>
                        <div><span>Salary:</span>{showdata.salary} </div>
                        <div><span>Address:</span>{showdata.address} </div>
                        <div><span>Description:</span>{showdata.description} </div>
                        <div><span>Created At:</span>{showdata.createdAt} </div>
                        {/* <div><span>Updated At:</span>{showdata.} </div> */}
                    </div>

                    {/* <!-- Buttons --> */}
                    <div className="actions">
                        <button onClick={handleback} className="back">Back</button>
                    </div>

                </div>
            </div>
</div>
        </>
    )
}

export default View