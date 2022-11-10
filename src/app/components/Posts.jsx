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
  ]

  // const string = [
  //   {ifso: 'car', label: 'Машина'},
  //   {ifso: 'bar', label: 'Бар без пива'},
  //   {ifso: 'dar', label: 'Дар такойкакой есть'},
  // ]
  
  const search = query.parse(location.search)
  const postId = match.params.postId
  // console.log('search', search.ifso)
  const cropPosts = search ? _(posts).slice(0).take(search.count).value() : posts
  // const cropPosts = string.filter((e, i) => e.ifso === search.ifso)
  // console.log('cropPosts', cropPosts)
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
