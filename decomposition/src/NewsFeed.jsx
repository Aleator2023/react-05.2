/** News feed component displaying list of news items with icons, titles, and links. */

import React from 'react';
import NewsItem from './NewsItem';

function NewsFeed() {
  const newsItems = [
    { id: 1, icon: "path/to/icon1.png", text: "News Item 1", link: "/news/1" },
    // ... other news items
  ];

  return (
    <div className="news-feed">
      {newsItems.map((item) => (
        <NewsItem key={item.id} icon={item.icon} text={item.text} link={item.link} />
      ))}
    </div>
  );
}

export default NewsFeed;