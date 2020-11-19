import React, { useState, useEffect } from 'react';

import { getMe } from '../../services/login-service'; 
import { pegaTodosPost } from '../../services/post-service'; 

import PostContainer from '../../components/post-container';


const HomePage = () => {
    const [usuario, setUsuario] = useState({});
    const [posts, setPost] = useState([]);

    const fetchData = () => { 
        getMe().then(user => setUsuario(user));
        pegaTodosPost().then(posts => setPost(posts));
    }

    useEffect(fetchData, []);

    return (
        <div>
            { posts.map(post => <PostContainer showActions={ true } key={post.id} { ...post } />) }
        </div>
    )
}

export default HomePage