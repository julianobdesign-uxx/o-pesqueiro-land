import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import MenuSection from './components/MenuSection.jsx';
import Highlights from './components/Highlights.jsx';
import Sharing from './components/Sharing.jsx';
import Gallery from './components/Gallery.jsx';
import Reviews from './components/Reviews.jsx';
import Location from './components/Location.jsx';
import Footer from './components/Footer.jsx';
import CartBar from './components/CartBar.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';
import { useCart } from './hooks/useCart.js';

export default function App() {
  const { cart, lines, count, total, add, dec, clear } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <div id="top">
      <Header count={count} onOpenCart={() => setOpen(true)} />
      <main>
        <Hero />
        <About />
        <MenuSection cart={cart} onAdd={add} onDec={dec} />
        <Highlights cart={cart} onAdd={add} onDec={dec} />
        <Sharing onAdd={add} />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <Footer />
      {!open && <CartBar count={count} total={total} onOpen={() => setOpen(true)} />}
      <WhatsAppFab />
      <CartDrawer open={open} onClose={() => setOpen(false)} lines={lines} total={total} onAdd={add} onDec={dec} onClear={clear} />
    </div>
  );
}
