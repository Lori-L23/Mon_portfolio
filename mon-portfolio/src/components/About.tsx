// components/AboutPage.jsx
'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe, Award, Briefcase, User, Star, Plus } from 'lucide-react';
import { Service, TimelineItem, Certification } from '@/types/portfolio';
import CertificationsModal from './CertificationsModal';
import CertificationForm from './CertificationForm';
import { useState } from 'react';

const About = () => {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingCert, setEditingCert] = useState<Certification | null>(null);
  const [certifications, setCertifications] = useState<Certification[]>([
    {
      id: 1,
      title: 'Developpement Web',
      issuer: 'InchClass',
      date: '2025-06-04',
      link: 'https://coursera.org/verify/REACT123',
      image: '/public/attestation1.png',
    },
  
  ]);

  // Simuler l'authentification
  const isAuthenticated = true; // Change à false pour tester en tant que visiteur

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  const fadeInUpDelayed = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const timeline: TimelineItem[] = [
    {
      year: 'Présent',
      title: 'Développeuse Web Full Stack ',
      description: 'Création d’applications web sur mesure pour divers clients',
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
    },
    {
      year: '2024',
      title: 'Stage Intensif en Développement',
      description: 'Apprentissage des technologies modernes (Java, Angular, etc.)',
      icon: <Code className="w-5 h-5 text-purple-600" />,
    },
    {
      year: '2023',
      title: 'Premiers Pas en Programmation',
      description: 'Découverte du développement web via des projets personnels',
      icon: <User className="w-5 h-5 text-cyan-600" />,
    },
  ];

  const services: Service[] = [
    {
      title: 'Développement Frontend',
      description: 'Interfaces utilisateur réactives et accessibles avec React/Next.js',
      icon: <Palette className="w-8 h-8 text-blue-600" />,
    },
    {
      title: 'Backend & API',
      description: 'Architecture robuste et sécurisée avec Node.js et bases de données',
      icon: <Database className="w-8 h-8 text-purple-600" />,
    },
    {
      title: 'Solutions Cloud',
      description: 'Déploiement et optimisation d’applications sur Vercel, AWS',
      icon: <Globe className="w-8 h-8 text-cyan-600" />,
    },
  ];

  const handleCVClick = () => {
    const cvPath = '/CV1.pdf';
    if (isAuthenticated) {
      const link = document.createElement('a');
      link.href = cvPath;
      link.download = 'CV1.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(cvPath, '_blank');
    }
  };

  const handleAddCertification = (cert: Certification) => {
    setCertifications((prev) => {
      if (editingCert && cert.id === editingCert.id) {
        return prev.map((c) => (c.id === cert.id ? cert : c));
      }
      return [...prev, cert];
    });
    setEditingCert(null);
  };

  const handleEditCertification = (cert: Certification) => {
    setEditingCert(cert);
    setIsFormModalOpen(true);
  };

  const handleDeleteCertification = (id: number) => {
    setCertifications((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, #06b6d4 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
        />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            // transition={fadeInUp.transition}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              À propos
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={fadeInUpDelayed.initial}
            animate={fadeInUpDelayed.animate}
            // transition={fadeInUpDelayed.transition}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Découvrez mon parcours, mes valeurs et ma passion pour le développement
          </motion.p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <motion.div
                  className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-[url('/profile.jpg')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">👩‍💻</div>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ rotate: 5 }}
                >
                  <div className="flex items-center">
                    <Award className="w-8 h-8 text-yellow-500 mr-3" />
                    <div>
                      <div className="text-2xl font-bold text-gray-800">3+</div>
                      <div className="text-sm text-gray-600">Années d’expérience</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Mon <span className="text-blue-600">Parcours</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Passionnée par la technologie depuis mon plus jeune âge, j’ai transformé cette passion en carrière. Mon
                parcours atypique m’a permis de développer une approche unique et créative du développement web.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Je crois en l’apprentissage continu et passe plusieurs heures par semaine à me tenir au courant des
                dernières avancées technologiques. Mon objectif ? Créer des solutions qui allient performance, élégance et
                expérience utilisateur exceptionnelle.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={handleCVClick}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isAuthenticated ? 'Télécharger mon CV' : 'Voir mon CV'}
                </motion.button>
                <motion.button
                  onClick={() => setIsCertModalOpen(true)}
                  className="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir mes certifications
                </motion.button>
                {isAuthenticated && (
                  <motion.button
                    onClick={() => {
                      setEditingCert(null);
                      setIsFormModalOpen(true);
                    }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Ajouter une certification
                  </motion.button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Mon <span className="text-blue-600">Expérience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={`w-1/2 p-6 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="text-blue-600 font-bold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center z-10">
                    {item.icon}
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Ce que je <span className="text-blue-600">propose</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Mes <span className="text-blue-400">Valeurs</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Qualité',
                description: 'Un code propre, maintenable et testé est la base de tout projet réussi',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Innovation',
                description: 'Toujours à la recherche des meilleures solutions technologiques',
                color: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Collaboration',
                description: 'Écoute active et communication claire pour des projets réussis',
                color: 'from-amber-500 to-orange-500',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <div
                  className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center bg-gradient-to-r ${value.color}`}
                >
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      {isCertModalOpen && (
        <CertificationsModal
          certifications={certifications}
          onClose={() => setIsCertModalOpen(false)}
          onEdit={handleEditCertification}
          onDelete={handleDeleteCertification}
          isAuthenticated={isAuthenticated}
        />
      )}
      {isFormModalOpen && (
        <CertificationForm
          onSubmit={handleAddCertification}
          onClose={() => {
            setIsFormModalOpen(false);
            setEditingCert(null);
          }}
          initialData={editingCert}
        />
      )}
    </div>
  );
};

export default About;