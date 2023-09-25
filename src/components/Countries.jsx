import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading';
import Error from './Error';
import { arrowDown, arrowUp } from '../index.js';

const Countries = ({loading, countries, error, leagues}) => {
    const [search, setSearch] = useState('')
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        if (e.target) {
            
        }
        setShow((prev) => {
            setShow(!prev)
        } )
        console.log(e.target);
        // if (show) {
        //     e.target.src = arrowUp
        // }
        // else {
        //     e.target.src = arrowDown
        // }
    }
    
  return (
    <div>
        <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        {
            error && (
                <Error />
            )
        }
        {
            loading && (
                <Loading />

            )

        }
        <div className='country_div'>
            {
                countries.filter((country) => (
                    search.toLowerCase() === '' ? country : country.country_name.toLowerCase().includes(search)
                )).map((country,index) => (
                    <div key={country.country_key}>
                        <div   to={`/leagues/${country.country_key}`} className='country'>
                            <div className='country_name_div'>
                                <h2 className='country_name'>{country.country_name}</h2>
                            </div>
                            <img src={country.country_logo} alt="" className='country_logo'/>
                            <img 
                                src={show ? arrowDown : arrowUp} 
                                alt="" 
                                className='up_down_arrow'
                                onClick={handleClick}
                            />
                        </div>
                        <div className={show ? 'show' : 'hidden'}>
                            {
                                leagues.map((league) => (
                                    (league.country_name == country.country_name) &&
                                    <div key={league.league_key}>
                                        {league.league_name}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
                
            }
            

        </div>
    </div>
  )
}

export default Countries