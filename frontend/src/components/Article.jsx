import React from 'react';

const Article = ({ article }) => (
  <section>
    <h2>{article.title}</h2>
    <p>{article.content}</p>
  </section>
);

export default Article;
