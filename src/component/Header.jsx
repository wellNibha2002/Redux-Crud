import React from 'react'
import '../style/Header.css'
import { Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setsearchdata } from '../features/Employeesslice'

const Header = () => {
  const totalcount = useSelector ((state)=>state.Employees.useData)
    const dispatch = useDispatch()
    //  console.log(totalcount.length);

    const handlesearch =(value)=>{
      //  console.log(value);
       dispatch(setsearchdata(value))
       
    }
     

  return (
    <>

      <header className="header">
        <div className="logo">MyApp</div>

        <nav className="nav">
          <Link to="/">Create</Link>
          <Link to="/Update">Update</Link>
          <Link to="/Table">Table ({totalcount.length})</Link>
          <Link to="/View">View</Link>
          
        </nav>

        <div className="search-box">
          <input onChange={(e)=>{handlesearch(e.target.value)}} type="text" placeholder="Search..." />
        </div>
      </header>
    </>
  )
}

export default Header