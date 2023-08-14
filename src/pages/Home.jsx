import React, {useState, useEffect} from 'react'
import {BsMoonStarsFill, BsSearch} from 'react-icons/bs'
import {IoMdArrowDropdown} from 'react-icons/io'
import {BiArrowBack} from 'react-icons/bi'
import CountryCard from '../components/CountryCard';

const Home = () => {
    const regions = ['Africa', 'Asia','America','Europe', 'Oceania'];
    const [darkMode, setdarkMode] = useState(true);
    const [showFilter, setShowFilter] = useState(false)
    const [selectedRegion, setselectedRegion] = useState('Filter by region....')
    const [countries, setCountries] = useState([]);
    const [apiRoute, setApiRoute] = useState('all');

    //Fetch Countries Effect
    useEffect(() => {
      fetchCountries();
    },);

    //Change Region
    const changeRegion = (value) => {
        setselectedRegion(value);
        setShowFilter(false);
        setApiRoute(`region/${value}`)
    }
    // Fetch Countries Api
    const fetchCountries = async() => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/${apiRoute}`);
            const countryData = await response.json();
            setCountries(countryData);
        } catch (error) {
            console.log('error:', error)
        }
    }
    // search Country
    const [input, setInput] = useState("");
    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(input.toLowerCase())
      );

    // open single country Page
    const [singleCountry, setSingleCountry] = useState(null);
    const openCountry =(value)=> {  
        setSingleCountry(value);
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
        {!singleCountry && (
            <>
                <div className='main-screen flex justify-between flex-col md:flex-row gap-3 '>
                    <div>
                        <div className={`rounded-md w-72 flex items-center gap-6 py-2 px-6 ${darkMode? 'bg-ThemeColor-DmDarkBlue': 'bg-ThemeColor-BWhite'} `}>
                            <BsSearch/> 
                            <input  placeholder='Search for a country....' className='input' value={input} onChange={(e)=> setInput(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex gap-3 flex-col'>
                        <div className={`rounded-md flex h-[54px] items-center gap-6 py-3 w-48 px-6  ${darkMode? 'bg-ThemeColor-DmDarkBlue': 'bg-ThemeColor-BWhite'} `} onClick={() =>setShowFilter(!showFilter) } >
                            <div className='flex w-48 justify-between'>
                                <span className='text-xs'>{selectedRegion}</span>
                                <p><IoMdArrowDropdown className={` ${showFilter? 'rotate-180' : ''}`}/></p>
                            </div>
                        </div>
                        <div className={`absolute text-sm shadow-md rounded-lg my-3 justify-between flex-col items-start w-50 gap-2 ${darkMode ? 'bg-ThemeColor-DmDarkBlue' : 'bg-ThemeColor-BWhite'} ${!showFilter ? 'hidden' : 'flex'}`}>
                            {
                                regions.map(region => {
                                return <p key={region} className= {`px-4 py-2  w-48  cursor-pointer ${darkMode? 'hover:bg-ThemeColor-DmVeryDarkBlue' : 'hover:bg-ThemeColor-LmVeryLightGray' }`} onClick={()=>changeRegion(region)}>{region}</p>
                                })
                            }  
                        </div>
                    </div>
                </div>
                <div className="main-screen flex flex-wrap justify-between">
                    {
                        filteredCountries.map((country, id)=> (
                            <div className='flex' onClick={()=>openCountry(country)} key={id}>
                                <CountryCard country={country}  displayMode={darkMode} />
                            </div>
                            
                    ))
                    }
                </div>
            </>
        )}

        {!!singleCountry && (
            <div className="main-screen w-full h-screen">
                <div className='input shadow-lg border border-slate-600/10  w-32 hover:scale-110 flex items-center justify-evenly px-4 '>
                    <BiArrowBack size={18} />
                    <button className='text-sm' onClick={()=> setSingleCountry(false)}>Back</button>
                </div>
                <div className='md:flex my-10 justify-between items-center gap-20'>
                    <div className='my-4'>
                        <img src={singleCountry.flags.png} alt={singleCountry.name.common} className='h-72 w-96' />
                    </div>
                    <div className='flex grow flex-col'>
                        <h2 className="text-xl font-semibold mb-2">{singleCountry.name.common}</h2>
                        <div className='flex gap-10 flex-col md:flex-row'>
                            <div className='flex flex-col md:my-6 gap-2'>
                                <p className='country-info max-w-26'><span className='font-bold'>Official Name:</span> <span className='whitespace-nowrap '>{singleCountry.name.official}</span></p>
                                <p className='country-info max-w-26'><span className='font-bold'>Population:</span> <span className='whitespace-nowrap '>{singleCountry.population}</span></p>
                                <p className='country-info max-w-26'><span className='font-bold'>Region:</span> <span className='whitespace-nowrap '>{singleCountry.region}</span></p>
                                <p className='country-info max-w-26'><span className='font-bold'>Sub Region:</span> <span className='whitespace-nowrap '>{singleCountry.subregion}</span></p>
                                <p className='country-info max-w-26'><span className='font-bold'>Capital:</span> <span className='whitespace-nowrap '>{singleCountry.capital}</span></p>
                            </div>
                            <div className='flex flex-col md:my-6 gap-2'>
                                <p className='country-info max-w-26'><span className='font-bold'>Top Level Domain:</span> <span className='whitespace-nowrap '>{singleCountry.tld}</span></p>
                                {/* <p className='country-info max-w-26'><span className='font-bold'>Currencies:</span> <span className='whitespace-nowrap '>{singleCountry.population}</span></p>
                                <p className='country-info max-w-26'><span className='font-bold'>Languages:</span> <span className='whitespace-nowrap '>{singleCountry.region}</span></p> */}
                            </div>
                        </div>
                        <div className='md:my-8 flex'>
                            <div className='flex gap-2 items-center'>
                            <p className='text-sm font-medium'>Border Countries: </p>
                            {
                                singleCountry.borders.map((border, id)=>(
                                    <p key={id} className='text-xs input  border border-slate-600/10 py-0 px-4 shadow-sm'>
                                        {border}
                                    </p>
                                ))
                            } 
                            </div>               
                        </div>
                    </div>
                </div>
            </div>
        )}

    </div>
    </>
  )
}

export default Home