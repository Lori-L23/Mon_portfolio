// app/contact/page.js
"use client";

import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contactez-moi</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">Discutons de votre projet</h3>
            <p className="text-lg mb-8 text-gray-300 leading-relaxed">
              Vous avez un projet en tête ? Je serais ravie de discuter avec vous et de voir
              comment nous pouvons travailler ensemble pour le concrétiser.
            </p>
            <div className="space-y-6">
              {[
                { icon: <MailIcon className="w-6 h-6" />, text: 'Atefalori@icloud.com' },
                { icon: <PhoneIcon className="w-6 h-6" />, text: '+237 6 77 29 64 72' },
                { icon: <MapPinIcon className="w-6 h-6" />, text: 'Douala, Littoral' },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="text-blue-400 mr-4">{contact.icon}</div>
                  <span className="text-lg">{contact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-lg text-gray-300">
              <p>Veuillez envoyer un email à <a href="mailto:Atefalori@icloud.com" className="text-blue-400 hover:underline">Atefalori@icloud.com</a> pour me contacter.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}