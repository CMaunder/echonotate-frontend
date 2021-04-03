import Meta from './Meta'
import styles from '../styles/Layout.module.css'

const Layout = ({children}:{children: React.ReactNode}) => {
  return (<>
    <Meta title='Tabscribe'/>
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout