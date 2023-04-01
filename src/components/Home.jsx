/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/void-dom-elements-no-children */
import React from 'react';
import MainPage from './MainPage';
import NavBar from './navBar/NavBar';
import houseHero from '../images/house_hero.svg';
import Footer from './Footer';

const Home = () => (
  <div>
    <NavBar />

    <section className="dark:bg-gray-100 dark:text-gray-800 p-4 w-full">
      <div className="container flex flex-col justify-center p-6 mx-auto
      sm:py-12 lg:py-24 lg:flex-row lg:justify-between xl:ml-52"
      >
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            TrustEstate
            {' '}
            <br />
            <span className="dark:text-button-color">Masterpiece </span>
            House Designs
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Find your next dream home with our master piece house designs from
            <br className="hidden md:inline lg:hidden" />
            our designers and architects. don't wast time hurry!!!
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-button-color dark:text-gray-900">Subscribe</a>
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Read more</a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src={houseHero} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
      </div>
    </section>

    <MainPage />

    <Footer />
  </div>
);

export default Home;
