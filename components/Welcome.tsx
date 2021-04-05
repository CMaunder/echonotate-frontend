import Button from '@material-ui/core/Button'
import Link from 'next/link'
import welcomeStyles from "../styles/Welcome.module.css"

const Welcome = () => {
  const handleOnClick = () => {
    console.log('user clicked click here')
    return 
  }
  return (
    <div >
      <h1>
        Welcome to Tabscribe, a brand new guitar tab generator.
      </h1>
      <h2>To get started</h2>
      <Link href='/create-tab'>
      <Button 
        variant="contained" 
        color="primary"
        onClick={handleOnClick}
      >
        Click here
      </Button>
    </Link>  
    </div>
  )
}

export default Welcome;