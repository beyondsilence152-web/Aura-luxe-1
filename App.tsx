/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Collections } from './components/Collections';
import { Products } from './components/Products';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { InstagramGallery } from './components/Instagram';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

// Drawers and Modals
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { LoginModal } from './components/LoginModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { NotificationBanner } from './components/NotificationBanner';
import { ShopPage } from './components/ShopPage';
import { ProductDetailsPage } from './components/ProductDetailsPage';
import { AdminDashboard } from './components/AdminDashboard';

function AppContent() {
  const { theme, currentView } = useApp();

  return (
    <div 
      id="app-root" 
      className={`min-h-screen font-sans selection:bg-gold-500 selection:text-stone-950 overflow-x-hidden antialiased transition-colors duration-500 ${
        theme === 'dark' 
          ? 'bg-[#050505] text-[#f5f2ed]' 
          : 'bg-[#FAF8F5] text-[#1C1814]'
      }`}
    >
      
      {/* Custom Notifications layer */}
      <NotificationBanner />

      {/* Dynamic Modals & Drawers */}
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <LoginModal />
      <ProductDetailModal />

      {/* Main Sticky Luxury Navigation Bar */}
      <Navbar />

      {/* Content View */}
      <main id="main-content">
        {currentView === 'admin' ? (
          <AdminDashboard />
        ) : currentView === 'shop' ? (
          <ShopPage />
        ) : currentView === 'product' ? (
          <ProductDetailsPage />
        ) : (
          <>
            {/* Section 2: Immersive Hero Section */}
            <Hero />

            {/* Section 3: Curated Featured Collections */}
            <Collections />

            {/* Section 4 & 5: Interactive Best Sellers & New Arrivals (Boutique Salon) */}
            <Products />

            {/* Section 6: Brand Core Values - Why Choose Aura Luxe */}
            <WhyChooseUs />

            {/* Section 7: Curated Testimonials - Customer Reviews */}
            <Reviews />

            {/* Section 8: Social Spotlight - Instagram Shop-The-Look Gallery */}
            <InstagramGallery />

            {/* Section 9: Private Registry Subscription - Newsletter Signup */}
            <Newsletter />
          </>
        )}
      </main>

      {/* Section 10: Luxurious Multi-Story Footer with Boutique search */}
      <Footer />

    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
