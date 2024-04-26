import PostList  from '../components/PostList';
import './home.css';

export default function Home() {
    return (
        <>
        
<div id="sidebar">
  <h1>Janus Blog</h1>
    <div>
      <form id="search-form" role="search">
        <input
                id="q"
                aria-label="Search posts"
                placeholder="Search"
                type="search"
                name="q"
        />
        <div
                id="search-spinner"
                aria-hidden
                hidden={true}
        />
              
      </form>
    </div>
    <nav>
      <ul>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">About</a>     
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
</div>

<div id="detail">
      <PostList />
</div>
        </>
    )
}