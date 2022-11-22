import React from "react";
import { useHistory } from "react-router-dom";

const Post = ({ post, id}) => {
    // Получение истории
    const history = useHistory()

        // Создаём функцию для перехода к списку постов
        const goToList = () => {
            post ? history.push("/posts") : history.replace("/posts")
        };
    return (
        <>
            <button onClick={goToList} type='button'>
                В список записей
            </button>
            <h1>{post ? post.title : `post with id: ${id} is not found`}</h1>;
        </>
    )
        
};
export default Post;