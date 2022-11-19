import './App.css';
import { useEffect, useState } from 'react';

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
    </div>

  );
}

export default App;

