import React from 'react'
import { Paper } from '@material-ui/core'
//import OpenSheetMusicDisplay from '../middleware/OpenSheetMusicDisplay'


import dynamic from 'next/dynamic'

const OpenSheetMusicDisplay = dynamic(
  () => import('../middleware/OpenSheetMusicDisplay'),
  { ssr: false }
)

interface ITabData {
  notes: Array<any>
}

const ViewTabs = ({show, tabData}: {show: boolean, tabData: ITabData}) => {
  console.log(tabData)
  if(!show) {
    return <></>
  } else if (tabData === undefined) {
    return (
      <div>
        Echo-notating...
        <Paper>
          <OpenSheetMusicDisplay file="MuzioClementi_SonatinaOpus36No1_Part2.xml" />
        </Paper>
      </div>
    )
  } else {
    return (
      <div>
        <Paper>
          <OpenSheetMusicDisplay file="MuzioClementi_SonatinaOpus36No1_Part2.xml" />
        </Paper>
        {Object.keys(tabData.notes).map((i) => {
          return <div key={i}><Paper>Note Start: {tabData.notes[i][0].toFixed(2)}s <br /> 
          Note Duration: {tabData.notes[i][1].toFixed(2)}s <br /> 
          Note : {tabData.notes[i][2]} </Paper><br /></div>
        })}
      </div>
    )
  }
}

export default ViewTabs
