import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'

export default function Home({ isConnected }) {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          Welcome to Tabscribe
        </h1>
        <p>
          Generate guitar tabs from the notes you play
        </p>

        {isConnected ? (
          <h4 className="subtitle">The application has successfully connected to MongoDB</h4>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
            for instructions.
          </h2>
        )}
      </main>
      <footer>
        
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
