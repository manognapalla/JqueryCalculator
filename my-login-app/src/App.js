import './App.css';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';


function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [msg, setMessage] = useState("")


  const handleClick = (e) => {
    var credMap = new Map()
    fetch("http://localhost:3000/user/getAll")
    .then(response => response.json())
    .then(data => {
        for(let d of data){
          credMap.set(d.email, d.password)
        }
        setMessage(credMap.has(email) && credMap.get(email) == password ? "Logged in Successfully" : "Invalid Credentials")
      })
    
  }

  return (
    <div className="App">

      <h1>LOGIN HERE!</h1>

      <div id = "email">
      <label>Email : </label>
    
      <input type="text" placeholder='Enter your email' value={email}  onChange={e => setEmail(e.target.value)}/>
      </div>

      <div id="password">
      <br></br>
      <label>Password : </label>
      <input type="text" placeholder='Enter your password' value={password} onChange={e => setPassword(e.target.value)}/>
      </div>
      <br></br>

      <button onClick={e => handleClick(e)}>LOGIN</button>

      
      <h2>
        {msg}
      </h2>

      {/* <Router>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/aboutus' element={<Aboutus/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/jobs' element={<Jobs/>}></Route>
        </Routes>
      </Router> */}
    </div>

  );
}

export default App;

//http://localhost:3001/