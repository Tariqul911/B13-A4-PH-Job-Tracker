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

function getCounts() {
  const total = jobs.length;
  let interview = 0;
  let rejected = 0;

  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].status === "Interview") interview++;
    if (jobs[i].status === "Rejected") rejected++;
  }

  return { total, interview, rejected };
}

function updateDashboardCounts() {
  let interview = 0;
  let rejected = 0;

  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].status === "Interview") interview++;
    if (jobs[i].status === "Rejected") rejected++;
  }

  totalCountEl.innerText = jobs.length;
  interviewCountEl.innerText = interview;
  rejectedCountEl.innerText = rejected;
}

function getFilteredJobs() {
  if (currentTab === "All") return jobs;
  if (currentTab === "Interview") return jobs.filter((j) => j.status === "Interview");
  if (currentTab === "Rejected") return jobs.filter((j) => j.status === "Rejected");
  return jobs;
}

function updateDashboardCounts() {
  const counts = getCounts();
  totalCountEl.innerText = counts.total;
  interviewCountEl.innerText = counts.interview;
  rejectedCountEl.innerText = counts.rejected;
}

function updateTabCount() {
  const filtered = getFilteredJobs();
  tabCountEl.innerText = filtered.length;
}

function setActiveTabStyle() {
  // active styling (daisyUI)
  const all = [tabAllBtn, tabInterviewBtn, tabRejectedBtn];
  for (let i = 0; i < all.length; i++) {
    all[i].classList.remove("btn-primary");
    all[i].classList.add("btn-ghost");
  }

  if (currentTab === "All") {
    tabAllBtn.classList.add("btn-primary");
    tabAllBtn.classList.remove("btn-ghost");
  }
  if (currentTab === "Interview") {
    tabInterviewBtn.classList.add("btn-primary");
    tabInterviewBtn.classList.remove("btn-ghost");
  }
  if (currentTab === "Rejected") {
    tabRejectedBtn.classList.add("btn-primary");
    tabRejectedBtn.classList.remove("btn-ghost");
  }
}

function renderEmptyState() {
  jobsContainer.innerHTML = `
    <div class="flex flex-col items-center justify-center py-14 text-center">
      <i class="fa-regular fa-folder-open text-5xl text-[#64748B] mb-4"></i>
      <h3 class="text-2xl font-bold text-[#002C5C]">No jobs Available</h3>
      <p class="text-[#64748B] mt-2">Check back soon for new job opportunities</p>
    </div>
  `;
}
function renderJobs() {
  const filtered = getFilteredJobs();

  if (currentTab !== "All" && filtered.length === 0) {
    renderEmptyState();
    updateTabCount();
    return;
  }

  let html = "";

  for (let i = 0; i < filtered.length; i++) {
    const job = filtered[i];

    const isInterview = job.status === "Interview";
    const isRejected = job.status === "Rejected";

    html += `
      <div class="bg-white rounded-xl p-6 border border-gray-200/70">
        <div class="flex justify-between items-start">
          <div>
            <h2 class="text-2xl font-bold text-[#002C5C]">${job.companyName}</h2>
            <p class="text-[#64748B]">${job.position}</p>
          </div>

          <button class="btn btn-ghost btn-sm" data-action="delete" data-id="${job.id}" title="Delete">
            <i class="fa-regular fa-trash-can text-lg"></i>
          </button>
        </div>

        <p class="text-[#64748B] py-3">${job.location} • ${job.type} • ${job.salary}</p>

        <div class="pb-3">
          ${
            job.status
              ? `<span class="badge ${isInterview ? "badge-success" : "badge-error"} badge-outline">
                    Status: ${job.status}
                 </span>`
              : `<span class="badge badge-neutral badge-outline">Status: Not Applied</span>`
          }
        </div>

        <p class="text-[#323B49] pb-4">${job.description}</p>

        <div class="flex flex-wrap gap-3">
          <button
            class="btn btn-outline btn-success"
            data-action="interview"
            data-id="${job.id}"
          >
            Interview
          </button>

          <button
            class="btn btn-outline btn-secondary"
            data-action="rejected"
            data-id="${job.id}"
          >
            Rejected
          </button>
        </div>
      </div>
    `;
  }

  jobsContainer.innerHTML = html;

  updateTabCount();
}

function changeTab(tabName) {
  currentTab = tabName;
  setActiveTabStyle();
  renderJobs();
}

function setJobStatus(jobId, newStatus) {
  // newStatus: "Interview" or "Rejected"
  const id = Number(jobId);

  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].id === id) {
      jobs[i].status = newStatus;
      break;
    }
  }

  updateDashboardCounts();

  changeTab(newStatus);
}

function deleteJob(jobId) {
  const id = Number(jobId);

  // remove from array
  const index = jobs.findIndex((j) => j.id === id);
  if (index !== -1) {
    jobs.splice(index, 1);
  }

  updateDashboardCounts();
  renderJobs(); // keep same currentTab
}

// --------- Event Listeners ----------
tabAllBtn.addEventListener("click", function () {
  changeTab("All");
});

tabInterviewBtn.addEventListener("click", function () {
  changeTab("Interview");
});

tabRejectedBtn.addEventListener("click", function () {
  changeTab("Rejected");
});

// --------- Event Delegation ---------
jobsContainer.addEventListener("click", function (e) {
  const target = e.target;

  // button or icon click handle
  const btn = target.closest("button");
  if (!btn) return;

  const action = btn.getAttribute("data-action");
  const id = btn.getAttribute("data-id");

  if (!action || !id) return;

  if (action === "interview") {
    setJobStatus(id, "Interview");
  }

  if (action === "rejected") {
    setJobStatus(id, "Rejected");
  }

  if (action === "delete") {
    deleteJob(id);
  }
});

// ---------- Initial render --------------
updateDashboardCounts();
setActiveTabStyle();
renderJobs();



