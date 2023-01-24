import React from 'react'
import Urlcard from '../Urlcard'

const urlList = [0,1,2,3,4,5,6,7]
function Content() {
  return (
    <div className='content'>
        <div className="content__cards-wrapper">
        {urlList.map(() => 
            <Urlcard />
        )}
        </div>

    </div>
  )
}

export default Content