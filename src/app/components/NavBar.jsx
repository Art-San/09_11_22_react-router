import React from 'react'
// ul>(li>a)*4

const NavBar = () => {
  return (
    <ul>
        <li>
            <a href="/">Главная</a>
        </li>
        <li>
            <a href="/signin">Вход в кабинет</a>
        </li>
        <li>
            <a href="/posts">Записи</a>
        </li>
        <li>
            <a href="/contacts">Контакты</a>
        </li>
    </ul>
  )
}

export default NavBar

