import { connectToDatabase } from "../util/mongodb";
import welcomeStyles from "../styles/Welcome.module.css"

const Welcome = ({isConnected, users}) => {
  console.log(users)
    return (
        <div>
            <h1 className={welcomeStyles.title}>
          Welcome to Tabscribe - Coming Soon...
        </h1>
        <p>
          Generate guitar tabs from the notes you play
        </p>

        {isConnected ? (
          <h4 className="subtitle">The application has successfully connected to MongoDB</h4>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB
          </h2>
        )}
        </div>
    )
}


export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  console.log(`users in from the database ${users}`)
  const users = await db
    .collection("users")
    .find({})
    .toArray();
  console.log(`users in from the database ${users}`)
  return {
    props: {
      users: users,
    },
  };
}



export default Welcome;