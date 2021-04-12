import React from "react";
import '../css/homescreen.css'


const HomeScreen = (props) => {
  return(


<div>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1610460128_Web_homeprime.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1615484315_web.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1615828468_OTC_web.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<h2 class="text-center pt-4"> Customer Reviews</h2>

<div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card">
      <div class="card-body">
      <i class="fa fa-2x fa-quote-left text-blue"></i>
        <h5 class="card-title">Great website with quick delivery</h5>
        <p class="card-text">I have been using for a long time now. Medicines are genuine and with enough expiry time.. Worth Givin a try.</p>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
      <i class="fa fa-2x fa-quote-left text-blue"></i>
        <h5 class="card-title">Buying Medicine easy</h5>
        <p class="card-text">I have ordered and got medicines two times. very good service. I always prefer ordering medicine on this website.</p>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
      <i class="fa fa-2x fa-quote-left text-blue"></i>
        <h5 class="card-title">Product medicine are good</h5>
        <p class="card-text">Available all product are good in condition .i like it this app to work this aap easily and work online easily in stay home</p>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <i class="fa fa-2x fa-quote-left text-blue"></i>
        <h5 class="card-title">Good experience</h5>
        <p class="card-text">This is one of the finest and best online medical store for ordering medicines. It is a very simple process to order medicine.</p>
      
      </div>
    </div>
  </div>
</div>



</div>

  )

}

export default HomeScreen
