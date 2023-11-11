import React from 'react'
import style from './ErrorPage.module.css'

const ErrorPage = () => {
  return (
    <div className={style.container}>
      <div className={style.errorContainer}>
        <h2 className={style.title}>404</h2>
        <p className={style.description}>Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience.</p>
        <button className={style.btn}>Go Home</button>
      </div>
    </div>
  )
}

export default ErrorPage