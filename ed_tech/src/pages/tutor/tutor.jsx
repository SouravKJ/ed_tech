import React from 'react'
import { Outlet } from 'react-router-dom'

const tutor = () => {
  return (
    <div>
      tutor
      <div>
        {<Outlet/>}
      </div>
    </div>
  )
}

export default tutor
