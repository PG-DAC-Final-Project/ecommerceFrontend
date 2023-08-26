import React from 'react'

import img1 from '../../images/one.jpg'
import img2 from '../../images/two.jpg'
import img3 from '../../images/three.jpg'
import i1 from '../../images/1.jpg'
import i2 from '../../images/2.jpg'
import i3 from '../../images/3.jpg'
function Slider() {
  return (
    <div >
      <div id="carouselExampleIndicators" class="carousel slide" data-mdb-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselExampleIndicators"
            data-mdb-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleIndicators"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleIndicators"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active carousel-img1">
            <img src={i1} class="d-block w-100 carousel-img2" alt="Wild Landscape" />
          </div>
          <div class="carousel-item carousel-img1">
            <img src={i2} class="d-block w-100" alt="Camera" />
          </div>
          <div class="carousel-item carousel-img1">
            <img src={i3} class="d-block w-100 carousel-img2" alt="Exotic Fruits" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

  )
}
export default Slider