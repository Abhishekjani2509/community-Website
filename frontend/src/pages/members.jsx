// MembersPage.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FooterThree from "../component/layout/footerthree";
import HeaderOne from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";

const MembersPage = () => {
  const [fetchData, setFetchData] = useState([]);
  const [type, setType] = useState("");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [residence, setResidence] = useState("");

  const api = `http://localhost:5000/api/users/all`;

  useEffect(() => {
    const fetchData = async () => {
      // Build the API URL with filter parameters
      const apiUrl = `${api}?gender=${type}&minAge=${minAge}&maxAge=${maxAge}&residence=${residence}`;

      try {
        const data = await fetch(apiUrl).then((res) => res.json());
        setFetchData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [api, type, minAge, maxAge, residence]);

  const modalview = () => {
    document.querySelector(".modal").classList.toggle("show");
    document.querySelector("body").classList.toggle("overlay");
  };

  // Function to clear all filters
  const clearFilters = () => {
    setType("");
    setMinAge("");
    setMaxAge("");
    setResidence("");
  };

  return (
    <div>
      <HeaderOne />
      <PageHeader title={"Ollya All Members"} curPage={"All Members"} />
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
                    <span>Total Members</span>
                  </div>
                  <p>{fetchData.length}</p>
                </div>
              </div>
              <div className="member__info--clear">
                {/* Clear Filters button */}
                <button
                  type="button"
                  className="default-btn reverse d-block"
                  onClick={clearFilters}
                >
                  <span>Clear Filters</span>
                </button>
              </div>
            </div>

            <div className="row g-0 justify-content-center mx-12-none">
              {fetchData.map((val, i) => (
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
                <p>Viewing {fetchData.length} Members</p>
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
                      <label>Looking for</label>
                      <div className="banner__inputlist">
                        <select
                          className="form-control"
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col">
                      <label>Age Range</label>
                      <div className="row g-3">
                        <div className="col-6">
                          <div className="banner__inputlist">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Min Age"
                              value={minAge}
                              onChange={(e) => setMinAge(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="banner__inputlist">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Max Age"
                              value={maxAge}
                              onChange={(e) => setMaxAge(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <label>Residence</label>
                      <div className="banner__inputlist">
                        <select
                          className="form-control"
                          value={residence}
                          onChange={(e) => setResidence(e.target.value)}
                        >
                          <option value="">Select residence</option>
                          <option value="In Palghar">
                            In Palghar Residence
                          </option>
                          <option value="Outside Palghar">
                            Outside Palghar
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col">
                      <button
                        type="button"
                        className="default-btn reverse d-block"
                        onClick={modalview}
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
