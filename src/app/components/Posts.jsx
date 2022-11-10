import React, { useState, useEffect } from "react";
import PostsList from "./PostsList";
import Post from "./Post";
import query from 'query-string'
// Перейдём на адрес “/posts?fromUrl=https://example.partner.com&block=pr_1”

const Posts = ({ match, location }) => {
  const [showOffer, setShowOffer] = useState(false);

  const posts = [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
      { id: 3, title: "Post 3" }
  ];

  const search = query.parse(location.search);
  const { fromUrl, block } = search;
  console.log('fromUrl, block', fromUrl, block)

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
  );
};

export default Posts;
