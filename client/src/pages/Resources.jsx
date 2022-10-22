import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";


const Resources = () => {
  return (
    <div>
      <h2>Resources</h2>

      <a href="https://www.pinkhope.org.au/blog/how-to-check-your-breasts-and-know-your-normal">
        Self Check Instructions
      </a>

      <Link to="/resources/faqs">FAQs</Link>

      <Link>Symptoms</Link>

      <Link>Find Professionals</Link>

      <Link>Blog / Stories</Link>

    </div>
  );
}

export default Resources;