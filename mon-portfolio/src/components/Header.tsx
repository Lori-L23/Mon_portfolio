// components/Header.js
"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname() || '/'; // Fallback à '/' pour éviter undefined
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calcul de la progression de défilement pour la barre
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Liste des liens de navigation
  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Projets', href: '/projects' },
    { name: 'Compétences', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/">Lori.dev</Link>
          </motion.div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((item, index) => {
              // Déterminer si le lien est actif (sans fonction isActive)
              const isActiveLink =
                item.href.startsWith('#')
                  ? typeof window !== 'undefined' && window.location.hash === item.href
                  : pathname === item.href || pathname === `${item.href}/`;

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`text-gray-700 font-medium hover:text-blue-600 transition-colors relative ${
                      isActiveLink
                        ? 'text-blue-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600'
                        : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Bouton Menu Mobile */}
          <motion.button
            className="md:hidden p-2"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Barre de progression */}
      <motion.div
        className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 origin-left"
        style={{ scaleX: scrollProgress }}
      />

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="p-6 space-y-4">
              {navLinks.map((item) => {
                // Déterminer si le lien est actif pour le menu mobile
                const isActiveLink =
                  item.href.startsWith('#')
                    ? typeof window !== 'undefined' && window.location.hash === item.href
                    : pathname === item.href || pathname === `${item.href}/`;

                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link
                      href={item.href}
                      className={`block text-gray-700 font-medium hover:text-blue-600 transition-colors ${
                        isActiveLink ? 'text-blue-600' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}