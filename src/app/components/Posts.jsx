import React, { useState, useEffect } from "react";
import Post from "./Post";
import PostsList from "./PostsList";
import qs from 'query-string'


const Posts = ({ match, location }) => {
  const [showOffer, setShowOffer] = useState(false)
  console.log('showOffer', showOffer)
    const posts = [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
        { id: 3, title: "Post 3" }
    ];
    // if (!showOffer && fromUrl && block)
    const search = qs.parse(location.search)
    const { fromUrl, block}= search
    console.log('block',  fromUrl, '||', block)

    useEffect(() => {
      if (!showOffer && fromUrl && block) {
          setShowOffer(true);
      }
  }, [fromUrl, block, showOffer]);

    const postId = match.params.postId;
    const getPost = (postId) => posts.find(({ id }) => String(id) === postId);

    return (
      <>
      {showOffer && <div>Специальное предложение</div>}
      {postId ? (
        <Post post={getPost(postId)} id={postId} />
    ) : (
        <PostsList posts={posts} />
    )}
      </>
    )
};

export default Posts;