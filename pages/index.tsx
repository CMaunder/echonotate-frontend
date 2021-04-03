import Welcome from '../components/Welcome'
// import { GetStaticProps } from 'next'
// import { server } from '../config/index'

export default function Home() {
  return (
    <>
      <Welcome/>
    </>
  )
}


//example of getStaticProps, for reference
// export const getStaticProps: GetStaticProps = async () => {
  
//   const result = await fetch(`${server}/api/users`)

//   const data = await result.json()
//   console.log(data)
//   return {
//     props: {data}
//   }
// }