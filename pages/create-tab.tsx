import React, { useState, forwardRef, useRef, useImperativeHandle, ReactComponentElement } from 'react';
import { Steps } from 'antd';
import UploadTrack from '../components/UploadTrack';
import { Button } from '@material-ui/core'
import { SolutionOutlined, LoadingOutlined, CloudUploadOutlined, CheckCircleOutlined} from '@ant-design/icons';
import styles from '../styles/CreateTab.module.css';
import 'antd/dist/antd.css';

const {Step} = Steps;

const stepperSteps = [
  "Upload Track",
  "View Suggested Tabs",
  "Pick Your Tab",
  "Pick Your Tab"
];

const stepIcons = [
  <CloudUploadOutlined />,
  <SolutionOutlined />,
  <CheckCircleOutlined />,
  <LoadingOutlined />
];


interface RefObject {
  uploadFile: () => any
}

const CreateTab = () => {

  const ref = useRef<RefObject>(null);

  const [ currentStep, setCurrentStep ] = useState<number>(0);
  const [audioFile, setAudioFile] = useState<File>();
  const [uploadingTrack, setUploadingTrack] = useState<boolean>(false);

  const getStepStatus: Function = (stepNumber: number) => {

    let stepStatuses: Array<string> = ["process", "finish", "wait", "wait"];
    if (currentStep === 0) {
      stepStatuses = ["process", "wait", "wait", "wait"]
    } else if (currentStep === 1) {
      stepStatuses = ["finish", "process", "wait", "wait"]
    } else if (currentStep === 2) {
      stepStatuses = ["finish", "finish", "process", "wait"]
    } else if (currentStep === 3) {
      stepStatuses = ["finish", "finish", "finish", "process"]
    } 
    return stepStatuses[stepNumber]
  }

  const getSteps = () => {
    let arrSteps = [];
    for (let i = 0; i<stepperSteps.length; i++) {
      arrSteps.push(i)
    }
    return (
    <Steps>
      {arrSteps.map((i) => {
        return <Step key={i} status={getStepStatus(i)} title={stepperSteps[i]} icon={getStepIcons(i)} />
      })}
    </Steps>);
  };

  const getStepIcons = (i): any  => {
    if (i === 0 && uploadingTrack) {
      return <LoadingOutlined />
    }
    return stepIcons[i]
  };

  const isNextDisabled = (): boolean => {
    console.log(audioFile)
    return ( audioFile === undefined);
  }

  const isBackDisabled = (): boolean => {
    return currentStep <= 0;
  }

  const handleNextClick = () => {
    if (currentStep === 0) {
      if (ref.current) {
        setUploadingTrack(true)
        ref.current.uploadFile().then(data => {
          console.log(data)
          setAudioFile(undefined)
          setUploadingTrack(false)
          setCurrentStep(currentStep + 1);
        })  
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div >
      {getSteps()}
      <div className={styles.content}>
        <UploadTrack show={currentStep===0} audioFile={audioFile} setAudioFile={setAudioFile} ref={ref}/>
      </div>
      <div className={styles.back}>
      {currentStep > 0 && <Button 
        variant="contained" 
        onClick={handleBackClick}
        disabled={isBackDisabled()}
      >
        Back
      </Button>}
      </div>
      <div className={styles.next}>
      {currentStep < stepperSteps.length - 1 && <Button 
        variant="contained" 
        color="primary" 
        onClick={handleNextClick}
        disabled={isNextDisabled()}
      >
        Next
      </Button>}
      </div>
    </div>
  )
};

export default CreateTab;
