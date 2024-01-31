import React, { useState } from "react";
import "./education.css";
import logoUtn from "../../assets/logoUtn.png";
import logoCtp from "../../assets/logoCtp.png";

function Education() {
  const degrees = [
    {
      title: "Universidad Técnica Nacional",
      subtitle: "Bachelor's degree Business Management Administration",
      logo_path: logoUtn,
      alt_name: "Universidad Técnica Nacional",
      duration: "2018 - 2023",
      descriptions: [
        "I have studied basic business administration subjects like marketing, project management, cost accounting, occupational safety, business law, etc.",
        "Apart from this, I have done courses on Word, Excel, spreadsheets, customer service.",
      ],
    },
    {
      title: "CTP Ricardo Castro Beer",
      subtitle: "Executive Secretarial Technician",
      logo_path: logoCtp,
      alt_name: "CTP Ricardo Castro Beer",
      duration: "2014 - 2016",
      descriptions: [
        "Proficient in various office software suites such as Microsoft Office (Word, Excel, PowerPoint, Outlook) and Google Workspace.",
        "Experienced in maintaining confidential records, drafting documents, and proofreading reports with a high level of accuracy.",
        "Strong interpersonal and communication skills, adept at interacting with clients, executives, and colleagues professionally and courteously.",
        "Knowledgeable about office etiquette, protocols, and best practices to maintain a professional and organized work environment.",
        "Capable of multitasking and prioritizing tasks efficiently to meet deadlines and support the smooth functioning of the executive's office.",
      ],
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to manage the clic
  const handleCardClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="education-container" id="education">
      <h2 className="section-title">Education</h2>
      <div className="degree-cards-container">
        {degrees.map((degree, index) => (
          <div
            key={index}
            className={`degree-card ${
              expandedIndex === index ? "expanded" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <img
              src={degree.logo_path}
              alt={degree.alt_name}
              className="degree-logo"
            />
            <h3 className="degree-title">{degree.title}</h3>
            <h4 className="degree-subtitle">{degree.subtitle}</h4>
            {expandedIndex === index && (
              <div className="degree-info">
                {degree.descriptions.map((description, i) => (
                  <p key={i}>{description}</p>
                ))}
                <a
                  href={degree.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
