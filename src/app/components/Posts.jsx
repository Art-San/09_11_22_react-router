import React from "react";
import Post from "./Post";
import PostsList from "./PostsList";
import { useParams } from "react-router-dom"
import Offer from "./Offer";


const Posts = ({ location }) => {
  const { postId } = useParams(); // Можно сразу получить postId
  const getPost = (postId) => posts.find(({ id }) => String(id) === postId)
  
    const posts = [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
        { id: 3, title: "Post 3" }
    ];

  
    return (
      <>
      <Offer />
      {/* {showOffer && <div>Специальное предложение</div>} */}
      {postId ? (
        <Post
            post={getPost(postId)} 
            id={postId} />
    ) : (
        <PostsList posts={posts} />
    )}
      </>
    )
};

export default Posts;