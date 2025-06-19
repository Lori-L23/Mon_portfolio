// components/SkillsPage.jsx
'use client';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe, Smartphone, Server, GitBranch, Figma, Terminal } from 'lucide-react';
import { Skill } from '@/types/portfolio';
import Link from 'next/link';
import { PenTool, Cloud, Layout, FileCode, FileText, PaintBucket } from 'lucide-react';

const Skills = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const technicalSkills: Skill[] = [
    { name: 'React/Next.js', level: 85, icon: <Code className="w-6 h-6" />, category: 'Frontend' },
    { name: 'Angular', level: 70, icon: <Code className="w-6 h-6" />, category: 'Frontend' },
    { name: 'JavaScript', level: 80, icon: <Code className="w-6 h-6" />, category: 'Frontend' },
    { name: 'TypeScript', level: 75, icon: <Code className="w-6 h-6" />, category: 'Frontend' },
    { name: 'Node.js', level: 80, icon: <Server className="w-6 h-6" />, category: 'Backend' },
    { name: 'Python', level: 70, icon: <Terminal className="w-6 h-6" />, category: 'Backend' },
    { name: 'Laravel', level: 70, icon: <Terminal className="w-6 h-6" />, category: 'Backend' },
    { name: 'MySQL/Laragon', level: 75, icon: <Database className="w-6 h-6" />, category: 'Database' },
    { name: 'Redis', level: 60, icon: <Database className="w-6 h-6" />, category: 'Database' },
    { name: 'React Native', level: 65, icon: <Smartphone className="w-6 h-6" />, category: 'Mobile' },
    { name: 'Git/GitHub', level: 85, icon: <GitBranch className="w-6 h-6" />, category: 'Tools' },
    { name: 'Figma', level: 75, icon: <Figma className="w-6 h-6" />, category: 'Design' },
  ];

  const softSkills = [
    { name: 'Résolution de problèmes', level: 90 },
    { name: 'Collaboration', level: 85 },
    { name: 'Communication', level: 80 },
    { name: 'Gestion du temps', level: 75 },
    { name: 'Adaptabilité', level: 85 },
    { name: 'Créativité', level: 80 },
  ];

  const categories = [...new Set(technicalSkills.map((skill) => skill.category))];

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
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Mes Compétences
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Un aperçu de mes compétences techniques et transversales
          </motion.p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Compétences <span className="text-blue-600">Techniques</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Skills by Category */}
          {categories.map((category, index) => (
            <motion.div
              key={category}
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
                {category === 'Frontend' && <Code className="w-6 h-6 mr-2 text-blue-600" />}
                {category === 'Backend' && <Server className="w-6 h-6 mr-2 text-purple-600" />}
                {category === 'Design' && <Palette className="w-6 h-6 mr-2 text-pink-600" />}
                {category === 'Database' && <Database className="w-6 h-6 mr-2 text-amber-600" />}
                {category === 'Mobile' && <Smartphone className="w-6 h-6 mr-2 text-green-600" />}
                {category === 'Tools' && <GitBranch className="w-6 h-6 mr-2 text-gray-600" />}
                {category === 'Cloud' && <Globe className="w-6 h-6 mr-2 text-cyan-600" />}
                {category}
              </h3>
              <motion.div
                className="grid md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {technicalSkills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="bg-gray-50 p-6 rounded-xl"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="text-blue-600 mr-3">{skill.icon}</div>
                        <h4 className="text-lg font-semibold text-gray-800">{skill.name}</h4>
                        <span className="ml-auto text-blue-600 font-bold">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <motion.div
                            className={`h-3 rounded-full ${
                              skill.level > 75
                                ? 'bg-gradient-to-r from-green-500 to-teal-500'
                                : skill.level > 50
                                ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                                : 'bg-gradient-to-r from-amber-500 to-orange-500'
                            }`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Compétences <span className="text-blue-600">Transversales</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {softSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4">{skill.name}</h3>
                <div className="relative mb-2">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      className={`h-3 rounded-full ${
                        skill.level > 80
                          ? 'bg-gradient-to-r from-green-500 to-teal-500'
                          : skill.level > 60
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                          : 'bg-gradient-to-r from-amber-500 to-orange-500'
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Débutant</span>
                  <span>Intermédiaire</span>
                  <span>Avancé</span>
                  <span>Expert</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Outils & <span className="text-blue-600">Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { name: 'React', icon: <Code className="w-8 h-8 text-blue-600" />, link: 'https://react.dev' },
              { name: 'Angular', icon: <Code className="w-8 h-8 text-blue-600" />, link: 'https://angular.io' },
              { name: 'Next.js', icon: <FileCode className="w-8 h-8 text-blue-600" />, link: 'https://nextjs.org' },
              {
                name: 'JavaScript',
                icon: <Code className="w-8 h-8 text-blue-600" />,
                link: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
              },
              {
                name: 'TypeScript',
                icon: <FileText className="w-8 h-8 text-blue-600" />,
                link: 'https://www.typescriptlang.org',
              },
              { name: 'Node.js', icon: <Server className="w-8 h-8 text-blue-600" />, link: 'https://nodejs.org' },
              { name: 'Python', icon: <Code className="w-8 h-8 text-blue-600" />, link: 'https://www.python.org' },
              { name: 'Java', icon: <Code className="w-8 h-8 text-blue-600" />, link: 'https://www.java.com' },
              {
                name: 'HTML5',
                icon: <FileCode className="w-8 h-8 text-blue-600" />,
                link: 'https://developer.mozilla.org/fr/docs/Web/HTML',
              },
              {
                name: 'CSS3',
                icon: <PaintBucket className="w-8 h-8 text-blue-600" />,
                link: 'https://developer.mozilla.org/fr/docs/Web/CSS',
              },
              {
                name: 'Bootstrap',
                icon: <Layout className="w-8 h-8 text-blue-600" />,
                link: 'https://getbootstrap.com',
              },
              {
                name: 'Tailwind CSS',
                icon: <Layout className="w-8 h-8 text-blue-600" />,
                link: 'https://tailwindcss.com',
              },
              { name: 'Sass', icon: <PaintBucket className="w-8 h-8 text-blue-600" />, link: 'https://sass-lang.com' },
              {
                name: 'GitHub',
                icon: <GitBranch className="w-8 h-8 text-blue-600" />,
                link: 'https://github.com',
              },
              { name: 'Git', icon: <GitBranch className="w-8 h-8 text-blue-600" />, link: 'https://git-scm.com' },
              { name: 'Figma', icon: <PenTool className="w-8 h-8 text-blue-600" />, link: 'https://www.figma.com' },
              {
                name: 'MongoDB',
                icon: <Database className="w-8 h-8 text-blue-600" />,
                link: 'https://www.mongodb.com',
              },
              { name: 'MySQL', icon: <Database className="w-8 h-8 text-blue-600" />, link: 'https://www.mysql.com' },
              { name: 'AWS', icon: <Cloud className="w-8 h-8 text-blue-600" />, link: 'https://aws.amazon.com' },
              { name: 'Vercel', icon: <Cloud className="w-8 h-8 text-blue-600" />, link: 'https://vercel.com' },
            ].map((tool) => (
              <motion.div
                key={tool.name}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center">{tool.icon}</div>
                <Link
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {tool.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              En cours <span className="text-blue-400">d&apos;apprentissage</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Docker',
                description: 'Containerisation et orchestration pour des déploiements plus efficaces',
                progress: 30,
              },
              {
                name: 'GraphQL',
                description: 'Alternative moderne à REST pour les APIs plus performantes',
                progress: 35,
              },
              {
                name: 'Tests Automatisés',
                description: 'Jest, Cypress et Testing Library pour une meilleure qualité de code',
                progress: 25,
              },
            ].map((item) => (
              <motion.div
                key={item.name}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                <p className="text-gray-300 mb-6">{item.description}</p>
                <div className="relative">
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                  </div>
                  <div className="text-right mt-1 text-sm text-blue-200">{item.progress}%</div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-medium mb-4">
              Une technologie que vous utilisez et qui n&apos;apparaît pas ici ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Je suis toujours ouvert à apprendre de nouvelles technologies en fonction des besoins
              de vos projets.
            </p>
            <motion.button
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Parlons-en ensemble
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;