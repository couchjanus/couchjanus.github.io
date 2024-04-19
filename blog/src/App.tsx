import { useState } from 'react'

import './App.css'

// import Hello, {formatDate, Calc} from './components/Hello';
import Post from './components/Post';
import Blog from './components/Blog';


function App() {
  const [count, setCount] = useState(0);

  const post = {
    "id": "1",
    "title": "Що таке Lorem Ipsum?",
    "content": "Lorem Ipsum - це текст-риба, що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною рибою аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку зразків шрифтів.",
    "cover":	"https://couchjanus.github.io/images/product-5.jpg",
    "authorId": 2,
    "datePublished": 1712002031418,
    "numComments": 2,
    "likes": 7
};
 
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* <Post post={post} /> */}

      <Blog />

    </>
  )
}

export default App
