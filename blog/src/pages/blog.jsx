import  { useContext, createContext } from 'react';
import PostList from '../components/PostList';

const BlogContext = createContext('');

function Blog() {
    const Layout = ({children}) => {
        return (
            <div className="max-w-screen-xl mx-auto p-1">
                <Header />
                <main>
                    {children}
                </main>
            </div>
        )
    }

    const BlogInfo = () => {
        const blogHeader = useContext(BlogContext)
        return (
            <>
            <span className="text-3xl font-bold">{blogHeader.blogName}</span>
            <p>{blogHeader.blogDescription}</p>
            </>
        )
    }

    const blogHeader = {
        blogName: "Our blog",
        blogDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi culpa odio asperiores a tempore."
    }

    const Header = () => {
        return (
            <div className="border-b-2 border-indigo-600 mb-5 flex justify-between text-sm">
                <div className="text-indigo-600 flex items-center pb-2 pr-2 uppercase">
                    <a href="#" className="font-semibold inline-block">
                <BlogInfo />
                </a>
                </div>
                <a href="#" className="text-1xl">See All</a>
            </div>
        )
    }

    return (
        <BlogContext.Provider value={blogHeader}>
            <Layout>
                <PostList />
            </Layout>
        </BlogContext.Provider>

    )
}

export default Blog;