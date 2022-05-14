import React from 'react';
import Collection from '../../component/Collection';
import Header from '../../component/Header';
import MostViewProducts from '../../component/MostViewProducts';
import Slide from '../../component/Slide';
import Popular from '../../component/Popular';
import TopCategory from '../../component/TopCategory';
import EndOfSeason from '../../component/EndOfSeason';
import RecentViewedProducts from '../../component/RecentViewedProdcuts';
import Footer from '../../component/Footer';
import CookieAsk from '../../component/CookieAsk';
import BackToTop from '../../component/BackToTop';

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <Slide />
      <Collection />
      <section className="section">
        <MostViewProducts />
        <TopCategory />
        <Popular />
        <EndOfSeason />
        <RecentViewedProducts />
      </section>
      <Footer />
      <CookieAsk />
      <BackToTop />
    </div>
  );
};

export default HomePage;
