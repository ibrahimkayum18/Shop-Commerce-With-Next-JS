import Navbar from '@/components/shared/Navbar';
import Product from '@/components/shared/Product';
import Banner from '@/components/ui/Banner';
import TopHeader from '@/components/ui/TopHeader';
import React from 'react';

const HomePage = () => {
  return (
    <div className='min-h-screen relative'>
      <TopHeader />
      <Navbar />
      <Banner />
      <Product />
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;