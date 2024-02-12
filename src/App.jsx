
import NavBar from "./component/NavBar"
import AboutUS from "./pages/AboutUs"
import HomePages from "./pages/HomePages"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<HomePages/>} />
        <Route path="/about" element={<AboutUS/>} />
        <Route path="/no" element={<NotFound/>} /> 
      </Routes>
    </Router>
    </>
  )
}

export default App
