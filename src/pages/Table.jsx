import React, { useEffect, useState } from 'react'
import '../style/Table.css'
import { getdata, deletedata, settabledata, setviewdata } from '../features/Employeesslice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Table = () => {
  const [isdelete, setisdelete] = useState(false)
  const [filterdata, setfilterdata] = useState([])

  const Employeesdata = useSelector((state) => state.Employees.useData)
  const loader = useSelector((state) => state.Employees.loading)
  const search = useSelector((state) => state.Employees.searchdata)
  // console.log(search);

  // console.log(Employeesdata);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handledelete = (id) => {
    dispatch(deletedata(id))
    setisdelete(!isdelete)

  }

  const handleedit = (item) => {
    dispatch(settabledata(item))
    navigate('/Update')
  }

  const handleview = (item) => {
    dispatch(setviewdata(item))
    navigate('/View')
  }

  const handlesearch = () => {
    if (search.length == 0) {
      setfilterdata(Employeesdata)
    } else {
      const seedata = Employeesdata.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase())
      })
      setfilterdata(seedata)
    }
  }

  useEffect(() => {
    dispatch(getdata())
    setfilterdata(Employeesdata)

  }, [isdelete])

  useEffect(()=>{
    handlesearch()

  },[search])

  return (
    <>
      <div className='box1'>
        <div className="table-container">
          <h2>User Details Table</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>DOB</th>
                  <th>Salary</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Designation</th>
                  <th>Address</th>
                  <th>Description</th>
                  <th>profilePic</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {loader ? (
                  <tr>
                    <td colSpan="11" style={{ textAlign: "center" }}>
                      Loading...
                    </td>
                  </tr>
                ) : (
                 filterdata?.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.dob}</td>
                      <td>{item.salary}</td>
                      <td>{item.age}</td>
                      <td>{item.gender}</td>
                      <td>{item.designation}</td>
                      <td>{item.address}</td>
                      <td>{item.description}</td>
                      <td>{item.profilePic || "N/A"}</td>
                      <td>
                        <button onClick={() => { handleview(item) }} className="btn view">View</button>
                        <button onClick={() => { handleedit(item) }} className="btn edit">Edit</button>
                        <button onClick={() => { handledelete(item.id) }} className="btn delete">Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div >
    </>
  )
}

export default Table