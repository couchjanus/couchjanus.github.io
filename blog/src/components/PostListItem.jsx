import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function PostListItem({item, user}) {

    const [post, setPost] = useState({});
    const [author, setAuthor] = useState({});
    const toDate = date => new Date(date);

    const fetchPost = () => {
        setPost({...item});
        setAuthor({...user})
    }

    useEffect(() => {
        fetchPost()

    }, []);

    return (
        <article className='rounded overflow-hidden shadow-lg flex flex-col'>
            
            <div className='flex'>
                <span className='flex-1'>Comments: {post.numComments} </span>
                <span className='flex-1'>{toDate(post.datePublished).toDateString()}</span>
            </div>
            
            <a href="#" className='bg-indigo-600 px-4 py-2 text-white mt-3 mr-r hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out'>{post.title}</a>
           
            <div className='flex-initial w-62 max-w-62'>
                <img className='w-62 h-62 block object-fit-cover' src={post.cover}  alt={post.title} />
                <p>{post.content}</p>
            </div>
            
            <div>
                <span>Author: {author.firstName + " " + author.lastName} </span>
                <Link  to={`/post/${post.id}`} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Read&nbsp;more</Link>
            </div>

        </article>
    )

}

export default PostListItem;