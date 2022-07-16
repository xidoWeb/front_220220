import React from 'react'

function ViewList({action, content, bgColor}) {
  return <li style={{backgroundColor: bgColor}} className={action}>광고{content}</li>
}

export default ViewList