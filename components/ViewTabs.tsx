import React from 'react'

const ViewTabs = ({show}: {show: boolean}) => {
  if(!show) {
    return <></>
  }
  return (
    <div>
      Your track is being processed...
    </div>
  )
}

export default ViewTabs
