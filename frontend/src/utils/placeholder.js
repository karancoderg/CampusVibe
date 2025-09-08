const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const getPlaceholderUrl = (width = 40, height = 40) => {
  return `${API_BASE_URL}/placeholder/${width}/${height}`;
};
