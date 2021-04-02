import Welcome from '../components/Welcome'
import { connectToDatabase } from '../util/mongodb'

export default function Home({ isConnected }) {
  return (
    <>
      <Welcome isConnected={isConnected}/>
    </>
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
