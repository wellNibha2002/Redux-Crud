import React, { useEffect, useState } from 'react'
import '../style/Update.css'
import { useDispatch, useSelector } from 'react-redux'
import { updatedata } from '../features/Employeesslice'
import { useNavigate } from 'react-router-dom'

const Update = () => {

  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Dob, setDob] = useState("")
  const [Salary, setSalary] = useState("")
  const [Age, setAge] = useState("")
  const [Gender, setGender] = useState("")
  const [Designation, setDesignation] = useState("")
  const [Address, setAddress] = useState("")
  const [Description, setDescription] = useState("")
  const [ProfilePicture, setProfilePicture] = useState("")
  console.log(Name, Email, Dob, Salary, Age, Gender, Designation, Address, Description, ProfilePicture);

  const olddata = useSelector((state) => state.Employees.onedata)
  console.log(olddata);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleupdate = (e) => {
    e.preventDefault()
    const editdata = {
      name: Name,
      email: Email,
      dob: Dob,
      salary: Salary,
      age: Age,
      gender: Gender,
      designation: Designation,
      address: Address,
      description: Description,
      profilePic: ProfilePicture,
      id:olddata.id

    }
    console.log(editdata);
    dispatch (updatedata(editdata))
    navigate("/Table")
  }

  useEffect(() => {

    setName(olddata.name)
    setEmail(olddata.email)
    setDob(olddata.dob)
    setSalary(olddata.salary)
    setAge(olddata.age)
    setGender(olddata.gender)
    setDesignation(olddata.designation)
    setAddress(olddata.address)
    setDescription(olddata.description)
    setProfilePicture(olddata.profilePic)

  }, [])

  return (
    <>
      <div className="box1">
        <div className="container">
          <h2>Update</h2>

          <form className="create-form">

            <div className="form-group">
              <input onChange={(e) => { setName(e.target.value) }} value={Name} type="text" required />
              <label>Name</label>
            </div>

            <div className="form-group">
              <input onChange={(e) => { setEmail(e.target.value) }} value={Email} type="email" required />
              <label>Email</label>
            </div>

            <div className="form-group">
              <input onChange={(e) => { setDob(e.target.value) }} value={Dob} type="date" required />
              <label>Date of Birth</label>
            </div>

            <div className="form-group">
              <input onChange={(e) => { setSalary(e.target.value) }} value={Salary} type="number" required />
              <label>Salary</label>
            </div>

            <div className="form-group">
              <input onChange={(e) => { setAge(e.target.value) }} value={Age} type="number" required />
              <label>Age</label>
            </div>

            <div className="form-group">
              <select onChange={(e) => { setGender(e.target.value) }} value={Gender} required>
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <label>Gender</label>
            </div>

            <div className="form-group">
              <input onChange={(e) => { setDesignation(e.target.value) }} value={Designation} type="text" required />
              <label>Designation</label>
            </div>

            <div className="form-group full">
              <textarea onChange={(e) => { setAddress(e.target.value) }} value={Address} required></textarea>
              <label>Address</label>
            </div>

            <div className="form-group full">
              <textarea onChange={(e) => { setDescription(e.target.value) }} value={Description} required></textarea>
              <label>Description</label>
            </div>

            <div className="form-group full">
              <input onChange={(e) => { setProfilePicture(e.target.value) }} value={ProfilePicture} type="file" />
              <label>Profile Picture</label>
            </div>

            <button onClick={(e) => { handleupdate(e) }} type="button">Update</button>

          </form>
        </div>
      </div>
    </>
  )
}

export default Update