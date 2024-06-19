import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import News from './News'
import TwitterFeed from './TwitterFeed'
import YouTube from './YouTube'

function Feed() {
  return (
    <div className='flex justify-center flex-wrap p-2 m-4 dark:bg-black'>
        <Link to={"/feed/youtube"}>
            <li className="px-[2vw] dark:bg-black">YouTube</li>
        </Link>
        <Link to={"/feed/news"}>
            <li className="px-[2vw] dark:bg-black">News</li>
        </Link>
        <Link to={"/feed/x"}>
            <li className="px-[2vw] dark:bg-black">X</li>
        </Link>
        <Outlet/>
    </div>
  )
}

export default Feed