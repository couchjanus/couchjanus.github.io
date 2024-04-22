import {useState, useEffect} from 'react'

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
        // console.log(post)
    }, []);

    return (
        <article>
            <div>
                <span>Comments: {post.numComments} </span>
                <span>{toDate(post.datePublished).toDateString()}</span>
            </div>
            <h2><a href="#">{post.title}</a></h2>
            <div>
                <img src={post.cover}  alt={post.title} />
                <p>{post.content}</p>
            </div>
            <div>
                <span>Author: {author.firstName + " " + author.lastName} </span>
                <a href="#">Read more</a>
            </div>

        </article>
    )

}

export default PostListItem;