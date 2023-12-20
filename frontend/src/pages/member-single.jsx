/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FooterThree from "../component/layout/footerthree";
import HeaderOne from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import SelectAge from "../component/select/selectage";
import SelectCountry from "../component/select/selectcountry";
import SelectGender from "../component/select/selectgender";
import SelectProduct from "../component/select/selectproduct";
import ActiveGroup from "../component/sidebar/group";
import ActiveMember from "../component/sidebar/member";
import ModalSearch from "../component/sidebar/modalsearch";

// const name = "William Smith";
// const activety = "Active 3 Days Ago";
// const desc =
//   "Challenges are what make life interesting, and overcoming them is what makes life meaningful";

// const MemberInfo = [
//   {
//     imgUrl: "../assets/images/member/profile/01.jpg",
//     imgAlt: "Dating Thumb",
//     imgLink: "../assets/images/member/profile/01.jpg",
//   },
//   {
//     imgUrl: "../assets/images/member/profile/02.jpg",
//     imgAlt: "Dating Thumb",
//     imgLink: "../assets/images/member/profile/02.jpg",
//   },
//   {
//     imgUrl: "../assets/images/member/profile/03.jpg",
//     imgAlt: "Dating Thumb",
//     imgLink: "../assets/images/member/profile/03.jpg",
//   },
//   {
//     imgUrl: "../assets/images/member/profile/04.jpg",
//     imgAlt: "Dating Thumb",
//     imgLink: "../assets/images/member/profile/04.jpg",
//   },
//   {
//     imgUrl: "../assets/images/member/profile/05.jpg",
//     imgAlt: "Dating Thumb",
//     imgLink: "../assets/images/member/profile/05.jpg",
//   },
//   {
//     imgUrl: "../assets/images/member/profile/06.jpg",
//     imgAlt: "Dating Thumb",
//     imgLink: "../assets/images/member/profile/06.jpg",
//   },
// ];

const MemberDetails = () => {
  const { id } = useParams();
  const [memberData, setMemberData] = useState({});

  useEffect(() => {
    // Fetch member data using the 'id' from the URL
    const fetchMemberData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_DOMAIN}/api/users/find/${id}`
        ); // Adjust the API endpoint accordingly
        const data = await response.json();
        setMemberData(data);
        // console.log(data)
      } catch (error) {
        console.error("Error fetching member data:", error);
      }
    };
    fetchMemberData();
  }, [id]);
  return (
    <div>
      <HeaderOne />
      <PageHeader title={"Member Single Page"} curPage={"Member Single"} />
      <div className="group group--single padding-bottom">
        <div className="group__top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 d-none d-xl-block"></div>
              <div className="col-xl-9">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="gt2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#gt2"
                      type="button"
                      role="tab"
                      aria-controls="gt2"
                      aria-selected="false"
                    >
                      <i className="fa-solid fa-users"></i> Profile{" "}
                      <span>30</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="gt6-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#gt6"
                      type="button"
                      role="tab"
                      aria-controls="gt6"
                      aria-selected="false"
                    >
                      <i className="fa-solid fa-photo-film"></i> Media{" "}
                      <span>06</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="group__bottom">
          <div className="container">
            <div className="row g-4">
              <div className="col-xl-6 order-xl-1">
                <div className="group__bottom--left">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="gt2"
                      role="tabpanel"
                      aria-labelledby="gt2-tab"
                    >
                      <div className="info">
                        <div className="info-card mb-4">
                          <div className="info-card-title">
                            <h6>Base Info</h6>
                          </div>
                          <div className="info-card-content">
                            <ul className="info-list">
                              <li>
                                <p className="info-name">Name</p>
                                <p className="info-details">
                                  {memberData.fullname}
                                </p>
                              </li>
                              <li>
                                <p className="info-name">Phone</p>
                                <p className="info-details">
                                  {memberData.phone}
                                </p>
                              </li>
                              <li>
                                <p className="info-name">Email</p>
                                <p className="info-details">
                                  {memberData.email}
                                </p>
                              </li>
                              <li>
                                <p className="info-name">Address</p>
                                <p className="info-details">
                                  {memberData.address}
                                </p>
                              </li>
                              <li>
                                <p className="info-name">Age</p>
                                <p className="info-details">{memberData.age}</p>
                              </li>
                              <li>
                                <p className="info-name">Gender</p>
                                <p className="info-details">
                                  {memberData.gender}
                                </p>
                              </li>
                              <li>
                                <p className="info-name">Residance</p>
                                <p className="info-details">
                                  {memberData.residence}
                                </p>
                              </li>
                              <li>
                                <p className="info-name">Date of Birth</p>
                                <p className="info-details">{memberData.Dob}</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="info-card mb-4">
                          <div className="info-card-title">
                            <h6>Myself Summary</h6>
                          </div>
                          <div className="info-card-content">
                            <p>{memberData.description}</p>
                          </div>
                        </div>
                        {memberData.profileVerified ? (
                          <div className="info-card mb-4">
                            <div className="info-card-title">
                              <h6>Other Information</h6>
                            </div>
                            <div className="info-card-content">
                              <ul className="info-list">
                                <ul>
                                  <li>
                                    <p className="info-name">Father's Name</p>
                                    <p className="info-details">
                                      {memberData.fatherName}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Mother's Name</p>
                                    <p className="info-details">
                                      {memberData.motherName}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Height</p>
                                    <p className="info-details">
                                      {memberData.height}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Education</p>
                                    <p className="info-details">
                                      {memberData.education}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Job Details</p>
                                    <p className="info-details">
                                      {memberData.jobDetails}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">
                                      Number of Brothers
                                    </p>
                                    <p className="info-details">
                                      {memberData.numberOfBrothers}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">
                                      Number of Sisters
                                    </p>
                                    <p className="info-details">
                                      {memberData.numberOfSisters}
                                    </p>
                                  </li>
                                  <li>
                                    <p className="info-name">Marital Status</p>
                                    <p className="info-details">
                                      {memberData.maritalStatus}
                                    </p>
                                  </li>
                                </ul>
                              </ul>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="gt6"
                      role="tabpanel"
                      aria-labelledby="gt6-tab"
                    >
                      <div className="group__bottom--body bg-white">
                        <div className="group__bottom--allmedia">
                          <div className="media-wrapper">
                            <div className="tab-content" id="myTabContent3">
                              <div
                                className="tab-pane fade show active"
                                id="all-media"
                                role="tabpanel"
                                aria-labelledby="all-media-tab"
                              >
                                <div className="media-content">
                                  <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-3 g-3">
                                    {memberData.images
                                      ? memberData.images.map(
                                        (image, imgIndex) => (
                                          // eslint-disable-next-line react/jsx-no-comment-textnodes
                                            <div className="col">
                                              <img
                                                key={imgIndex}
                                                src={image}
                                                alt={`User Image ${
                                                  imgIndex + 1
                                                }`}
                                                style={{
                                                  maxWidth: "200px",
                                                  maxHeight: "200px",
                                                  marginRight: "5px",
                                                  marginTop:"20px"
                                                }}
                                                />
                                                </div>
                                              )
                                              )
                                              : null}
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 order-xl-0">
                <div className="group__bottom--center">
                  <div className="story__item style2">
                    <div className="story__inner">
                      <div className="story__thumb position-relative">
                        <img src={memberData.profileimg} alt="dating thumb" />
                      </div>
                      <div className="story__content px-0 pb-0">
                        <h3>{memberData.fullname}</h3>
                        {/* <div className="story__content--content mb-2 pb-3">
                          <p>
                            <i className="fa-solid fa-clock"></i> {activety}
                          </p>
                        </div> */}
                        <p className="mb-2">{memberData.description}</p>
                        <div className="story__content--author mt-3 pb-2">
                          {/* <h6 className="d-block w-100 mb-3">
                            {memberData.fullname} Photos
                          </h6> */}
                          {/* <div className="row g-2">
                            {MemberInfo.map((val, i) => (
                              <div className="col-4" key={i}>
                                <a href={`${val.imgLink}`} target="_blank">
                                  <img
                                    src={`${val.imgUrl}`}
                                    alt={`${val.imgAlt}`}
                                  />
                                </a>
                              </div>
                            ))}
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <FooterThree /> */}
    </div>
  );
};

export default MemberDetails;

// <Fragment></Fragment>
