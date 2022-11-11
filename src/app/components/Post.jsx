import React from 'react'

// PUSH: может вернутся на предыдущюю странницу
// REPLACE: не возможно вернутся на предыдущую страницу
const Post = ({ id, posts, history }) => {
    const getPostById = (id) => {
        return posts.find((post) => post.id.toString() === id)
    }
    const handleSave = () => {
      history.replace('/posts')

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