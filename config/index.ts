const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://tabscribe.vercel.app'
export const predictNotesUrl = dev ? 'http://localhost:5000' : '18.130.228.3'