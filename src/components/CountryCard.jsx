  import React from 'react'
  const CountryCard = ({country, displayMode}) =>(
        <>
            <div className={`${displayMode ? 'bg-ThemeColor-DmDarkBlue' : 'bg-ThemeColor-BWhite'} mb-4` } >
              <img src={country.flags.png} alt={country.name.common} className='h-28 w-60' />
              <div className=' h-auto w-28 m-2 p-2'>
                <h3 className='text-md font-medium whitespace-nowrap max-w-26 truncate'>{country.name.common}</h3>
                <p className='country-info max-w-26'><span className='font-bold'>Population:</span> <span className='whitespace-nowrap '>{country.population}</span></p>
                <p className='country-info'><span className='font-bold'>Capital:</span> <span className='whitespace-nowrap'>{country.capital}</span></p>
                <p className='country-info'><span className='font-bold'>Region:</span> <span className='whitespace-nowrap'>{country.region}</span></p>
              </div>
            </div>
        </>
    )
  export default CountryCard