import React from 'react';
import "./articles.css";


const Articles = ({imageUrl, date, title}) => {
  return (
    <div className='blog-article'>
     <div blog-aricle-image>
      <img src={imageUrl} alt="blog" />
     </div>

     <div className='article-content'>
      <div>
        <p>{date}</p>
        <h3>{title}</h3>
      </div>

      <p>Read Full Article</p>
     </div>
    </div>
  )
}

export default Articles;