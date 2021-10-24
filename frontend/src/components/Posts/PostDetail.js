import axios from 'axios';
import React, { useState, useEffect } from 'react';


function PostDetail({ match }) {
    
    const [post, setPost] = useState([])
    const id = match.params.id

    useEffect( () => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/blogpost/${id}/`
        }).then(responce => {
            setPost(responce.data)
        })
        }, [id] )
    return (
        <div>
            Post with id {post.id}
            <p>Title: <strong>{post.title}</strong>; piblished at: {post.pub_date}; in archive?: {post.in_archive}</p>
            <p>Content: <strong>{post.content}</strong></p>
        </div>
    )
}

export default PostDetail;
