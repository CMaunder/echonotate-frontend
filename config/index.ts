const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://musicmind.vercel.app'
export const predictNotesUrl = dev ? 'http://localhost:5000' : 'https://tabscribe-backend.com'