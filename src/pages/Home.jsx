import React, {useState} from 'react'
import {BsMoonStarsFill, BsSearch} from 'react-icons/bs'
import {IoMdArrowDropdown} from 'react-icons/io'

const Home = () => {
    const [darkMode, setdarkMode] = useState(true);
    const [showFilter, setShowFilter] = useState(false)
    const [selectedRegion, setselectedRegion] = useState('Filter by region....')

    




  return (
    <>
    <div className={`w-full h-screen drop-shadow-lg ${darkMode ? 'bg-ThemeColor-DmVeryDarkBlue text-ThemeColor-BWhite' : 'bg-ThemeColor-LmVeryLightGray text-ThemeColor-LmVeryDarkBlue'} `}>
        <div className={`main-screen flex justify-between ${darkMode ? 'bg-ThemeColor-DmDarkBlue' : 'bg-ThemeColor-BWhite'} `} >
            <div>
                <h2 className='font-bold md:text-xl'>Where in The world?</h2>
            </div>
            <div className='flex gap-2 items-center cursor-pointer '  onClick={()=>setdarkMode(!darkMode)}>
                <BsMoonStarsFill /> <span className='hidden md:block'>{darkMode? "Dark Mode" : "Light Mode"}</span>
            </div>
        </div>
        <div className='main-screen flex justify-between'>
            <div>
                <div className={`rounded-md w-72 flex items-center gap-6 py-2 px-6 ${darkMode? 'bg-ThemeColor-DmDarkBlue': 'bg-ThemeColor-BWhite'} `}>
                    <BsSearch/> 
                    <input  placeholder='Search for a country....' className='input'/>
                </div>
            </div>
            <div className='flex gap-3 flex-col'>
                <div className={`rounded-md flex h-[54px] items-center gap-6 py-2 w-48 px-6  ${darkMode? 'bg-ThemeColor-DmDarkBlue': 'bg-ThemeColor-BWhite'} `} onClick={() =>setShowFilter(!showFilter) } >
                    <div className='flex w-48 justify-between'>
                        <span className='text-xs'>{selectedRegion}</span>
                        <p><IoMdArrowDropdown className={` ${showFilter? 'rotate-180' : ''}`}/></p>
                    </div>
                </div>
                <div className={` ${ !showFilter ? 'hidden': 'flex' }  rounded-md   flex-col items-center gap-6 py-2 w-48 h-40 px-6  ${darkMode? 'bg-ThemeColor-DmDarkBlue': 'bg-ThemeColor-BWhite'}`} >

                </div>
            </div>
 
        </div>
    </div>
    </>
  )
}

export default Home