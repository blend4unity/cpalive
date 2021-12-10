import React from 'react';
import './article.css';


const Article = ({ imgUrl, text, text2 }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        {/*<p>{date}</p> */}
        <h3>{text}</h3>
        <p>{text2}</p>
      </div>
      <p className='affliate-btn'><a href="http://affiliate.ltpldigital.com/m/access">Join US</a></p>
    </div>
  </div>
);

export default Article;
{/* const Article = ({ imgUrl, date, text, text2 })*/}