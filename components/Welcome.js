import welcomeStyles from "../styles/Welcome.module.css"

const Welcome = () => {
    return (
    <div>
      <h1 className={welcomeStyles.title}>
        Welcome to Tabscribe, a brand new guitar tab generator, coming soon...
      </h1>
    </div>
  )
}

export default Welcome;