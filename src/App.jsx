import React from 'react'

// Import main pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Products from './pages/Products.jsx';

// Import nested product category pages
import Men from './productSection/Men.jsx';
import Women from './productSection/Women.jsx';
import Kids from './productSection/Kids.jsx';

// Import error and dynamic detail pages
import PageDetail from './error/PageDetail.jsx';
import ErrorIndicator from './error/ErrorIndicator.jsx';

// Import common UI components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Import routing components from react-router-dom
import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    // Main container (flex column layout for navbar → content → footer)
    <div className='overflow-hidden flex flex-col'>

      {/* Navigation bar visible on all pages */}
      <Navbar />

      {/* Routes define different pages of the application */}
      <Routes>

        {/* Home page route */}
        <Route path="/" element={<Home />} />

        {/* Static routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic route (URL parameter :id) */}
        {/* Example: /contact/123 */}
        <Route path="/contact/:id" element={<PageDetail />} />

        {/* Nested routing for product categories */}
        <Route path="/products" element={<Products />}>

          {/* Child routes rendered inside Products component */}
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />

        </Route>

        {/* Catch-all route for undefined paths (404 page) */}
        <Route path="*" element={<ErrorIndicator />} />

      </Routes>

      {/* Footer visible on all pages */}
      <Footer />

    </div>
  )
}

export default App;
