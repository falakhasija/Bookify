import "./header.css"
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import {format} from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBed, faCar, faFaceSmileBeam, faHouseFloodWaterCircleArrowRight, faMartiniGlassCitrus, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { faCalendar, faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { Children } from "react";
import { useNavigate } from "react-router-dom";
const Header=({type})=> {
    const [Destination, setDestination]=useState("")
    const [openDate, setOpenDate]=useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOptions, setOpenOptions]=useState(false)
      const [options, setOptions]=useState({
        adult:1,
        children:0,
        room:1
      })
      const handleOption=(name,operation)=>{
        setOptions(prev=>{return{
          ...prev,
           [name]:operation==="i" ? options[name]+1 : options[name]-1
        }})
      }
      const navigate=useNavigate()
      const handleSearch=()=>{
        navigate("/hotels",{state:{Destination, date,options}})
      }
  return (
    <div className="header">
        <div className={type=== "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
            <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faMartiniGlassCitrus} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
       {type!=="list" &&
        <>
        <h1 className="headerTitle">A LifeTime of Discounts? It's Genius.</h1>
        <p className="headerDescription">Get Rewarded for your travels - unlock 10% of Discount with Signup NOW!</p>
        <button className="headerBtn">Sign In / Register </button>
        <div className="headerSearch">
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon"/>
            <input type="text"
             placeholder="Where are you going?"
             className="headerSearchInput"
             onChange={e=>setDestination(e.target.value)}
             />
            </div>
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays } className="headerIcon"/>
            <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")} `}</span>
           {openDate &&  <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            minDate={new Date()}
            className="date"
            />}
            </div>
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
            <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
            {openOptions && <div className="options">
                <div className="optionItems">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                    <button
                    disabled={options.adult<=1}
                    className="optionCounterButton" onClick={()=>handleOption("adult","d")} >-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                </div></div>
                <div className="optionItems">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                    <button
                    disabled={options.children<=0}
                    className="optionCounterButton" onClick={()=>handleOption("children","d")}>-</button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                </div></div>
                <div className="optionItems">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                    <button
                    disabled={options.room<=1}
                    className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
                </div></div>
            </div>}
            </div> 
            <div className="headerSearchItem">
                <button className="headerBtn" onClick={()=>handleSearch()}>Search</button>
            </div>
        </div></>}
        </div>
    </div>
  )
}

export default Header