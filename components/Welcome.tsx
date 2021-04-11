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
      <h2>Welcome, let's get started.</h2>
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