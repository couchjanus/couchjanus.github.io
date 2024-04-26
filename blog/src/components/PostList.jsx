import  { useState, useEffect, useContext, createContext, useCallback } from 'react';
import PostListItem from './PostListItem';
import {useData} from "../hooks/useData";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [whichSort, setSort] = useState('likes');
    const BlogContext = createContext("");
    const findById = id => authors.find(item => item.id == id)
    const baseUrl = 'https://my-json-server.typicode.com/couchjanus/db';
    const authors = useData(`${baseUrl}/authors`);

    const Layout = ({children}) => {
        return (
            <div>
                <Header />
                <main>
                    {children}
                </main>
            </div>
        )
    }

    const Header = () => {
        return (
            <header>
                <BlogInfo />
            </header>
        )
    }

    const BlogInfo = () => {
        const blogHeader = useContext(BlogContext)
        return (
            <>
            <h2>{blogHeader.blogName}</h2>
            <p>{blogHeader.blogDescription}</p>
            </>
        )
    }

    const swap = useCallback( (items, i, j) => {
        let tmp = items[i]
        items[i] = items[j]
        items[j] = tmp
        } , []
    )
    const blogHeader = {
        blogName: "Our blog",
        blogDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi culpa odio asperiores a tempore."
    }

    const partition = useCallback((items, left, right) => {
        let pivot = items[Math.floor((right + left)/2)], 
        i = left,
        j = right
        while (i<=j){
            while(items[i][whichSort] < pivot[whichSort]) {
                i++
            }
            while(items[j][whichSort] > pivot[whichSort]) {
                j--
            }
            if (i <= j) {
                swap(items, i, j)
                i++
                j--
            }
        }
        return i
    }, [swap, whichSort]
    ) 

    const quickSort = useCallback( (items, left, right) => {
        let index;
        if (items.length > 1) {
            index = partition(items, left, right) 
            if (items.length < index - 1) {
                quickSort(items, left, index - 1)
            }
            if (index < right) {
                quickSort(items, index, right)
            }
        }
        return items;
    }, [partition]
    )

    const fetchPost = useCallback(
        async () => {
            let data = await(await fetch(`${baseUrl}/posts`)).json();
            setPosts(data)
            let result = quickSort(data, 0, data.length-1)
            data = result.reverse().slice(0,10)
        }, [quickSort]
    )
    useEffect(() => {
        fetchPost()
    }, [fetchPost, whichSort])

    const handleClick = () => whichSort == 'likes' ? setSort('numComments') : setSort('likes');

    if(!posts) return <p>Data is loading...</p>
    
    return (
        <BlogContext.Provider value={blogHeader}>
            <Layout>
                <button onClick={handleClick}>Sort by {whichSort}</button>
                <section className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {posts.map((post) =>
                <PostListItem item={post} key={post.id} user={findById(post.authorId)} />
                )}
               </div>
                </section>
            </Layout>
        </BlogContext.Provider>
    )
}

export default PostList;