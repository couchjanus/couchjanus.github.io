import  { useContext, createContext } from 'react';
import {useLoaderData} from 'react-router-dom'
const BlogContext = createContext('');

async function getPost(id) {
    let post = await fetch(`https://my-json-server.typicode.com/couchjanus/db/posts/${id}`)
    return post.json() ?? null;
}


export async function loader({params}) {
    const post = await getPost(params.postId);
    return {post};
}

function ShowPost() {

    const {post} = useLoaderData();

    const Layout = ({children}) => {
        return (
            <div className="max-w-screen-xl mx-auto p-1">
                <Header />
                <PostBody />
                <main>
                    {children}
                </main>
            </div>
        )
    }

    const Header = () => {
        return (
            <div className="border-b-2 border-indigo-600 mb-5 flex justify-between text-sm">
                <div className="text-indigo-600 flex items-center pb-2 pr-2 uppercase">
                    <a href="#" className="font-semibold inline-block">
                <PostTitle />
                </a>
                </div>
                <a href="#" className="text-1xl">See All</a>
            </div>
        )
    }

    const PostTitle = () => {
        const post = useContext(BlogContext)
        return <h2>{post.title}</h2>
    }

    const PostBody = () => {
        const post = useContext(BlogContext)
        return (
            <div className="">
                <div>
                    <img src={post.cover} />
                </div>
                <div>
                    <img src={post.content} />
                </div>
            </div>
        )
        
    }

    return (
        <BlogContext.Provider value={post}>
            <Layout>
               
            </Layout>
        </BlogContext.Provider>
    )

}

export default ShowPost;