// API configuration
// In Vite, environment variables must be prefixed with VITE_
// For browser access, we use the host's localhost:2000
// For Docker internal access, we could use backend:2000, but since requests come from browser, localhost is correct
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:2000';

export default API_URL;

