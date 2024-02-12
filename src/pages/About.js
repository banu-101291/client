import React from "react";
import Layout from "./../components/Layout/Layout";
import img from '../images/Aboutus.jpg'
const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={img}
            alt="contactus"
            style={{ width: "75%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          E-commerce platforms often have user-friendly return and exchange policies, 
          making it convenient for customers to return items that do not meet their 
          expectations or exchange them for a different size or color.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;