import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import './Resources.css';




const Resources = (props) => {

  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  
  function getPosition(pos) {
    const crd = pos.coords;

    setLatitude( crd.latitude )
    setLongitude( crd.longitude )
    
    console.log(latitude)
    console.log(longitude)
  }

  useEffect(() => {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(getPosition)

    } else {
      alert('Geolocation is not supported by this browser')
    }
  }, [])

  // const handleClick = () => {

  //   if (navigator.geolocation){
  //   navigator.geolocation.getCurrentPosition(getPosition)

  //   } else {
  //     alert('Geolocation is not supported by this browser')
  //   }
  // }

  return (
    <div className="resources-page">
      <h2>Resources</h2>

      <div>
        <a className="resources-links" href="https://www.pinkhope.org.au/blog/how-to-check-your-breasts-and-know-your-normal">
          Self Check Instructions
        </a>

        <Link className="resources-links" to="/resources/faqs">FAQs</Link>

        <a className="resources-links" href="https://www.healthdirect.gov.au/breast-cancer">
          Symptoms
        </a>

        <a className="resources-links" href={`https://www.google.com/maps/search/breast+cancer+specialists+near+me/@${latitude},${longitude},15z/data=!3m1!4b1`} >Find Professionals</a>

        <a className="resources-links" href="https://www.pinkhope.org.au/our-latest-blogs">
          Blog / Stories
        </a>
      </div>

    </div>
  );
}

export default Resources;