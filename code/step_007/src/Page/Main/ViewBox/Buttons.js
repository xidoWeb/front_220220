import React from 'react'

function Buttons(props) {
  return (
    <div className='buttons'>
      <button type="button" className='next'
              onClick={props.nextEvent}>
        <span className='blind'>next</span>
      </button>
      <button type="button" className='prev'
              onClick={props.prevEvent}>
        <span className='blind'>prev</span>
      </button>
    </div>
  )
}

export default Buttons