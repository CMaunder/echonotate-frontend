const dev = process.env.NODE_ENV !== 'production';
console.log(`index in config, dev is: ${dev}`)

export const server = dev ? 'http://localhost:3000' : 'https://tabscribe.vercel.app'