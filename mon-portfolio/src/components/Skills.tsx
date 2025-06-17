// components/SkillsPage.jsx
'use client';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe, Cpu, Smartphone, Server, GitBranch, Figma, Terminal } from 'lucide-react';
import { Skill } from '@/types/portfolio';

const Skills = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

   const technicalSkills: Skill[] = [
    { name: "React/Next.js", level: 85, icon: <Code className="w-6 h-6" />, category: "Frontend" },
    { name: "TypeScript", level: 75, icon: <Code className="w-6 h-6" />, category: "Frontend" },
    { name: "Node.js", level: 80, icon: <Server className="w-6 h-6" />, category: "Backend" },
    { name: "Python", level: 70, icon: <Terminal className="w-6 h-6" />, category: "Backend" },
    { name: "UI/UX Design", level: 80, icon: <Palette className="w-6 h-6" />, category: "Design" },
    { name: "MySQL/MongoDB", level: 75, icon: <Database className="w-6 h-6" />, category: "Database" },
    { name: "React Native", level: 65, icon: <Smartphone className="w-6 h-6" />, category: "Mobile" },
    { name: "Git/GitHub", level: 85, icon: <GitBranch className="w-6 h-6" />, category: "Tools" },
    { name: "Figma", level: 75, icon: <Figma className="w-6 h-6" />, category: "Design" },
    { name: "AWS Basics", level: 60, icon: <Globe className="w-6 h-6" />, category: "Cloud" }
  ];

  const softSkills = [
    { name: "Résolution de problèmes", level: 90 },
    { name: "Collaboration", level: 85 },
    { name: "Communication", level: 80 },
    { name: "Gestion du temps", level: 75 },
    { name: "Adaptabilité", level: 85 },
    { name: "Créativité", level: 80 }
  ];

  const categories = [...new Set(technicalSkills.map(skill => skill.category))];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
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
                {category === "Frontend" && <Code className="w-6 h-6 mr-2 text-blue-600" />}
                {category === "Backend" && <Server className="w-6 h-6 mr-2 text-purple-600" />}
                {category === "Design" && <Palette className="w-6 h-6 mr-2 text-pink-600" />}
                {category === "Database" && <Database className="w-6 h-6 mr-2 text-amber-600" />}
                {category === "Mobile" && <Smartphone className="w-6 h-6 mr-2 text-green-600" />}
                {category === "Tools" && <GitBranch className="w-6 h-6 mr-2 text-gray-600" />}
                {category === "Cloud" && <Globe className="w-6 h-6 mr-2 text-cyan-600" />}
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
                  .filter(skill => skill.category === category)
                  .map((skill, idx) => (
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
                              skill.level > 75 ? 'bg-gradient-to-r from-green-500 to-teal-500' :
                              skill.level > 50 ? 'bg-gradient-to-r from-blue-500 to-indigo-500' :
                              'bg-gradient-to-r from-amber-500 to-orange-500'
                            }`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.1 }}
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
            {softSkills.map((skill, index) => (
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
                        skill.level > 80 ? 'bg-gradient-to-r from-green-500 to-teal-500' :
                        skill.level > 60 ? 'bg-gradient-to-r from-blue-500 to-indigo-500' :
                        'bg-gradient-to-r from-amber-500 to-orange-500'
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
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
              { name: "React", icon: "logos:react" },
              { name: "Next.js", icon: "logos:nextjs-icon" },
              { name: "TypeScript", icon: "logos:typescript-icon" },
              { name: "Node.js", icon: "logos:nodejs-icon" },
              { name: "Python", icon: "logos:python" },
              { name: "Git", icon: "logos:git-icon" },
              { name: "Figma", icon: "logos:figma" },
              { name: "Tailwind", icon: "logos:tailwindcss-icon" },
              { name: "MongoDB", icon: "logos:mongodb-icon" },
              { name: "MySQL", icon: "logos:mysql-icon" },
              { name: "AWS", icon: "logos:aws" },
              { name: "Vercel", icon: "logos:vercel-icon" }
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center">
                  <span className={`iconify text-4xl`} data-icon={tool.icon}></span>
                </div>
                <span className="text-sm font-medium text-gray-700">{tool.name}</span>
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
              En cours <span className="text-blue-400">d'apprentissage</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Docker",
                description: "Containerisation et orchestration pour des déploiements plus efficaces",
                progress: 40
              },
              {
                name: "GraphQL",
                description: "Alternative moderne à REST pour les APIs plus performantes",
                progress: 55
              },
              {
                name: "Tests Automatisés",
                description: "Jest, Cypress et Testing Library pour une meilleure qualité de code",
                progress: 65
              }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
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
                      transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
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
            <h3 className="text-xl font-medium mb-4">Une technologie que vous utilisez et qui n'apparaît pas ici ?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Je suis toujours ouvert à apprendre de nouvelles technologies en fonction des besoins de vos projets.
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