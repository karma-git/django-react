import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CategoryDetail({ match }) {
    
    const [category, setCategory] = useState([])
    const [posts, setPosts] = useState([])
    const id = match.params.id

    useEffect( () => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/category/${id}/`
        }).then(responce => {
            setCategory(responce.data)
            setPosts(responce.data.post)
        })
        }, [id] )
    return (
        <div>
            Category with id {category.id}
            <p>Category: <strong>{category.name}</strong></p>
            <hr/>
            <div class="row">
                {posts.map(p => (
                    <div className="col-md-4" key={p.id}>
                        <h4>{p.title}</h4>
                        <p>{p.content}</p>
                        <p>{p.id}</p>
                        <Link to={{ pathname: `/post/${p.id}`, fromDashboard:false }}>Детали</Link>
                    </div>
              ))}
            </div>
        </div>
    )
}

export default CategoryDetail;
