import React from 'react'
import { Paper } from '@material-ui/core'

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
      </div>
    )
  } else {
    return (
      <div>
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
