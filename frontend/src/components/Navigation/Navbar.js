import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    // Объявляется пустая переменная
    const [categories, setCategories] = useState([])

    // Выполняется GET запрос на EP
    useEffect( () => {
    axios({
        method: "GET",
        url: "http://127.0.0.1:8000/api/category/"
    }).then(responce => {
        setCategories(responce.data)
    })
    }, [] )
  
  return ( 
    <div className="App">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            
            {categories.map(c=>(
                <Link className="nav-link" to={{ pathname: `/category/${c.id}`, fromDashboard:false }}>{c.name}</Link>
            ))}
            
        </div>
        </div>
    </div>
    </nav>
      
    </div>
  );
}

export default Navbar;
