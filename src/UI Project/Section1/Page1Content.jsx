import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

export default function Page1Content() {
  return (
    <div className='flex justify-between py-2 px-6 '>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}
