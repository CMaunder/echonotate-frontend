import { Button } from '@material-ui/core'
import React, { MouseEvent, useState } from 'react'
import axios from 'axios'
import styles from '../styles/CreateTab.module.css'

const CreateTab = () => {
  const [audioFile, setAudioFile] = useState<File>();

  const handleFileSelect = (event : React.ChangeEvent<HTMLInputElement>) => {
    setAudioFile(event.target.files[0])
  }

  const handleFileSubmit = () => {
    uploadFile().then(data => {
      console.log(data)
    })  

  }

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file',audioFile)
    const res = await axios.post('/api/upload-audio-file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return await res
  }

  return (<div className={styles.title}>
    <h3>Upload your guitar track</h3>
    <input
        accept="*"
        style={{display: 'none'}}
        id="contained-button-file"
        multiple={false}
        type="file"
        onChange={handleFileSelect}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <Button variant="contained" color="primary" onClick={handleFileSubmit}>Submit</Button>
    </div>
  )
}

export default CreateTab
