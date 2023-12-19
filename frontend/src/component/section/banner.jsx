import { Component } from "react";

const title = "Find your ture love";
const desc = "Serious dating with your perfect match is just a click away.";

const labelchangeone = "I am a";
const labelchangetwo = "Looking for";
const labelchangethree = "Age";
const labelchangefour = "Country";
const btnText = "Find Your Partner";

const imgLink = "assets/home.jpg";
const imgAlt = "Dating Thumb";

class BannerOne extends Component {
  render() {
    return (
      <div
        className="banner  col-md-6 mx-auto"
        // style={{ backgroundImage: "url('assets/home.jpg')" }}
      >
        <img src={imgLink} alt={imgAlt}/>
      </div>
    );
  }
}

export default BannerOne;
