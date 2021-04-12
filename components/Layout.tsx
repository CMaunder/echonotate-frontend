import Meta from './Meta'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

const appBarStyles = { background: 'white', opacity: '0.8'}

function HideOnScroll({children}:{children: React.ReactElement}) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


const Layout = ({children}:{children: React.ReactElement}) => {
  return (<>
    <Meta title='Echonotate'/>
    <div className={styles.container}>
      <CssBaseline />
      <HideOnScroll {...children}>
      <AppBar style={appBarStyles}>
          <Toolbar>
          <Image
            src='/echonotate2.png'
            alt="echonotate"
            width={190}
            height={32}
          />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <div className={styles.main}>
       {children}
      </div>
    </div>
    </>
  )
}
 
export default Layout