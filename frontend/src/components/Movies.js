import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./card.css"

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [next, setNext] = useState(21)
  const [load, setLoad] = useState(true)
  useEffect(() => {
    axios.get("http://localhost:5000/movies")
      .then((response) => {
        setMovies(response.data)
      })
  }, [])
  function handleLoadMore() {
    setNext(movies.length)
    setLoad(false)
  }

  return (
    <div className='App'>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Popular Movies</span>
          </div>
        </nav>
      </div>
      {movies.slice(0, next).map((data) => {
        return (
          <div className="card tab1cards" style={{ width: "5cm" }}>
            <img src={data.images.posterArt.url} className="card-img-top" />
            <div className="card-body">
              <p style={{ textAlign: "left", whiteSpace: "nowrap", overflow: "hidden" }} className="card-text">{data.title}</p>
            </div>
          </div>
        )
      })}
      {load === true ? (<button className='btn btn-light' onClick={handleLoadMore}>load more...</button>) : null}
    </div>
  )
}

export default Movies

  // {
  //   title: "",
  //   description: "",
  //   programType: "",
  //   images: {
  //     posterArt: {
  //       url: "",
  //       width: "",
  //       height: ""
  //     }
  //   },
  //   releaseYear: ""
  // }



  // <div className = 'card' style = {{ width: "2in", height: "3" }}>
  //           <img src={data.images.posterArt.url} alt="movies"></img>
  //           <p>{data.title}</p>
  //         </div >