import React from 'react'
import { Paper } from '@material-ui/core'
//import OpenSheetMusicDisplay from '../middleware/OpenSheetMusicDisplay'


import dynamic from 'next/dynamic'

const OpenSheetMusicDisplay = dynamic(
  () => import('../middleware/OpenSheetMusicDisplay'),
  { ssr: false }
)

interface ITabData {
  notes: Array<any>,
  xml: string
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
        <Paper>
          <OpenSheetMusicDisplay file={tabData.xml} />
        </Paper>
      </div>
    )
  }
}

export default ViewTabs
