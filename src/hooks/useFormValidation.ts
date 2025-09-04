import { useState, useCallback } from 'react';
import { FormData } from '../types';

export const useFormValidation = (initialData: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

  const validateField = useCallback((name: keyof FormData, value: string): string => {
    if (!value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
    return '';
  }, []);

  const validateForm = useCallback((data: FormData): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
    Object.keys(data).forEach((key) => {
      const fieldName = key as keyof FormData;
      const error = validateField(fieldName, data[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
      }
    });
    return newErrors;
  }, [validateField]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;
    
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));

    // Validate field and update errors
    const error = validateField(fieldName, value);
    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));

    // Mark field as touched
    setTouched(prev => ({
      ...prev,
      [fieldName]: true
    }));
  }, [validateField]);

  const handleSubmit = useCallback((onSubmit: (data: FormData) => void) => {
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key as keyof FormData] = true;
      return acc;
    }, {} as Record<keyof FormData, boolean>);
    setTouched(allTouched);

    // Validate form
    const formErrors = validateForm(formData);
    setErrors(formErrors);

    // If there are errors, don't submit
    if (Object.keys(formErrors).length > 0) {
      return false;
    }

    onSubmit(formData);
    return true;
  }, [formData, validateForm]);

  const isFormValid = Object.values(formData).every(value => value.trim() !== '') && Object.keys(errors).length === 0;

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleSubmit,
    isFormValid,
    setFormData
  };
};
