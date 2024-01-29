import { Component, Fragment } from "react";
import FooterThree from "../component/layout/footerthree";
import HeaderOne from "../component/layout/header";
import AboutSection from "../component/section/about";
import AppSection from "../component/section/appsection";
import BannerOne from "../component/section/banner";
import MeetSection from "../component/section/meet";
import MemberSection from "../component/section/member";
import StorySection from "../component/section/story";
import WorkSection from "../component/section/work";
import WorkSectionTwo from "../component/section/worktwo";

const infotitle = "Contact Info";
const infosubtitle = "Let us know your opinions. Also you can write us if you have any questions.";

let infoListContent = [
    {
        imgUrl: 'assets/images/contact/icon/01.png',
        imgAlt: 'Contact Info Thumb',
        title: 'Office Address',
        desc: 'Palghar',
    },
    {
        imgUrl: 'assets/images/contact/icon/02.png',
        imgAlt: 'Contact Info Thumb',
        title: 'Phone number',
        desc: '+91 9769006253',
    },
    {
        imgUrl: 'assets/images/contact/icon/03.png',
        imgAlt: 'Contact Info Thumb',
        title: 'Send Email',
        desc: 'yourmail@gmail.com',
    },
]


class HomePage extends Component {
    render() { 
        return (
            <Fragment>
                <HeaderOne />
                <BannerOne />
                <AboutSection />

                {/* Contact Section */}
                <div className="info-section padding-top padding-bottom">
                    <div className="container">
                        <div className="section__header style-2 text-center">
                            <h2>{infotitle}</h2>
                            <p>{infosubtitle}</p>
                        </div>
                        <div className="section-wrapper">
                            <div className="row justify-content-center g-4">
                                {infoListContent.map((val, i) => (
                                    <div className="col-lg-4 col-sm-6 col-12" key={i}>
                                        <div className="contact-item text-center">
                                            <div className="contact-thumb mb-4">
                                                <img 
                                                    src={`${val.imgUrl}`} 
                                                    alt={`${val.imgAlt}`} 
                                                />
                                            </div>
                                            <div className="contact-content">
                                                <h6 className="title">{val.title}</h6>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <WorkSection /> */}
                {/* <MemberSection /> */}
                {/* <StorySection /> */}
                {/* <MeetSection /> */}
                {/* <WorkSectionTwo /> */}
                {/* <AppSection /> */}
                {/* <Footer /> */}
                <FooterThree />
            </Fragment>
        );
    }
}
 
export default HomePage;