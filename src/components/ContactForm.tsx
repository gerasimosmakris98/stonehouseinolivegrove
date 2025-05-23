import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = t('This field is required', 'Αυτό το πεδίο είναι υποχρεωτικό');
    }
    if (!formData.email.trim()) {
      newErrors.email = t('This field is required', 'Αυτό το πεδίο είναι υποχρεωτικό');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('Please enter a valid email', 'Παρακαλώ εισάγετε ένα έγκυρο email');
    }
    if (!formData.message.trim()) {
      newErrors.message = t('This field is required', 'Αυτό το πεδίο είναι υποχρεωτικό');
    }
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      // Optionally, show a success message
      alert(t('Message sent successfully!', 'Το μήνυμα στάλθηκε επιτυχώς!'));
    }
  };

  return (
    <section id="contact-form" className="py-16 px-4 md:py-24 animated-section">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10 text-center text-gray-800">
          {t('Contact Us', 'Επικοινωνία')}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-10 rounded-lg shadow-xl">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              {t('Name', 'Όνομα')}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-villa-blue focus:border-villa-blue sm:text-sm`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              {t('Email', 'Email')}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-villa-blue focus:border-villa-blue sm:text-sm`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              {t('Message', 'Μήνυμα')}
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-villa-blue focus:border-villa-blue sm:text-sm`}
            />
            {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-villa-blue hover:bg-villa-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-villa-blue transition-colors duration-300"
            >
              {t('Send', 'Αποστολή')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
