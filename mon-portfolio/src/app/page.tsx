'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion'; // AnimatePresence retiré
import {
  Github as GithubIcon,
  ExternalLink as ExternalLinkIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Code as CodeIcon,
  Palette as PaletteIcon,
  Database as DatabaseIcon,
  Globe as GlobeIcon,
  ChevronDown as ChevronDownIcon
} from 'lucide-react';


type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
};

type Skill = {
  name: string;
  level: number;
  icon: React.ReactNode;
};

const Portfolio = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { scrollYProgress } = useScroll();

  //   const scaleX = useSpring(scrollYProgress, {
  //     stiffness: 100,
  //     damping: 30,
  //     restDelta: 0.001
  //   }
  // );

  // Données du portfolio
  const projects: Project[] = [
    {
      id: 1,
      title: "Plateforme de Mise en Relation Élèves-Répétiteurs",
      description: "Plateforme web permettant aux élèves de trouver des répétiteurs qualifiés dans leur région avec système de réservation et paiement intégré",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      technologies: ["React.js", "Mysql", "Stripe", "Laravel", "Tailwind"],
      github: "https://github.com/Lori-L23/FilRouge",
      demo: "#"
    },
    {
      id: 2,
      title: "Système de Gestion de Tâches Collaboratives",
      description: "Application de gestion de projets en équipe avec attribution de tâches, suivi du progrès et communication en temps réel",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "MySql", "Laravel", "Tailwind"],
      github: "https://github.com/Lori-L23/Wen-brief5",
      demo: "#"
    },
    {
      id: 3,
      title: "Système de Gestion Scolaire",
      description: "Plateforme complète de gestion d'établissement scolaire avec gestion des élèves, enseignants, notes et emplois du temps",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
      technologies: ["Java", "Springboot", "MySQL(Laragon)", "Angular", "Bootstrap"],
      github: "https://gitlab.com/lorisky/gestion_scolaire_backend",
      demo: "#"
    }
  ];

  const skills: Skill[] = [
    { name: "React/Next.js", level: 80, icon: <CodeIcon className="w-6 h-6" /> },
    { name: "TypeScript", level: 60, icon: <CodeIcon className="w-6 h-6" /> },
    { name: "Figma", level: 55, icon: <PaletteIcon className="w-6 h-6" /> },
    { name: "Node.js", level: 75, icon: <DatabaseIcon className="w-6 h-6" /> },
    { name: "Python", level: 70, icon: <CodeIcon className="w-6 h-6" /> },
    { name: "Vercel", level: 60, icon: <GlobeIcon className="w-6 h-6" /> }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Hero Section
  const HeroSection = () => (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, #06b6d4 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Développeur
            </span>
            <br />
            <span className="text-gray-800">Full Stack</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Passionnée par la création d&apos;expériences numériques exceptionnelles avec les technologies modernes
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all text-center block"
              >
                Voir mes projets
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 hover:text-white transition-all text-center block"
              >
                Me contacter
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/20 rounded-full"
          animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDownIcon className="w-8 h-8 text-gray-400" />
      </motion.div>
    </section>
  );

  // About Section avec l'image optimisée
  const AboutSection = () => (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl overflow-hidden"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-4 bg-white rounded-2xl overflow-hidden">

                  <Image
                    src="/lori2.jpg"
                    alt="Portrait professionnel de Lori"
                    width={320}
                    height={320}
                    className="object-cover object-top w-full h-full"
                    quality={90}
                    priority
                    style={{
                      filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                      transform: 'translateZ(0)'
                    }}
                  />
                </div>
                <div className="absolute inset-0 rounded-3xl border-4 border-white/10 pointer-events-none" />
              </motion.div>
              <div className="absolute inset-0 rounded-3xl shadow-[0_25px_50px_-12px_rgba(79,70,229,0.3)]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Développeuse passionnée depuis 3+ ans
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Je suis une développeuse full-stack spécialisée dans la création d&apos;applications web modernes
              et performantes. Mon expertise couvre l&apos;ensemble de la stack technologique, du front-end
              interactif au back-end robuste.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Toujours à l&apos;affût des dernières tendances technologiques, j&apos;aime relever de nouveaux
              défis et créer des solutions innovantes qui répondent aux besoins réels des utilisateurs.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Projets réalisés", value: "10+" },
                { label: "Clients satisfaits", value: "7+" },
                { label: "Années d'expérience", value: "2+" },
                { label: "Technologies maîtrisées", value: "10+" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-gray-50 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  // Projects Section
  const ProjectsSection = () => (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // Skills Section
  const SkillsSection = () => (
    <section id="competences" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Compétences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-gray-50 p-6 rounded-2xl"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                <span className="ml-auto text-blue-600 font-bold">{skill.level}%</span>
              </div>

              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // Contact Section
  const ContactSection = () => (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contactez-moi
          </h2>
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
              Vous avez un projet en tête ? Je serais ravi de discuter avec vous et de voir
              comment nous pouvons travailler ensemble pour le concrétiser.
            </p>

            <div className="space-y-6">
              {[
                { icon: <MailIcon className="w-6 h-6" />, text: "Atefalori@icloud.com" },
                { icon: <PhoneIcon className="w-6 h-6" />, text: "+237 6 77 29 64 72" },
                { icon: <MapPinIcon className="w-6 h-6" />, text: "Douala, Littoral" }
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
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.input
                  type="text"
                  placeholder="Nom"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-gray-300"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-gray-300"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.input
                type="text"
                placeholder="Sujet"
                className="w-full p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-gray-300"
                whileFocus={{ scale: 1.02 }}
              />

              <motion.textarea
                placeholder="Message"
                rows={6}
                className="w-full p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-gray-300 resize-none"
                whileFocus={{ scale: 1.02 }}
              />

              <motion.button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => alert('Merci pour votre message! Je vous répondrai bientôt.')}
              >
                Envoyer le message
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="font-sans">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;