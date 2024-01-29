import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import PageHeader from "../component/layout/pageheader";
import { Link } from "react-router-dom";
import FooterThree from "../component/layout/footerthree";
import HeaderOne from "../component/layout/header";
import ReadMoreReact from 'read-more-react';


const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const api = `${process.env.REACT_APP_DOMAIN}/api/blog/all`;
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Replace "http://localhost:3000/blogs" with your actual API endpoint
        const response = await axios.get(api);
        const data = response.data;
        setBlogs(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    // Fetch blogs when the component mounts
    fetchBlogs();
  }, [api]);

  

  return (
    <Fragment>
      <HeaderOne />
      <PageHeader title={"Our Blog Post"} curPage={"Blog"} />
      <div className="blog-section padding-top padding-bottom">
        <div className="container">
          <div className="section-wrapper">
            <div className="row g-4 justify-content-center">
              {blogs.map((val, i) => (
                <div className="col-lg-6 col-12" key={i}>
                  <div className="blog__item">
                    <div className="blog__inner">
                      <div className="blog__content px-3 py-4">
                        <h3>{val.title}</h3>
                        <div className="blog__metapost">
                          <span>{val.name}{" : "}</span>
                          <span>{val.date}</span>
                        </div>
                        {/* <p>{val.desc}</p> */}
                        <ReadMoreReact 
        text={val.desc}
                      readMoreText="click here to read more"/>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterThree />
    </Fragment>
  );
};

export default BlogPage;
