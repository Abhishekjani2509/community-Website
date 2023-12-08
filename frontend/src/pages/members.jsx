import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FooterThree from "../component/layout/footerthree";
import HeaderTwo from "../component/layout/headertwo";
import PageHeader from "../component/layout/pageheader";
import AboutSectionFour from "../component/section/aboutfour";
import Pagination from "../component/section/pagination";
import SelectAge from "../component/select/selectage";
import SelectCountry from "../component/select/selectcountry";
import SelectGender from "../component/select/selectgender";
import SelectProduct from "../component/select/selectproduct";
import HeaderOne from "../component/layout/header";

const MembersPage = () => {
  let [fetchdata, setfetchData] = useState([]);
  let [api, setApi] = useState([""]);
  let { products } = fetchdata;
  let [type, setType] = useState("");
  api = `http://localhost:5000/api/users/all`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setfetchData(data);
      console.log(data);
    })();
  }, [api]);

  const modalview = () => {
    document.querySelector(".modal").classList.toggle("show");
    document.querySelector("body").classList.toggle("overlay");
  };

  return (
    <div>
      <HeaderOne />
      <PageHeader title={"Ollya All Members"} curPage={"All Members"} />
      {/* <AboutSectionFour /> */}
      <div className="member member--style2 padding-top padding-bottom">
        <div className="container">
          <div className="section__wrapper">
            <div className="member__info mb-4">
              <div className="member__info--left">
                <div className="member__info--filter">
                  <div className="default-btn" onClick={modalview}>
                    <span>
                      Filter Your Search <i className="fa-solid fa-sliders"></i>
                    </span>
                  </div>
                </div>
                <div className="member__info--count">
                  <div className="default-btn">
                    <span>All Members</span>
                  </div>
                  <p>20365587</p>
                </div>
              </div>
              <div className="member__info--right">
                <div className="member__info--customselect right w-100">
                  <div className="default-btn">
                    <span>Order By:</span>
                  </div>
                  <div className="banner__inputlist">
                    <SelectProduct select={"Newest"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-0 justify-content-center mx-12-none">
              {fetchdata.map((val, i) => (
                <div className="member__item" key={i}>
                  <div className="member__inner">
                    <div className="member__thumb">
                      <img src={`${val.profileimg}`} alt={`${val.imgAlt}`} />
                      <span className={val.fullname}></span>
                    </div>
                    <div className="member__content">
                    <Link to={`/member-single/${val._id}`} key={val._id}>
                        <h5>{val.fullname}</h5>
                      </Link>
                      <p>{val.activity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="member__pagination mt-4">
              <div className="member__pagination--left">
                <p>Viewing {fetchdata.length} Members</p>
              </div>
              <div className="member__pagination--right">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Filter your search
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={modalview}
              ></button>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="banner__list">
                  <div className="row align-items-center row-cols-1">
                    <div className="col">
                      <label>I am a</label>
                      <div className="banner__inputlist">
                        <SelectGender select={"male"} />
                      </div>
                    </div>
                    <div className="col">
                      <label>Looking for</label>
                      <div className="banner__inputlist">
                        <SelectGender select={"female"} />
                      </div>
                    </div>
                    <div className="col">
                      <label>Age</label>
                      <div className="row g-3">
                        <div className="col-6">
                          <div className="banner__inputlist">
                            <SelectAge select={"18"} />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="banner__inputlist">
                            <SelectAge select={"25"} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <label>Country</label>
                      <div className="banner__inputlist">
                        <SelectCountry select={"Bangladesh"} />
                      </div>
                    </div>
                    <div className="col">
                      <button
                        type="submit"
                        className="default-btn reverse d-block"
                      >
                        <span>Find Your Partner</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterThree />
    </div>
  );
};

export default MembersPage;
