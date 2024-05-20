import Nav from "./components/Navbar"
import { Route, Routes} from 'react-router-dom'
import {useState} from 'react'
import Tabla from "./views/Tabla"
import Create from "./views/Create"
import Edit from "./views/Edit"

const App = () => {

  const [authors, setAuthors] = useState([])
  const updateAuthor = (author) => {
    setAuthors([...authors, author])
  }

  return (
    <>
        <Nav />
        <Routes>
          <Route path="/" element= {<Tabla authors={authors} setAuthors={setAuthors} />}/>
        <Route path="/new" element={<Create updateAuthor={updateAuthor} />} />
        <Route path = '/:id/update' element = {<Edit updateAuthor={updateAuthor} />} />       
        </Routes>

    </>
  )
}

export default App
