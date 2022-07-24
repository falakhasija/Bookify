import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'
const Hotel = () => {
  const [slideNumber, setSlideNumber]=useState(0);
  const [open, setOpen]=useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  const handleMove= (direction)=>{
    let newSlideNumber;
    if(direction==='l'){
      newSlideNumber=slideNumber===0 ? 5 : slideNumber-1
    }
    else{
      newSlideNumber=slideNumber===5 ? 0 : slideNumber+1 
    }
    setSlideNumber(newSlideNumber)
  }
  const handleOpen= (i)=>{
    setSlideNumber(i)
    setOpen(true)
  }
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className='slider'>
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow"  onClick={()=>handleMove("r")}/>
          </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <span>Hilton Street Mumbai, India</span>
          </div>
          <span className='hotelDistance'>Excellent Location - 500m from Airport</span>
          <span className='hotelPriceHighlight'>Book a Stay at $114 and get a free Airport Taxi</span>
          <div className="hotelImages">
            {photos.map((photo , i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the Heart of Jaipur</h1>
              <p 
              className="hotelDesc">
                Well situated in the Bani Park district of Jaipur, Hotel Kapish Smart-All 
                Pure Veg is set 2.4 km from Sindhi Camp, 4.3 km from City Palace and 4.3 km 
                from Jantar Mantar, Jaipur. Among the facilities of this property are a restaurant, 
                a 24-hour front desk and room service, along with free WiFi.Free private parking is available and the hotel also offers car hire for guests who 
                want to explore the surrounding area.The hotel will provide guests with air-conditioned rooms offering a wardrobe, a kettle, a safety deposit box, a flat-screen TV and a private bathroom with a bath.Guests at Hotel Kapish Smart-All Pure Veg can enjoy a continental breakfast.

Hawa Mahal - Palace of Winds is 5 km from the accommodation, while Nahargarh Fort Palace is 6 km away. The nearest airport is Jaipur International, 15 km from Hotel Kapish Smart-All Pure Veg, and the property offers a paid airport shuttle service.</p></div>
              <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
              Located in the real heart of Jaipur, this property has an
              excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList/>
          <Footer/>
        </div>
      </div>
  )
}
export default Hotel
