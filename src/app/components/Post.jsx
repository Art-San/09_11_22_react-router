import React from 'react'
import { useHistory } from 'react-router-dom'
// useHistory (хук) для переадресации пользователя на нужную страницу
// PUSH- мщжно вернутся оратно в пост
// REPLACE - вернутся не получится

const Post = ({ id, posts }) => {
    const history = useHistory()
    const getPostById = (id) => {
        return posts.find((post) => post.id.toString() === id)
    }
    const post = getPostById(id)
    const handleSave = () => {
    //  1.1 history.push('/posts')
      post ? history.push("/posts") : history.replace("/posts");

    }
    
      return (
          <>
              {' '}
              <h2>{post ? post.label : `Пост c этим id:${id} не найден`}</h2>
              <button
                  onClick={handleSave}
              >
                  Вернутся к постам
              </button>
              {/* 1.1<button
                  onClick={() => {
                      handleSave()
                  }}
              >
                  Вернутся к постам
              </button> */}
          </>
  )
}

export default Post