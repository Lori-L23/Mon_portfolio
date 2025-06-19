'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import { Certification } from '@/types/portfolio';

type CertificationFormProps = {
  onSubmit: (cert: Certification) => void;
  onClose: () => void;
  initialData?: Certification | null;
};

const CertificationForm = ({ 
  onSubmit, 
  onClose, 
  initialData = null 
}: CertificationFormProps) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    issuer: initialData?.issuer || '',
    date: initialData?.date || '',
    link: initialData?.link || '',
    image: initialData?.image || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Le titre est requis';
    }
    
    if (!formData.issuer.trim()) {
      newErrors.issuer = 'L\'organisme est requis';
    }
    
    if (!formData.date) {
      newErrors.date = 'La date est requise';
    } else if (new Date(formData.date) > new Date()) {
      newErrors.date = 'La date ne peut pas être dans le futur';
    }

    if (formData.link && !formData.link.startsWith('http')) {
      newErrors.link = 'Le lien doit commencer par http:// ou https://';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const certification: Certification = {
      id: initialData?.id || Date.now(),
      title: formData.title.trim(),
      issuer: formData.issuer.trim(),
      date: formData.date,
      ...(formData.link.trim() && { link: formData.link.trim() }),
      ...(formData.image.trim() && { image: formData.image.trim() }),
    };

    onSubmit(certification);
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl p-8 max-w-md w-full mx-4"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {initialData ? 'Modifier la certification' : 'Ajouter une certification'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 transition-colors"
            aria-label="Fermer le modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Titre *
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
              aria-invalid={!!errors.title}
              aria-describedby="title-error"
            />
            {errors.title && (
              <p id="title-error" className="mt-1 text-sm text-red-600">
                {errors.title}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="issuer" className="block text-sm font-medium text-gray-700 mb-1">
              Organisme *
            </label>
            <input
              id="issuer"
              type="text"
              name="issuer"
              value={formData.issuer}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.issuer ? 'border-red-500' : 'border-gray-300'
              }`}
              aria-invalid={!!errors.issuer}
              aria-describedby="issuer-error"
            />
            {errors.issuer && (
              <p id="issuer-error" className="mt-1 text-sm text-red-600">
                {errors.issuer}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Date *
            </label>
            <input
              id="date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.date ? 'border-red-500' : 'border-gray-300'
              }`}
              aria-invalid={!!errors.date}
              aria-describedby="date-error"
            />
            {errors.date && (
              <p id="date-error" className="mt-1 text-sm text-red-600">
                {errors.date}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-1">
              Lien (optionnel)
            </label>
            <input
              id="link"
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              placeholder="https://example.com"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.link ? 'border-red-500' : 'border-gray-300'
              }`}
              aria-invalid={!!errors.link}
              aria-describedby="link-error"
            />
            {errors.link && (
              <p id="link-error" className="mt-1 text-sm text-red-600">
                {errors.link}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
              Chemin de l&apos;image (optionnel)
            </label>
            <input
              id="image"
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="/images/certification.jpg"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {initialData ? 'Enregistrer' : 'Ajouter'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default CertificationForm;