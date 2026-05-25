/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import PepperhoodSection from './components/PepperhoodSection';
import ShopSection from './components/ShopSection';
import HeritageSection from './components/HeritageSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] flex flex-col font-sans antialiased text-[#1F0206] select-none">
      <Navbar />
      <Hero />
      <main className="flex-1">
        <ProductsSection />
        <PepperhoodSection />
        <ShopSection />
        <HeritageSection />
      </main>
      <Footer />
    </div>
  );
}

