import './list.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns/esm'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
 const List = () => {
  const location=useLocation();
  const [Destination,setDestination]=useState(location.state.Destination)
  const [date,setDate]=useState(location.state.date)
  const [options,setOptions]=useState(location.state.options)
  const [openDate, setOpenDate]=useState(false);
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={Destination} type="text"/>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>
                {`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")} `}
                </span>
                {openDate && <DateRange
                onChange={item=>setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
                />}
              </div>
              <label>Options</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <span 
                className="lsOptionText">Min Price
                <small> per night</small>
                </span>
                <input type="number" min={1} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span 
                className="lsOptionText">Max Price
                <small> per night</small>
                </span>
                <input type="number" min={1} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span 
                className="lsOptionText">Adult
                </span>
                <input type="number" min={1} placeholder={options.adult} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span 
                className="lsOptionText">Children
                </span>
                <input type="number" min={0} placeholder={options.children} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span 
                className="lsOptionText">Room
                </span>
                <input type="number" min={1} placeholder={options.room} className="lsOptionInput" />
              </div>
              </div>
              <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
      </div>
 )
}
export default List
