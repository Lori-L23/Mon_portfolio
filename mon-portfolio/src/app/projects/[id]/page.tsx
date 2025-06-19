// app/projects/[id]/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Github as GithubIcon, ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { projects, Project } from '@/components/ProjectsData';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react'; // Importer use depuis React

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

interface ProjectDetailProps {
  params: Promise<{ id: string }>; // Typage correct pour params comme Promise
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  // Résoudre la Promise avec React.use()
  const resolvedParams = use(params);
  const project = projects.find((p) => p.id === parseInt(resolvedParams.id));

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 mt-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {project.category}
          </motion.p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="relative h-96">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                onError={(e) => {
                  console.error(`Erreur de chargement de l'image: ${project.image}`);
                  e.currentTarget.src = '/images/fallback.jpg';
                }}
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Description du projet</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Technologies utilisées</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Fonctionnalités principales</h2>
              <ul className="list-disc pl-5 text-gray-600 mb-6">
                {getFeatures(project.id).map((feature, index) => (
                  <li key={index} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex gap-6">
                <a
                  href={project.github}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="w-5 h-5 mr-2" />
                  Voir le code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLinkIcon className="w-5 h-5 mr-2" />
                  Voir la démo
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <Link
              href="/projects"
              className="inline-block px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Retour aux projets
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Fonction pour fournir des fonctionnalités spécifiques à chaque projet
function getFeatures(projectId: number): string[] {
  switch (projectId) {
    case 1:
      return [
        'Recherche de répétiteurs par localisation et matière',
        'Système de réservation en ligne',
        'Paiement sécurisé via Stripe',
        'Tableau de bord pour élèves et répétiteurs',
      ];
    case 2:
      return [
        'Attribution et suivi des tâches en équipe',
        'Communication en temps réel via chat',
        'Tableau Kanban pour la gestion des projets',
        'Notifications personnalisées',
      ];
    case 3:
      return [
        'Gestion des profils élèves et enseignants',
        'Saisie et consultation des notes',
        'Génération d’emplois du temps',
        'Rapports administratifs',
      ];
    case 4:
      return [
        'Catalogue interactif de produits agroalimentaires',
        'Recommandations basées sur la géolocalisation',
        'Marketplace pour producteurs et consommateurs',
        'Paiement en ligne via Stripe',
      ];
    case 5:
      return [
        'Authentification sécurisée avec JWT',
        'Gestion des rôles (admin, utilisateur)',
        'API RESTful pour la gestion des profils',
        'Tableau de bord d’administration',
      ];
    case 6:
      return [
        'Création de CV avec modèles personnalisables',
        'Exportation en PDF',
        'Interface utilisateur intuitive',
        'Sauvegarde des brouillons (en cours)',
      ];
    case 7:
      return [
        'Présentation de solutions écoresponsables',
        'Calcul d’impact carbone',
        'Études de cas interactives',
        'Notifications push pour mises à jour',
      ];
    case 8:
      return [
        'Authentification par reconnaissance faciale',
        'Analyse biométrique sécurisée',
        'Intégration avec des APIs backend',
        'Algorithmes d’apprentissage automatique',
      ];
    default:
      return ['Fonctionnalités à définir'];
  }
}