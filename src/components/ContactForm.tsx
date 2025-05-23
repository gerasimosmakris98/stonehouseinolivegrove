import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import GlassCard from './GlassCard'; // Import GlassCard
import { Input } from './ui/input'; // Import Input
import { Textarea } from './ui/textarea'; // Import Textarea
import { Button } from './ui/button'; // Import Button
import { Label } from './ui/label'; // Import Label

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
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10 text-center text-gray-800 dark:text-gray-100">
          {t('Contact Us', 'Επικοινωνία')}
        </h2>
        <GlassCard variant="default" className="p-6 md:p-8" hover={false}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                {t('Name', 'Όνομα')}
              </Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-villa-blue dark:focus:border-villa-blue focus-visible:ring-villa-blue'}`}
                placeholder={t('Your full name', 'Το ονοματεπώνυμό σας')}
              />
              {errors.name && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                {t('Email', 'Email')}
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-villa-blue dark:focus:border-villa-blue focus-visible:ring-villa-blue'}`}
                placeholder={t('your.email@example.com', 'your.email@example.com')}
              />
              {errors.email && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                {t('Message', 'Μήνυμα')}
              </Label>
              <Textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-villa-blue dark:focus:border-villa-blue focus-visible:ring-villa-blue'}`}
                placeholder={t('Your message...', 'Το μήνυμά σας...')}
              />
              {errors.message && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.message}</p>}
            </div>

            <div>
              <Button
                type="submit"
                variant="default" // Assuming default maps to primary or can be customized
                size="lg"
                className="w-full bg-villa-blue text-white hover:bg-villa-blue/90 focus-visible:ring-villa-blue-dark"
              >
                {t('Send', 'Αποστολή')}
              </Button>
            </div>
          </form>
        </GlassCard>
      </div>
    </section>
  );
};

export default ContactForm;
