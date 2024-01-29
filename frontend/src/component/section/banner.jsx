import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.slim";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";

// const title = "Find your ture love";
// const desc = "Serious dating with your perfect match is just a click away.";

// const labelchangeone = "I am a";
// const labelchangetwo = "Looking for";
// const labelchangethree = "Age";
// const labelchangefour = "Country";
// const btnText = "Find Your Partner";

const imgLink = "../../assets/images/banner/pmg9.jpg";
const img1 = "../../assets/images/banner/img1.jpg";
const img2 = "../../assets/images/banner/img2.jpg";
const img3 = "../../assets/images/banner/img3.jpg";
const img4 = "../../assets/images/banner/img4.jpg";
const img5 = "../../assets/images/banner/img5.jpg";
const img6 = "../../assets/images/banner/img6.jpg";
const img7 = "../../assets/images/banner/img7.jpg";
const img8 = "../../assets/images/banner/img8.jpg";
const img9 = "../../assets/images/banner/img10.jpg";

// const imgAlt = "Dating Thumb";

class BannerOne extends Component {
  render() {
    return (
      <>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner" style={{transition: "transform 1s ease-in-out;"}}>
            <div className="carousel-item active">
              <img src={imgLink} className="d-block w-100" alt="..."   loading="lazy" />
            </div>
            <div className="carousel-item" >
              <img src={img1} className="d-block w-100" alt="..." loading="lazy"  />
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="..." loading="lazy" />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." loading="lazy"  />
            </div>
            <div className="carousel-item">
              <img src={img4} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img5} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img6} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img7} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img8} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img9} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
          
        </div>
      </>
    );
  }
}

export default BannerOne;

// <div
//   className="banner container col-md-6 "
//   style={{ backgroundImage: "url('assets/banner/home-banner.jpg')" }}
// >

//   <img src='' alt={imgAlt}/>
// </div>
