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
    name: "NewMarket Hotel",
    position: "Food and Beverage Attendant",
    url: "",
    startDate: "2024-11-01",
    endDate: "2025-06-01",
    summary:
      "Provided high-quality customer service in a fast-paced hospitality environment",
    highlights: [
      "Maintained a clean and organized work area to ensure a positive dining experience",
      "Collaborated with team members to ensure seamless service delivery",
      "ssisted in opening and closing duties, including POS operations and table arrangementss",
    ],
  },
  {
    name: "Capstone Project",
    position: "Full-Stack Developer",
    url: "",
    startDate: "2025-03-01",
    endDate: "2025-06-01",
    summary:
      "Collaborated with a Brisbane government agency to develop a full-stack internal management system",
    highlights: [
      "Developed a full-stack admin system using Next.js, Supabase, and PostgreSQL",
      "Implemented role-based access control and data visualization features",
      "Communicated weekly with the client to gather requirements and deliver requested features",
      "Deployed the application using Vercel",
    ],
  },
  {
    name: "Fields Software Company",
    position: "Front-End Developer",
    url: "",
    startDate: "2022-12-01",
    endDate: "2023-08-01",
    summary:
      "Web development focusing on client websites and company website redesign",
    highlights: [
      "Collaborated with external clients to modify and update their websites using HTML and CSS",
      "Customized client websites using CMS platforms like WordPress",
      "Lead the redesign of the company's website using React and Node.js",
      "Enhanced website interactivity and modernized interface",
    ],
  },
  {
    name: "Local Government, South Korea",
    position: "Project Coordinator",
    url: "",
    startDate: "2021-04-01",
    endDate: "2022-08-01",
    summary:
      "Reviewed architectural plans for compliance and coordinated public construction projects",
    highlights: [
      "Coordinated with architects, contractors, and internal departments to facilitate project approvals",
      "Managed public rental housing programs and approved applications in accordance with government policies",
      "Handled administrative duties related to building regulations and public infrastructure planning",
    ],
  },
];

export default work;
