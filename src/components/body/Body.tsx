import './Body.css';


import Post from '../post/Post';
import React, { useState, useEffect } from 'react';

interface Post {
    id: number;
    title: string;
    description: string;
    tags: string;
    author: string;
}

const MyComponent: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    function fetchPostsFromAPI() {
        fetch("http://localhost:8000/api/fetchposts")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data.ok);
            });
    }

    useEffect(() => {
        fetchPostsFromAPI();
    }, []);

    return (
        <>
            <div className="rootBody">
                {posts.map((post) => (
                    <div className='postRootBody' key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.author}</p>
                        {/* <Post title={post.title} description={post.description} 
                            author={post.author}/> */}
                    </div>
                ))}
            </div>
        </>
    );
};

export default MyComponent;

