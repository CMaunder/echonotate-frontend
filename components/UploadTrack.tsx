import React, { useState, forwardRef, useRef, useImperativeHandle, Ref} from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core'
import AudioFilePreUpload from '../components/AudioFilePreUpload'

interface RefObject {
  uploadFile: () => any
}

const UploadTrack = forwardRef((props: {show: boolean, audioFile: File, setAudioFile: Function}, ref: Ref<RefObject>)=> {
  const { show, audioFile, setAudioFile } = props;
  useImperativeHandle(ref, () => ({ uploadFile }));
  
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files.length === 0) {
      return
    }
    const file = event.target.files[0]
    const ext = file.name.split('.').pop();
    if ( file.size >= 1048576) {
      alert('That file is too big, please select a smaller one')
    } else if ( ext !== 'mp3') {// && ext !== 'wav' && ext !== 'm4a') {
      alert("Please make sure your file is one of the following types: mp3") //, wav or m4a")
    } else {
      setAudioFile(file)
    }
  };

  const uploadFile = async (): Promise<string> => {
    const file = audioFile;
    const filename = encodeURIComponent(file.name);
    const res = await axios.get<{url :string, fields: {[key:string]:string}}>(`/api/upload-audio-file?file=${filename}`);
    const { url, fields } = res.data
    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const upload = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    if (upload.ok) {
      console.log('Uploaded successfully!');
      saveTrackInfoToDB(fields);
      return fields.key
    } else {
      console.error('Upload failed.');
      alert('Upload failed, please try again.')
    }
  };

  const saveTrackInfoToDB = async (fields: any) => {
    const body = {...fields, user: 'Guest'}
    const res = await axios({
      method: 'put',
      url: '/api/track-info',
      data: body
    })
    if(res.status === 201) {
      console.log('Saved to DB successfully')
    } else {
      alert('Whoa, something went wrong...')
    }
  };

  if (!show) {
    return <></>
  }
  return (
    <div>
      <h3>Upload your guitar track</h3>
      <br/>
      <br/>
      <input
        accept=".mp3,audio/*"
        style={{display: 'none'}}
        id="contained-button-file"
        multiple={false}
        type="file"
        onChange={e => handleFileSelect(e)}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span">
          Browse
        </Button>
      </label>
      <br />
      <br />
      <AudioFilePreUpload audioFile={audioFile} />
      <br />
      
    </div>
  )
});

export default UploadTrack;
