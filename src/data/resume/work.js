/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: "Fields Software Company",
    position: "Web Developer",
    url: "",
    startDate: "2024-02-01",
    endDate: "2026-02-01",
    summary:
      "Web development focusing on client websites and company website redesign",
    highlights: [
      "Collaborated with external clients to modify and update their websites using HTML and CSS",
      "Customized client websites using CMS platforms like WordPress",
      "Lead the redesign of the company's website using React and React Motion",
      "Enhanced website interactivity and modernized interface",
    ],
  },
  {
    name: "Gyeonggi Provincial Government",
    position: "Housing Management Specialist",
    url: "https://english.gg.go.kr/",
    startDate: "2021-04-01",
    endDate: "2022-08-01",
    summary: "Managed public housing programs and applications",
    highlights: [
      "Managed rental housing programs, ensuring compliance with governmental policies and regulations",
      "Approved housing applications, coordinating with relevant government departments",
      "Handled administrative duties related to public housing management",
    ],
  },
  {
    name: "Personal Projects",
    position: "Developer",
    url: "https://github.com/Hyunsoo6257",
    startDate: "2024-07-01",
    endDate: "2024-08-01",
    highlights: [
      "Developed GitPortfolio using React, Node.js, and Express",
      "Created Discord Bot for generating random Leetcode problems",
      "Participated in UQ Hackathon 2024 and ranked in top 5",
      "Received QUT Commendation for Academic Excellence",
    ],
  },
];

export default work;
