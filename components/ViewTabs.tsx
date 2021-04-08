import React from 'react'

const ViewTabs = ({show, tabData}: {show: boolean, tabData: JSON}) => {
  if(!show) {
    return <></>
  } else if (tabData === undefined) {
    return (
      <div>
        Your track is being processed...
      </div>
    )
  } else {
    console.log(tabData)
    return (
      <div>
        {tabData['lengthOfFile']}
      </div>
    )
  }
}

export default ViewTabs
