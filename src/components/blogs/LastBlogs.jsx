import React ,{useState }from 'react'
import "./blogs.css"
import "./blogsData"
import blogsData from './blogsData';
import { Link } from 'react-router-dom';
const LastBlogs = () => {
  const [lastBlogsData, setLastBlogsData] =useState(blogsData.reverse().splice(2))
  return (
    <div className='lastblogs-container'> <div className='blogsC'>
    <div className="blogsTitle">
        <h2 className="Home-sections-title">Latest Articles in Digital World</h2>
      </div>
    <div className='blogs'>
    {blogsData.map((blog) => 
        <div key={blog.id} className='blog'>
            <img src={blog.image} alt={blog.title} className='blogImg'/>
            <div className='blogTitle'>{blog.title}</div>
            
            <p className='blogDescription'>{blog.description.slice(0, 200)}...</p>
            <Link to={`/blog/${blog.id}`} ><a  className='blogButton'>More</a></Link>
        </div>
    )}
    </div>
    </div>
    <Link to={`/blog`} ><div className="allblogs"> see all articles</div></Link> 
    </div>
  )
}

export default LastBlogs