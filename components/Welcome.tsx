import Button from '@material-ui/core/Button'
import welcomeStyles from "../styles/Welcome.module.css"

const Welcome = () => {
  const handleOnClick = () => {
    console.log('user clicked click here')
  }
  return (
    <div className={welcomeStyles.title}>
      <h1>
        Welcome to Tabscribe, a brand new guitar tab generator.
      </h1>
      <h2>To get started</h2>
      <Button 
        variant="contained" 
        color="primary"
        onClick={handleOnClick}
      >
        Click here
      </Button>
    </div>
  )
}

export default Welcome;