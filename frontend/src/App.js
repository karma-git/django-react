import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

    // Объявляется пустая переменная
    const [people, setPeople] = useState([])

    // Выполняется GET запрос на EP
    useEffect( () => {
      axios({
        method: "GET",
        url: "http://127.0.0.1:8000/api/test-api/"
      }).then(responce => {
        setPeople(responce.data)
      })
    }, [] )

  return (
    <div className="App">
      <h1>Hello from React</h1>
         <ul>
           {people.map(p => (
             <li key={p.id}>Human - {p.name}</li>
           ))}
         </ul>
    </div>
  );
}

export default App;
