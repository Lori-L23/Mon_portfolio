// src/app/components/Header.tsx
import Link from 'next/link';
import { Github, Mail, Phone, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
    // Utilisation du hook usePathname pour obtenir le chemin actuel
    const pathname = usePathname();
    // État pour gérer l'ouverture/fermeture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

   // Fonction pour vérifier si le lien est actif
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Lori.dev
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              À propos
            </Link>
            <Link href="/projects" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              Projets
            </Link>
            <Link href="/skills" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              Compétences
            </Link>
            <Link href="#contact" className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Menu mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100">
          <nav className="p-6 space-y-4">
            <Link 
              href="/about" 
              className="block text-gray-700 font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link 
              href="/projects" 
              className="block text-gray-700 font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projets
            </Link>
            <Link 
              href="/skills" 
              className="block text-gray-700 font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Compétences
            </Link>
            <Link 
              href="#contact" 
              className="block text-gray-700 font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}