import { Button } from '@material-ui/core'
import React, { MouseEvent, useState } from 'react'
import styles from '../styles/CreateTab.module.css'

const CreateTab = () => {
  const [audioFile, setAudioFile] = useState();

  const handleFileSelect = (event) => {
    setAudioFile(event.target.files[0])
  }

  const handleFileSubmit = () => {
    uploadFile().then(data => {
      console.log(data)
    })  
  }

  const uploadFile = async () => {
    const file = audioFile;
    const filename = encodeURIComponent(file.name);
    const res = await fetch(`/api/upload-audio-file?file=${filename}`);
    const { url, fields } = await res.json();
    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const upload = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    console.log(upload)
    if (upload.ok) {
      console.log('Uploaded successfully!');
    } else {
      console.error('Upload failed.');
    }
  };

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
