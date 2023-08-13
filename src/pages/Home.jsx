// import { async } from 'q';
import React, {useState, useEffect} from 'react'
import {BsMoonStarsFill, BsSearch} from 'react-icons/bs'
import {IoMdArrowDropdown} from 'react-icons/io'
import CountryCard from '../components/CountryCard';

const Home = () => {

    const regions = ['all','Africa', 'Asia','America','Europe', 'Oceania'];
    const [darkMode, setdarkMode] = useState(true);
    const [showFilter, setShowFilter] = useState(false)
    const [selectedRegion, setselectedRegion] = useState('Filter by region....')
    const [countries, setCountries] = useState([]);
    // const [regions, setRegions] = useState([]);

    const [apiRoute, setApiRoute] = useState('all');

    useEffect(() => {
      fetchCountries();
    },);

    const changeRegion = (value) => {
        setselectedRegion(value);
        setShowFilter(false);
        setApiRoute(`region/${value}`)
        // fetchCountries(apiRoute);

    }
    const fetchCountries = async() => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/${apiRoute}`);
            const countryData = await response.json();
            setCountries(countryData);
            // console.log(countryData)
        } catch (error) {
            console.log('error:', error)
        }
    }


  return (
    <>
    <div className={`w-full h-auto drop-shadow-lg ${darkMode ? 'bg-ThemeColor-DmVeryDarkBlue text-ThemeColor-BWhite' : 'bg-ThemeColor-LmVeryLightGray text-ThemeColor-LmVeryDarkBlue'} `}>
        <div className={`main-screen flex justify-between ${darkMode ? 'bg-ThemeColor-DmDarkBlue' : 'bg-ThemeColor-BWhite'} `} >
            <div>
                <h2 className='font-bold md:text-xl'>Where in The world?</h2>
            </div>
            <div className='flex gap-2 items-center cursor-pointer '  onClick={()=>setdarkMode(!darkMode)}>
                <BsMoonStarsFill /> <span className='hidden md:block'>{darkMode? "Dark Mode" : "Light Mode"}</span>
            </div>
        </div>
        <div className='main-screen flex justify-between flex-col md:flex-row gap-3 '>
            <div>
                <div className={`rounded-md w-72 flex items-center gap-6 py-2 px-6 ${darkMode? 'bg-ThemeColor-DmDarkBlue': 'bg-ThemeColor-BWhite'} `}>
                    <BsSearch/> 
                    <input  placeholder='Search for a country....' className='input'/>
                </div>
            </div>
            <div className='flex gap-3 flex-col'>
                <div className={`rounded-md flex h-[54px] items-center gap-6 py-3 w-48 px-6  ${darkMode? 'bg-ThemeColor-DmDarkBlue': 'bg-ThemeColor-BWhite'} `} onClick={() =>setShowFilter(!showFilter) } >
                    <div className='flex w-48 justify-between'>
                        <span className='text-xs'>{selectedRegion}</span>
                        <p><IoMdArrowDropdown className={` ${showFilter? 'rotate-180' : ''}`}/></p>
                    </div>
                </div>
                <div className={`absolute text-sm rounded-md justify-between flex-col items-start w-48 gap-2 ${darkMode ? 'bg-ThemeColor-DmDarkBlue' : 'bg-ThemeColor-BWhite'} ${!showFilter ? 'hidden' : 'flex'}`}>
                     {
                        regions.map(region => {
                        return <p key={region} className= {`px-4 py-2  w-48  cursor-pointer ${darkMode? 'hover:bg-ThemeColor-DmVeryDarkBlue' : 'hover:bg-ThemeColor-LmVeryLightGray' }`} onClick={()=>changeRegion(region)}>{region}</p>
                        })
                     }  
                </div>
            </div>
        </div>
        <div className="main-screen flex flex-wrap justify-between gap-3">
 
            {
                countries.map((country)=> (
                    <CountryCard country={country} key={`key ${country}`} displayMode={darkMode} />
            ))
            }
        </div>
    </div>
    </>
  )
}

export default Home