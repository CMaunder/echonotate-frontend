import Welcome from '../components/Welcome'
import { server } from '../config/index'

export default function Home({ isConnected, data }) {
  return (
    <>
      <Welcome isConnected={isConnected} users={data}/>
    </>
  )
}

export const getStaticProps = async () => {
  
  const result = await fetch(`${server}/api/users`)

  const data = await result.json()
  console.log(data)
  return {
    props: {data}
  }
}