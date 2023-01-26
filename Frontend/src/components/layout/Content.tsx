import React, { useEffect, useState } from 'react'
import axios from "axios";
import Urlcard from '../Urlcard'


function Content() {
  const urlList = [0,1,2,3,4,5,6,7]
  const baseURL = "http://localhost:3001/newspaper/?url=https://www.freecodecamp.org/news/how-to-use-axios-with-react/"
  
  const [urlInfo, setUrlInfo] = useState()
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUrlInfo(response.data);
    });
  }, []) 

  useEffect(() => {console.log(urlInfo)},[urlInfo])
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