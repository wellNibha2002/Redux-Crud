import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './pages/Create'
import Table from './pages/Table'
import Update from './pages/Update'
import Header from './component/Header'
import View from './pages/View'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/Table' element={<Table />} />
          <Route path='/Update' element={<Update />} />
          <Route path='/View' element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
