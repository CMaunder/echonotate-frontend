import Meta from '../components/Meta'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (<div>
        <Meta title='Tabscribe'/>
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    </div>
    )
}

export default Layout
