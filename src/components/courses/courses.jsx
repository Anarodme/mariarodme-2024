import React from "react";
import "./courses.css";
import { certifications } from "../courses/data.jsx";


const Courses = () => {
  return (
    <section className="courses section" id="courses">
      <h2 className="section__title">Courses</h2>

      <div className="courses__container container grid">
        {/* Map through the certifications array to render each certificate */}
        {certifications.certifications.map((certificate, index) => (
          <div className="cert-card" key={index}>
            <div className="content">
              <a
                href={certificate.certificate_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  style={{ backgroundColor: certificate.color_code }}
                >
                  <img className="logo_img" src={certificate.logo_path} alt={certificate.alt_name}/>
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="title">Certificate</h3>
                </div>
              </a>
            </div>
            <div className="cert-body">
              <h2 className="cert-body-title">{certificate.title}</h2>
              <h3 className="cert-body-subtitle">{certificate.subtitle}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
