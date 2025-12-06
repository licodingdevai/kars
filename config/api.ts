export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://kars-backend-production.up.railway.app';

export const API_ENDPOINTS = {
  categories: `${API_BASE_URL}/api/categories`,
  products: `${API_BASE_URL}/api/products`,
};
