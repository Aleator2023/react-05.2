// app.js
import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import RecommendationSection from './RecommendationSection';
import NewsFeed from './NewsFeed';
import CurrencyWidget from './CurrencyWidget';
import WeatherWidget from './WeatherWidget';
import AdBanner from './AdBanner';
import FooterLinks from './FooterLinks';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <div className="main-content">
        <RecommendationSection />
        <NewsFeed />
      </div>
      <div className="widgets">
        <CurrencyWidget />
        <WeatherWidget />
      </div>
      <AdBanner />
      <FooterLinks />
    </div>
  );
}

export default App;
