import  { useState } from 'react';

const Blog = () => {
    
    const [isLoading, setIsLoading] = useState(true);

    const [posts, setPosts] = useState([]);

    const dataFetch = async () => {
        const data = await (
            await fetch('https://jsonplaceholder.typicode.com/posts')
        ).json();
        setPosts([...posts, data]);
        console.log(data)
    }

    return (
        <>
        {
            isLoading? (
                <div>
                    <p>Data is loading...</p>
                    <button onClick={
                        () => {
                            dataFetch();
                            setIsLoading(false)
                        }
                    }>Get Data</button>
                </div>
            )
            :
            (
                <div>
                    <p>Loading complete</p>
                    {JSON.stringify(posts)}
                </div>
            )
        } 
        </>

    )
}

export default Blog;