
// --------- Jobs Data (8 items) ----------
const jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Collaborate with designers and backend engineers to ship smooth experiences.",
    status: null, // null | "Interview" | "Rejected"
  },
  {
    id: 2,
    companyName: "DhakaTech Studio",
    position: "Frontend Developer",
    location: "Dhaka",
    type: "Full-time",
    salary: "৳70,000 - ৳95,000",
    description:
      "Create responsive UI with HTML, Tailwind, and JavaScript. Maintain components and improve page performance.",
    status: null,
  },
  {
    id: 3,
    companyName: "Cloud Nova Ltd",
    position: "Junior Web Developer",
    location: "Remote",
    type: "Internship",
    salary: "$300 - $500",
    description:
      "Work with a mentor to build features, fix bugs, and learn Git workflow. Write clean and readable code.",
    status: null,
  },
  {
    id: 4,
    companyName: "GreenByte Solutions",
    position: "UI Developer",
    location: "Chattogram",
    type: "Contract",
    salary: "৳50,000 - ৳70,000",
    description:
      "Convert Figma designs into pixel-perfect pages. Improve accessibility and consistency across screens.",
    status: null,
  },
  {
    id: 5,
    companyName: "FinSpark",
    position: "JavaScript Developer",
    location: "Dhaka",
    type: "Full-time",
    salary: "৳80,000 - ৳110,000",
    description:
      "Build interactive dashboards, handle DOM events, and integrate REST APIs for financial products.",
    status: null,
  },
  {
    id: 6,
    companyName: "PixelBreeze",
    position: "Frontend Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$1,200 - $1,800",
    description:
      "Develop reusable UI patterns, ensure cross-browser compatibility, and ship features in weekly sprints.",
    status: null,
  },
  {
    id: 7,
    companyName: "EduWave",
    position: "Web UI Intern",
    location: "Gazipur",
    type: "Internship",
    salary: "৳12,000 - ৳18,000",
    description:
      "Assist the UI team, update landing pages, and improve mobile responsiveness for learning platforms.",
    status: null,
  },
  {
    id: 8,
    companyName: "DataDock",
    position: "Frontend Support Developer",
    location: "Remote",
    type: "Part-time",
    salary: "$600 - $900",
    description:
      "Fix UI issues, improve loading states, and support feature releases with small, focused front-end tasks.",
    status: null,
  },
];

// --------- State ----------
let currentTab = "All"; // "All" | "Interview" | "Rejected"

// --------- Elements ----------
const jobsContainer = document.getElementById("jobs-container");

const totalCountEl = document.getElementById("total-count");
const interviewCountEl = document.getElementById("interview-count");
const rejectedCountEl = document.getElementById("rejected-count");

const tabCountEl = document.getElementById("tab-count");

const tabAllBtn = document.getElementById("tab-all");
const tabInterviewBtn = document.getElementById("tab-interview"); 
const tabRejectedBtn = document.getElementById("tab-rejected");