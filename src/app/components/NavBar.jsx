import React from 'react'
// ul>(li>a)*4

const NavBar = () => {
  return (
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/login">Login</a>
        </li>
        <li>
            <a href="/posts">Posts</a>
        </li>
        <li>
            <a href="/dashboard">Dashboard</a>
        </li>
    </ul>
  )
}

export default NavBar