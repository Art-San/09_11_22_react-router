import React from 'react'
import { useHistory } from 'react-router-dom'
// useHistory (хук)
// PUSH- мщжно вернутся оратно в пост
// REPLACE - вернутся не получится

const Post = ({ id, posts }) => {
    const history = useHistory()
    const getPostById = (id) => {
        return posts.find((post) => post.id.toString() === id)
    }
    const handleSave = () => {
      history.push('/posts')

    }
    const post = getPostById(id)
      return (
          <>
              {' '}
              <h2>{post ? post.label : `Пост c этим id:${id} не найден`}</h2>
              <button
                  onClick={() => {
                      handleSave()
                  }}
              >
                  Вернутся к постам
              </button>
          </>
  )
}

export default Post