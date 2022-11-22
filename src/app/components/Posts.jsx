import React, { useState, useEffect } from "react";
import Post from "./Post";
import PostsList from "./PostsList";
import qs from 'query-string'


const Posts = ({ match, location, history }) => {
  const [showOffer, setShowOffer] = useState(false)
  console.log('showOffer', showOffer)
    const posts = [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
        { id: 3, title: "Post 3" }
    ];
    
    const search = qs.parse(location.search)
    const { fromUrl, block}= search
    console.log('block',  fromUrl, '||', block)

    useEffect(() => {
      if (!showOffer && fromUrl && block) {
          setShowOffer(true);
      }
  }, [fromUrl, block, showOffer]);

    const postId = match.params.postId;
    const getPost = (postId) => posts.find(({ id }) => String(id) === postId)

    // Создаём функцию для перехода к списку постов
    const handleMoveToList = (hasPost) => {
      // Вызываем метод истории
      // history.push("/posts");
      // Передаём значение и проверяем есть ли запись. Если нет то заменяем историю
      hasPost ? history.push("/posts") : history.replace("/posts")
  };

    return (
      <>
      {showOffer && <div>Специальное предложение</div>}
      {postId ? (
        <Post
            goToList={handleMoveToList}
            post={getPost(postId)} 
            id={postId} />
    ) : (
        <PostsList posts={posts} />
    )}
      </>
    )
};

export default Posts;