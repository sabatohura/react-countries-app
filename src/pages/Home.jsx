import React, {useState} from 'react'
import {BsMoonStarsFill} from 'react-icons/bs'

const Home = () => {
    const [darkMode, setdarkMode] = useState(true);


  return (
    <>
    <div className={`w-full h-screen ${darkMode ? 'bg-ThemeColor-DmVeryDarkBlue text-ThemeColor-BWhite' : 'bg-ThemeColor-LmVeryLightGray text-ThemeColor-LmVeryDarkBlue'} `}>
        <div className={`main-screen flex justify-between ${darkMode ? 'bg-ThemeColor-DmDarkBlue' : 'bg-ThemeColor-BWhite'} `} >
            <div>
                <h2 className='font-bold text-xl '>Where in The world?</h2>
            </div>
                <BsMoonStarsFill onClick={()=>setdarkMode(!darkMode)} />
        </div>
        <div className='main-screen '>
            body
        </div>
    </div>
    </>
  )
}

export default Home