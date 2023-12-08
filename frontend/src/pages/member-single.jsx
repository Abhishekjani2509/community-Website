import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FooterThree from "../component/layout/footerthree";
import HeaderTwo from "../component/layout/headertwo";
import PageHeader from "../component/layout/pageheader";
import SelectAge from "../component/select/selectage";
import SelectCountry from "../component/select/selectcountry";
import SelectGender from "../component/select/selectgender";
import SelectProduct from "../component/select/selectproduct";
import ActiveGroup from "../component/sidebar/group";
import ActiveMember from "../component/sidebar/member";
import ModalSearch from "../component/sidebar/modalsearch";

const name = "William Smith";
const activety = "Active 3 Days Ago";
const desc =
  "Challenges are what make life interesting, and overcoming them is what makes life meaningful";

const MemberInfo = [
  {
    imgUrl: "assets/images/member/profile/01.jpg",
    imgAlt: "Dating Thumb",
    imgLink: "assets/images/member/profile/01.jpg",
  },
  {
    imgUrl: "assets/images/member/profile/02.jpg",
    imgAlt: "Dating Thumb",
    imgLink: "assets/images/member/profile/02.jpg",
  },
  {
    imgUrl: "assets/images/member/profile/03.jpg",
    imgAlt: "Dating Thumb",
    imgLink: "assets/images/member/profile/03.jpg",
  },
  {
    imgUrl: "assets/images/member/profile/04.jpg",
    imgAlt: "Dating Thumb",
    imgLink: "assets/images/member/profile/04.jpg",
  },
  {
    imgUrl: "assets/images/member/profile/05.jpg",
    imgAlt: "Dating Thumb",
    imgLink: "assets/images/member/profile/05.jpg",
  },
  {
    imgUrl: "assets/images/member/profile/06.jpg",
    imgAlt: "Dating Thumb",
    imgLink: "assets/images/member/profile/06.jpg",
  },
];

const MemberDetails = () => {
  const { id } = useParams();
  const [memberData, setMemberData] = useState({});

  useEffect(() => {
    // Fetch member data using the 'id' from the URL
    const fetchMemberData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users/find/${id}`); // Adjust the API endpoint accordingly
        const data = await response.json();
        setMemberData(data);
        // console.log(data)
      } catch (error) {
        console.error('Error fetching member data:', error);
      }
    };
    fetchMemberData();
  }, [id]);
  return (
    <div>
      <HeaderTwo />
      <PageHeader title={"Member Single Page"} curPage={"Member Single"} />
      <div className="group group--single padding-bottom">
        <div className="group__top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 d-none d-xl-block"></div>
              <div className="col-xl-9">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  {/* <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="gt1-tab"
                data-bs-toggle="tab"
                data-bs-target="#gt1"
                type="button"
                role="tab"
                aria-controls="gt1"
                aria-selected="true"
              >
                <i className="fa-solid fa-house"></i> Activity
              </button>
            </li> */}
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
                  {/* <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="gt3-tab"
                data-bs-toggle="tab"
                data-bs-target="#gt3"
                type="button"
                role="tab"
                aria-controls="gt3"
                aria-selected="false"
              >
                <i className="fa-solid fa-video"></i> Sites{" "}
                <span>06</span>
              </button>
            </li> */}
                  {/* <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="gt4-tab"
                data-bs-toggle="tab"
                data-bs-target="#gt4"
                type="button"
                role="tab"
                aria-controls="gt4"
                aria-selected="false"
              >
                <i className="fa-solid fa-users"></i> Friends{" "}
                <span>16</span>
              </button>
            </li> */}
                  {/* <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="gt5-tab"
                data-bs-toggle="tab"
                data-bs-target="#gt5"
                type="button"
                role="tab"
                aria-controls="gt5"
                aria-selected="false"
              >
                <i className="fa-solid fa-layer-group"></i> Groups{" "}
                <span>08</span>
              </button>
            </li> */}
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
                                <p className="info-details">{memberData.fullname}</p>
                              </li>
                              <li>
                                <p className="info-name">I'm a</p>
                                <p className="info-details">Woman</p>
                              </li>
                              <li>
                                <p className="info-name">Loking for a</p>
                                <p className="info-details">Men</p>
                              </li>
                              <li>
                                <p className="info-name">Marital Status</p>
                                <p className="info-details">Single</p>
                              </li>
                              <li>
                                <p className="info-name">Age</p>
                                <p className="info-details">36</p>
                              </li>
                              <li>
                                <p className="info-name">Date of Birth</p>
                                <p className="info-details">27-02-1996</p>
                              </li>
                              <li>
                                <p className="info-name">Address</p>
                                <p className="info-details">
                                  Streop Rd, Peosur, Inphodux, USA.
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="info-card mb-4">
                          <div className="info-card-title">
                            <h6>Myself Summary</h6>
                          </div>
                          <div className="info-card-content">
                            <p>
                              Collaboratively innovate compelling mindshare
                              after prospective partnership Competently sereiz
                              long-term high-impact internal or "organic"
                              sources vias user friendly strategic themesr areas
                              creat Dramatically coordinate premium partnerships
                              rather than standards compliant technologies ernd
                              Dramaticaly matrix ethical collaboration and
                              idea-sharing through opensour methodolog and
                              Intrinsicly grow collaborative platforms vis-a-vis
                              effective scenarios. The energistically strategize
                              cost effective ideas before the worke unde.
                            </p>
                          </div>
                        </div>

                        <div className="info-card mb-4">
                          <div className="info-card-title">
                            <h6>Looking For</h6>
                          </div>
                          <div className="info-card-content">
                            <ul className="info-list">
                              <li>
                                <p className="info-name">I'm looking for</p>
                                <p className="info-details">
                                  I want a funny person
                                </p>
                              </li>
                              <li>
                                <p className="info-name">Whatever I like</p>
                                <p className="info-details">
                                  I like to travel a lot
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="info-card mb-4">
                          <div className="info-card-title">
                            <h6>Lifestyle</h6>
                          </div>
                          <div className="info-card-content">
                            <ul className="info-list">
                              <li>
                                <p className="info-name">Interest</p>
                                <p className="info-details">Dogs,Cats</p>
                              </li>
                              <li>
                                <p className="info-name">Favorite vocations</p>
                                <p className="info-details">
                                  Maldives, Bangladesh
                                </p>
                              </li>
                              <li>
                                <p className="info-name">Looking for</p>
                                <p className="info-details">
                                  Serious Relationshiop,Affair
                                </p>
                              </li>
                              <li>
                                <p className="info-name">Smoking</p>
                                <p className="info-details">Casual Smoker</p>
                              </li>
                              <li>
                                <p className="info-name">Language</p>
                                <p className="info-details">
                                  English, French, Italian
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="info-card">
                          <div className="info-card-title">
                            <h6>Physical info</h6>
                          </div>
                          <div className="info-card-content">
                            <ul className="info-list">
                              <li>
                                <p className="info-name">Height</p>
                                <p className="info-details">5'8 ft</p>
                              </li>
                              <li>
                                <p className="info-name">Weight</p>
                                <p className="info-details">72 kg</p>
                              </li>
                              <li>
                                <p className="info-name">Hair Color</p>
                                <p className="info-details">Black</p>
                              </li>
                              <li>
                                <p className="info-name">Eye Color</p>
                                <p className="info-details">Brown</p>
                              </li>
                              <li>
                                <p className="info-name">Body Type</p>
                                <p className="info-details">Tall</p>
                              </li>
                              <li>
                                <p className="info-name">Ethnicity</p>
                                <p className="info-details">Middle Eastern</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div
                className="tab-pane fade"
                id="gt3"
                role="tabpanel"
                aria-labelledby="gt3-tab"
              >
                <div className="site">
                  <div className="info-card mb-4">
                    <div className="info-card-title">
                      <h6>Site Link</h6>
                    </div>
                    <div className="info-card-content">
                      <ul className="info-list">
                        {SiteLinkList.map((val, i) => (
                          <li key={i}>
                            <div className="info-details">
                              <div className="id-left">
                                <img
                                  src={`${val.imgUrl}`}
                                  alt={`${val.imgAlt}`}
                                />
                              </div>
                              <div className="id-right">
                                <a href={val.btnLink} target="_blank">
                                  <h5>{val.title}</h5>
                                </a>
                                <p>{val.activity}</p>
                              </div>
                            </div>
                            <a
                              href={val.btnLink}
                              className="default-btn"
                              target="_blank"
                            >
                              <span>{val.btnText}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="info-card-title info-card-pagination">
                      <p>Viewing 1 - 2 of 2 sites</p>
                    </div>
                  </div>
                </div>
              </div> */}
                    {/* <div
                className="tab-pane fade"
                id="gt4"
                role="tabpanel"
                aria-labelledby="gt4-tab"
              >
                <div className="group__bottom--area">
                  <div className="group__bottom--head">
                    <div className="left">
                      <form action="#">
                        <input
                          type="text"
                          name="search"
                          placeholder="search"
                        />
                        <button type="submit">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                      </form>
                    </div>
                    <div className="right">
                      Orader By:
                      <div className="banner__inputlist">
                        <SelectProduct select={"Newest"} />
                      </div>
                    </div>
                  </div>
                  <div className="group__bottom--body">
                    <div className="member">
                      <div className="row g-3 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                        {FriendList.map((val, i) => (
                          <div className="col" key={i}>
                            <div className="member__item w-100">
                              <div className="member__inner m-0">
                                <div className="member__thumb">
                                  <img
                                    src={`${val.imgUrl}`}
                                    alt={`${val.imgAlt}`}
                                  />
                                  <span className="member__activity">
                                    {val.activity}
                                  </span>
                                </div>
                                <div className="member__content">
                                  <Link to="/member-single">
                                    <h6>{val.name}</h6>
                                  </Link>
                                  <p>
                                    {val.age}{" "}
                                    <i className="fa-solid fa-mars"></i>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-center mt-5">
                      <a href="#" className="default-btn">
                        <span>
                          <i className="fa-solid fa-spinner"></i> Load
                          More
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
                    {/* <div
                className="tab-pane fade"
                id="gt5"
                role="tabpanel"
                aria-labelledby="gt5-tab"
              >
                <div className="group__bottom--area">
                  <div className="group__bottom--head">
                    <div className="left">
                      <form action="#">
                        <input
                          type="text"
                          name="search"
                          placeholder="search"
                          className=""
                        />
                        <button type="submit">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                      </form>
                    </div>
                    <div className="right">
                      Orader By:
                      <div className="banner__inputlist">
                        <SelectProduct select={"Newest"} />
                      </div>
                    </div>
                  </div>
                  <div className="group__bottom--body bg-white">
                    <div className="group__bottom--group">
                      <div className="row g-3 justify-content-center mx-12-none row-cols-lg-2 row-cols-sm-2 row-cols-1">
                        {GroupPageContentList.map((val, i) => (
                          <div className="col" key={i}>
                            <div className="story__item style2 story--theme-color">
                              <div className="story__inner">
                                <div className="story__thumb position-relative">
                                  <Link to="/group-single">
                                    <img
                                      src={`${val.imgUrl}`}
                                      alt={`${val.imgAlt}`}
                                    />
                                  </Link>
                                  <span className="member__activity member__activity--ofline">
                                    {val.activety}
                                  </span>
                                </div>
                                <div className="story__content px-0 pb-0">
                                  <Link to="/group-single">
                                    <h4>{val.title}</h4>
                                  </Link>
                                  <p>{val.desc}</p>
                                  <div className="story__content--author justify-content-between border-top pt-3">
                                    <div className="story__content--content">
                                      <p>
                                        <i className="fa-solid fa-earth-africa"></i>{" "}
                                        {val.group}
                                      </p>
                                    </div>
                                    <ul className="img-stack">
                                      {val.groupMemList.map(
                                        (val, i) => (
                                          <li key={i}>
                                            <a href="#">
                                              <img
                                                src={val.imgUrl}
                                                alt={val.imgAlt}
                                              />
                                              <div className="time-tooltip">
                                                <div className="time-tooltip-holder">
                                                  <span className="tooltip-info">
                                                    {val.name}
                                                  </span>
                                                </div>
                                              </div>
                                            </a>
                                          </li>
                                        )
                                      )}
                                      <li className="bg-theme">
                                        <a href="#">
                                          {val.moreMember}
                                          <div className="time-tooltip">
                                            <div className="time-tooltip-holder">
                                              <span className="tooltip-info">
                                                More
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="text-center mt-5">
                        <a href="#" className="default-btn">
                          <i className="fa-solid fa-spinner"></i> Load
                          More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
                    <div
                      className="tab-pane fade"
                      id="gt6"
                      role="tabpanel"
                      aria-labelledby="gt6-tab"
                    >
                      <div className="group__bottom--body bg-white">
                        <div className="group__bottom--allmedia">
                          <div className="media-wrapper">
                            <ul
                              className="nav nav-tabs"
                              id="myTab3"
                              role="tablist"
                            >
                              {/* <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="all-media-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#all-media"
                            type="button"
                            role="tab"
                            aria-controls="all-media"
                            aria-selected="true"
                          >
                            <i className="fa-solid fa-table-cells-large"></i>{" "}
                            All <span>12</span>
                          </button>
                        </li> */}
                              {/* <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="album-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#album"
                            type="button"
                            role="tab"
                            aria-controls="album"
                            aria-selected="false"
                          >
                            <i className="fa-solid fa-camera"></i>{" "}
                            Albums <span>4</span>
                          </button>
                        </li> */}
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link"
                                  id="photos-media-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#photos-media"
                                  type="button"
                                  role="tab"
                                  aria-controls="photos-media"
                                  aria-selected="false"
                                >
                                  <i className="fa-solid fa-image"></i> Photos{" "}
                                  <span>4</span>
                                </button>
                              </li>
                              {/* <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="video-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#video"
                            type="button"
                            role="tab"
                            aria-controls="video"
                            aria-selected="false"
                          >
                            <i className="fa-solid fa-video"></i> Videos{" "}
                            <span>4</span>
                          </button>
                        </li> */}
                              {/* <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="music-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#music"
                            type="button"
                            role="tab"
                            aria-controls="music"
                            aria-selected="false"
                          >
                            <i className="fa-solid fa-music"></i> Music{" "}
                            <span>0</span>
                          </button>
                        </li> */}
                            </ul>
                            <div className="tab-content" id="myTabContent3">
                              <div
                                className="tab-pane fade show active"
                                id="all-media"
                                role="tabpanel"
                                aria-labelledby="all-media-tab"
                              >
                                <div className="media-content">
                                  <ul className="media-upload">
                                    <li className="upload-now">
                                      <div className="custom-upload">
                                        <div className="file-btn">
                                          <i className="fa-solid fa-upload"></i>{" "}
                                          Upload
                                        </div>
                                        <input type="file" />
                                      </div>
                                    </li>
                                  </ul>
                                  <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-3 g-3">
                                    <div className="col">
                                      <div className="media-thumb video-thumb">
                                        <img
                                          src="assets/images/allmedia/01.jpg"
                                          alt="dating thumb"
                                        />
                                        <a
                                          href="assets/images/allmedia/01.jpg"
                                          target="_blank"
                                          className="icon"
                                        >
                                          <i className="fa-solid fa-circle-play"></i>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="media-thumb albam-thumb">
                                        <img
                                          src="assets/images/allmedia/02.jpg"
                                          alt="dating thumb"
                                        />
                                        <a
                                          href="assets/images/allmedia/02.jpg"
                                          target="_blank"
                                          className="icon"
                                        >
                                          <i className="fa-solid fa-camera"></i>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="media-thumb">
                                        <img
                                          src="assets/images/allmedia/03.jpg"
                                          alt="dating thumb"
                                        />
                                        <a
                                          href="assets/images/allmedia/03.jpg"
                                          target="_blank"
                                          className="icon"
                                        >
                                          <i className="fa-solid fa-image"></i>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="media-thumb">
                                        <img
                                          src="assets/images/allmedia/04.jpg"
                                          alt="dating thumb"
                                        />
                                        <a
                                          href="assets/images/allmedia/04.jpg"
                                          target="_blank"
                                          className="icon"
                                        >
                                          <i className="fa-solid fa-image"></i>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="media-thumb video-thumb">
                                        <img
                                          src="assets/images/allmedia/05.jpg"
                                          alt="dating thumb"
                                        />
                                        <a
                                          href="assets/images/allmedia/05.jpg"
                                          target="_blank"
                                          className="icon"
                                        >
                                          <i className="fa-solid fa-circle-play"></i>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="media-thumb albam-thumb">
                                        <img
                                          src="assets/images/allmedia/06.jpg"
                                          alt="dating thumb"
                                        />
                                        <a
                                          href="assets/images/allmedia/06.jpg"
                                          target="_blank"
                                          className="icon"
                                        >
                                          <i className="fa-solid fa-camera"></i>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="media-thumb video-thumb">
                                        <img
                                          src="assets/images/allmedia/07.jpg"
                                          alt="dating thumb"
                                        />
                                        <a
                                          href="assets/images/allmedia/07.jpg"
                                          target="_blank"
                                          className="icon"
                                        >
                                          <i className="fa-solid fa-circle-play"></i>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="media-thumb">
                                        <img
                                          src="assets/images/allmedia/08.jpg"
                                          alt="dating thumb"
                                        />
                                        <a
                                          href="assets/images/allmedia/08.jpg"
                                          target="_blank"
                                          className="icon"
                                        >
                                          <i className="fa-solid fa-image"></i>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="media-thumb">
                                        <img
                                          src="assets/images/allmedia/09.jpg"
                                          alt="dating thumb"
                                        />
                                        <a
                                          href="assets/images/allmedia/09.jpg"
                                          target="_blank"
                                          className="icon"
                                        >
                                          <i className="fa-solid fa-image"></i>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="media-thumb albam-thumb">
                                        <img
                                          src="assets/images/allmedia/10.jpg"
                                          alt="dating thumb"
                                        />
                                        <a
                                          href="assets/images/allmedia/10.jpg"
                                          target="_blank"
                                          className="icon"
                                        >
                                          <i className="fa-solid fa-camera"></i>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="media-thumb video-thumb">
                                        <img
                                          src="assets/images/allmedia/11.jpg"
                                          alt="dating thumb"
                                        />
                                        <a
                                          href="assets/images/allmedia/11.jpg"
                                          target="_blank"
                                          className="icon"
                                        >
                                          <i className="fa-solid fa-circle-play"></i>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="media-thumb albam-thumb">
                                        <img
                                          src="assets/images/allmedia/12.jpg"
                                          alt="dating thumb"
                                        />
                                        <a
                                          href="assets/images/allmedia/12.jpg"
                                          target="_blank"
                                          className="icon"
                                        >
                                          <i className="fa-solid fa-camera"></i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-center mt-5">
                                    <a href="#" className="default-btn">
                                      <i className="fa-solid fa-spinner"></i>{" "}
                                      Load More
                                    </a>
                                  </div>
                                </div>
                              </div>

                              {/* <div
                          className="tab-pane fade"
                          id="album"
                          role="tabpanel"
                          aria-labelledby="album-tab"
                        >
                          <div className="media-content">
                            <ul className="media-upload">
                              <li className="upload-now">
                                <div className="custom-upload">
                                  <div className="file-btn">
                                    <i className="fa-solid fa-upload"></i>{" "}
                                    Upload
                                  </div>
                                  <input type="file" />
                                </div>
                              </li>
                            </ul>
                            <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-3 g-3">
                              <div className="col">
                                <div className="media-thumb albam-thumb">
                                  <img
                                    src="assets/images/allmedia/02.jpg"
                                    alt="dating thumb"
                                  />
                                  <a
                                    href="assets/images/allmedia/02.jpg"
                                    target="_blank"
                                    className="icon"
                                  >
                                    <i className="fa-solid fa-camera"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb albam-thumb">
                                  <img
                                    src="assets/images/allmedia/06.jpg"
                                    alt="dating thumb"
                                  />
                                  <a
                                    href="assets/images/allmedia/06.jpg"
                                    target="_blank"
                                    className="icon"
                                  >
                                    <i className="fa-solid fa-camera"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb albam-thumb">
                                  <img
                                    src="assets/images/allmedia/10.jpg"
                                    alt="dating thumb"
                                  />
                                  <a
                                    href="assets/images/allmedia/10.jpg"
                                    target="_blank"
                                    className="icon"
                                  >
                                    <i className="fa-solid fa-camera"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb albam-thumb">
                                  <img
                                    src="assets/images/allmedia/12.jpg"
                                    alt="dating thumb"
                                  />
                                  <a
                                    href="assets/images/allmedia/12.jpg"
                                    target="_blank"
                                    className="icon"
                                  >
                                    <i className="fa-solid fa-camera"></i>
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="text-center mt-5">
                              <a href="#" className="default-btn">
                                <i className="fa-solid fa-spinner"></i>{" "}
                                Load More
                              </a>
                            </div>
                          </div>
                        </div> */}

                              <div
                                className="tab-pane fade"
                                id="photos-media"
                                role="tabpanel"
                                aria-labelledby="photos-media-tab"
                              >
                                <div className="media-content">
                                  <ul className="media-upload">
                                    <li className="upload-now">
                                      <div className="custom-upload">
                                        <div className="file-btn">
                                          <i className="fa-solid fa-upload"></i>{" "}
                                          Upload
                                        </div>
                                        <input type="file" />
                                      </div>
                                    </li>
                                  </ul>
                                  <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-3 g-3">
                                    <div className="col">
                                      <div className="media-thumb">
                                        <img
                                          src="assets/images/allmedia/03.jpg"
                                          alt="dating thumb"
                                        />
                                        <a
                                          href="assets/images/allmedia/03.jpg"
                                          target="_blank"
                                          className="icon"
                                        >
                                          <i className="fa-solid fa-image"></i>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="media-thumb">
                                        <img
                                          src="assets/images/allmedia/04.jpg"
                                          alt="dating thumb"
                                        />
                                        <a
                                          href="assets/images/allmedia/04.jpg"
                                          target="_blank"
                                          className="icon"
                                        >
                                          <i className="fa-solid fa-image"></i>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="media-thumb">
                                        <img
                                          src="assets/images/allmedia/08.jpg"
                                          alt="dating thumb"
                                        />
                                        <a
                                          href="assets/images/allmedia/08.jpg"
                                          target="_blank"
                                          className="icon"
                                        >
                                          <i className="fa-solid fa-image"></i>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="media-thumb">
                                        <img
                                          src="assets/images/allmedia/09.jpg"
                                          alt="dating thumb"
                                        />
                                        <a
                                          href="assets/images/allmedia/09.jpg"
                                          target="_blank"
                                          className="icon"
                                        >
                                          <i className="fa-solid fa-image"></i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="text-center mt-5">
                                    <a href="#" className="default-btn">
                                      <i className="fa-solid fa-spinner"></i>{" "}
                                      Load More
                                    </a>
                                  </div>
                                </div>
                              </div>

                              {/* <div
                          className="tab-pane fade"
                          id="video"
                          role="tabpanel"
                          aria-labelledby="video-tab"
                        >
                          <div className="media-content">
                            <ul className="media-upload">
                              <li className="upload-now">
                                <div className="custom-upload">
                                  <div className="file-btn">
                                    <i className="fa-solid fa-upload"></i>{" "}
                                    Upload
                                  </div>
                                  <input type="file" />
                                </div>
                              </li>
                            </ul>
                            <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-3 g-3">
                              <div className="col">
                                <div className="media-thumb video-thumb">
                                  <img
                                    src="assets/images/allmedia/01.jpg"
                                    alt="dating thumb"
                                  />
                                  <a
                                    href="assets/images/allmedia/01.jpg"
                                    target="_blank"
                                    className="icon"
                                  >
                                    <i className="fa-solid fa-circle-play"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb video-thumb">
                                  <img
                                    src="assets/images/allmedia/05.jpg"
                                    alt="dating thumb"
                                  />
                                  <a
                                    href="assets/images/allmedia/05.jpg"
                                    target="_blank"
                                    className="icon"
                                  >
                                    <i className="fa-solid fa-circle-play"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb video-thumb">
                                  <img
                                    src="assets/images/allmedia/07.jpg"
                                    alt="dating thumb"
                                  />
                                  <a
                                    href="assets/images/allmedia/07.jpg"
                                    target="_blank"
                                    className="icon"
                                  >
                                    <i className="fa-solid fa-circle-play"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="col">
                                <div className="media-thumb video-thumb">
                                  <img
                                    src="assets/images/allmedia/11.jpg"
                                    alt="dating thumb"
                                  />
                                  <a
                                    href="assets/images/allmedia/11.jpg"
                                    target="_blank"
                                    className="icon"
                                  >
                                    <i className="fa-solid fa-circle-play"></i>
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="text-center mt-5">
                              <a href="#" className="default-btn">
                                <i className="fa-solid fa-spinner"></i>{" "}
                                Load More
                              </a>
                            </div>
                          </div>
                        </div> */}

                              {/* <div
                          className="tab-pane fade"
                          id="music"
                          role="tabpanel"
                          aria-labelledby="music-tab"
                        >
                          <div className="media-content">
                            <ul className="media-upload">
                              <li className="upload-now">
                                <div className="custom-upload">
                                  <div className="file-btn">
                                    <i className="fa-solid fa-upload"></i>{" "}
                                    Upload
                                  </div>
                                  <input type="file" />
                                </div>
                              </li>
                            </ul>
                            <div className="row">
                              <div className="col">
                                <p>
                                  <i className="icofont-worried"></i>{" "}
                                  Sorry !! There's no media found for
                                  the request !!{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div> */}
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
                        <img
                          src="assets/images/member/profile/profile.jpg"
                          alt="dating thumb"
                        />
                      </div>
                      <div className="story__content px-0 pb-0">
                        <h4>{name}</h4>
                        <div className="story__content--content mb-2 pb-3">
                          <p>
                            <i className="fa-solid fa-clock"></i> {activety}
                          </p>
                        </div>
                        <p className="mb-2">{desc}</p>
                        <div className="story__content--author mt-3 pb-2">
                          <h6 className="d-block w-100 mb-3">{name} Photos</h6>
                          <div className="row g-2">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-3 order-xl-2">
          <div className="group__bottom--right">
            <ModalSearch />
            <ActiveMember />
            <ActiveGroup />
          </div>
        </div> */}
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
