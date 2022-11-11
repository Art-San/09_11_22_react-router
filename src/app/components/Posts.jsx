import React from 'react'
import PostsList from "./PostsList";
import Post from "./Post";
import query from 'query-string'
import _ from 'lodash'

const Posts = ({match, location}) => {
  const posts = [
    {id: 1, label: 'post 1'},
    {id: 2, label: 'post 2'},
    {id: 3, label: 'post 3'},
    {id: 5, label: 'чисбала'},
  ]

  const search = query.parse(location.search)
  const postId = match.params.postId
  console.log('search', search)
  const cropPosts = search ? _(posts).slice(0).take(search.count).value() : posts
  
  console.log('cropPosts', cropPosts)
  return (
    <>
      {postId ? (
          <Post posts={posts} id={postId}/>
      ) : (
          <PostsList posts={cropPosts}/>
      )}
    </>
  )
}

export default Posts
