/** Single news item component used within NewsFeed, accepts icon, text, and link as props. */



/**
 * Represents a single news item with an icon, text, and link.
 * @param {string} props.icon - URL of the news item icon.
 * @param {string} props.text - Text of the news item.
 * @param {string} props.link - URL that the news item will link to.
 */

import React from 'react';

function NewsItem({ icon, text, link }) {
  return (
    <div className="news-item">
      <img src={icon} alt="News" />
      <p>{text}</p>
      <a href={link}>Read more...</a>
    </div>
  );
}

export default NewsItem;