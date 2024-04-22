// import  { useState, useEffect } from 'react';
import PostListItem from './PostListItem';
import {useData} from "../hooks/useData";

const PostList = () => {
    
    // const [isLoading, setIsLoading] = useState(true);

    // const [posts, setPosts] = useState([]);
    // const [authors, setAuthors] = useState([]);

    const findById = id => authors.find(item => item.id == id)

    const baseUrl = 'https://my-json-server.typicode.com/couchjanus/db';

    const posts = useData(`${baseUrl}/posts`);
    const authors = useData(`${baseUrl}/authors`);
    
    // useEffect(() => {
    //     const dataFetch = async () => {
    //         const data = await (
    //             await fetch(`${baseUrl}/posts`)
    //         ).json();
    //         setPosts(data);
    //         // setIsLoading(false)
    //         // console.log(data)
    //     }
    //     const fetchUser = async () => {
    //         const data = await (
    //             await fetch(`${baseUrl}/authors`)
    //         ).json();
    //         setAuthors(data);
    //         setIsLoading(false)
    //         // console.log(data)
    //     }
    //     dataFetch();
    //     fetchUser();
    // }, []);

    return (
        <>
        {
            !posts? (
                <div>
                    <p>Data is loading...</p>
                   
                </div>
            )
            :
            (
                <section>
                    <h2>Our Blog</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi culpa odio asperiores a tempore.</p>
                    {/* {JSON.stringify(posts)} */}
                    <div>
                        {posts.map((post) =>
                        <PostListItem item={post} key={post.id} user={findById(post.authorId)} />
                        )}
                    </div>
                </section>
            )
        } 
        </>

    )
}

export default PostList;