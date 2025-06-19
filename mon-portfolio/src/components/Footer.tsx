"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GithubIcon, MailIcon, PhoneIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Branding */}
          <h3 className="text-2xl font-bold mb-4">Lori.dev</h3>
          <p className="text-gray-400 mb-6">
            Développeuse Full Stack passionnée par l'innovation
          </p>

          {/* Navigation Links */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Compétences
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-400 hover:text-blue-400 transition-colors">
                  À Propos
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {[
              { Icon: GithubIcon, href: 'https://github.com/Lori-L23', label: 'GitHub' },
              { Icon: MailIcon, href: 'mailto:Atefalori@icloud.com', label: 'Email' },
              { Icon: PhoneIcon, href: 'tel:+237677296472', label: 'Phone' },
            ].map(({ Icon, href, label }, index) => (
              <motion.a
                key={index}
                href={href}
                aria-label={label}
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 Lori.dev. Tous droits réservés.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}