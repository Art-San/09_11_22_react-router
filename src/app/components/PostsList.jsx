import React from 'react'
// ЭТО ФАИНД
const PostsList = ({posts}) => {
  console.log('posts', posts)
  return (
    <>
        <h3>{posts.label}</h3>
    </>
  )
}


// Это для ФИЛЬТРА
// const PostsList = ({posts}) => {
//   return (
//     <>
//     {posts.map((post) => (
//             <h3 key={post.ifso}>{post.label}</h3>
//         ))}
//     </>
//   )
// }

export default PostsList