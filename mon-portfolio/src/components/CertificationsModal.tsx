'use client';

import { motion } from 'framer-motion';
import { X, Edit, Trash } from 'lucide-react';
import Image from 'next/image';
import { Certification } from '@/types/portfolio';
import { useState } from 'react';

type CertificationsModalProps = {
  certifications: Certification[];
  onClose: () => void;
  onEdit: (cert: Certification) => void;
  onDelete: (id: number) => void;
  isAuthenticated: boolean;
};

const ImageWrapper = ({ src, alt, width, height }: { 
  src: string; 
  alt: string; 
  width: number; 
  height: number 
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className="rounded-lg border border-gray-200"
      onError={() => setImgSrc('/images/cert-fallback.png')}
    />
  );
};

const CertificationsModal = ({
  certifications,
  onClose,
  onEdit,
  onDelete,
  isAuthenticated,
}: CertificationsModalProps) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl p-8 max-w-3xl w-full mx-4 max-h-[80vh] overflow-y-auto"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Mes Certifications</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
            aria-label="Fermer le modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="grid gap-6">
          {certifications.length === 0 ? (
            <p className="text-gray-600 text-center py-8">Aucune certification ajoutée.</p>
          ) : (
            certifications.map((cert) => (
              <div key={cert.id} className="border-b pb-4 last:border-b-0">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{cert.title}</h3>
                    <p className="text-gray-600">Organisme : {cert.issuer}</p>
                    <p className="text-gray-600">
                      Date : {new Date(cert.date).toLocaleDateString('fr-FR')}
                    </p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline inline-block mt-2"
                      >
                        Voir le certificat
                      </a>
                    )}
                  </div>
                  
                  {isAuthenticated && (
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => onEdit(cert)}
                        className="text-blue-600 hover:text-blue-800 p-1"
                        aria-label={`Modifier ${cert.title}`}
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => onDelete(cert.id)}
                        className="text-red-600 hover:text-red-800 p-1"
                        aria-label={`Supprimer ${cert.title}`}
                      >
                        <Trash className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
                
                {cert.image && (
                  <div className="mt-4">
                    <ImageWrapper 
                      src={cert.image.startsWith('/') ? cert.image : `/images/${cert.image}`}
                      alt={`Certificat: ${cert.title}`}
                      width={200}
                      height={150}
                    />
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CertificationsModal;