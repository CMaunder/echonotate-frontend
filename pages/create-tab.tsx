import { Button } from '@material-ui/core'
import React from 'react'
import styles from '../styles/CreateTab.module.css'

const CreateTab = () => {
  return (<div className={styles.title}>
    <h3>Upload your guitar track</h3>
    <input
        accept="image/*"
        style={{display: 'none'}}
        id="contained-button-file"
        multiple={false}
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </div>
  )
}

export default CreateTab
