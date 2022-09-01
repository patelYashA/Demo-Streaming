import React from 'react'
import "./card.css"
import Header from "./Header"
import { Link } from "react-router-dom"

const Content = () => {
  return (
    <div>
      <Header />
      <div className="tab1cards">
        <Link to="/series">
          <div className='cardtitle' style={{ width: "15rem" }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="series" height="350" width="200"></img>
            <h3>Popular Series</h3>
          </div>
        </Link>
        <Link to="/movies">
          <div className='cardtitle' style={{ width: "15rem" }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg" alt="movies" height="350" width="200"></img>
            <h3>Popular Movies</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Content