// declaring JSON Resume

let resume_json = {
  basics: {
    name: "Pushkar Dey",
    label: "Full Stack Developer",
    image: "",
    email: "PushkarDey@gmail.com",
    phone: "(0091) 8017778899",
    summary: "A summary of Pushkar Dey Resume…",
    location: {
      address: "H.No., streetName",
      postalCode: "110057",
      city: "New Delhi",
      countryCode: "India",
    },
    profiles: [
      {
        network: "Linkedin",
        username: "Pushkar Dey",
        url: "https://www.linkedin.com/in/pushkardey/",
      },
      {
        network: "GitHub",
        username: "pushkardey",
        url: "https://github.com/pushkardey",
      },
    ],
  },
  work: [
    {
      name: "BuzzClan",
      position: "Consultant Analyst",
      url: "https://buzzclan.com/",
      startDate: "2021-12-15",
      endDate: "To Present",
      summary: "TPRM Consultant",
      highlights: [
        "Worked for a large Insurance company as an Application Administrator",
        "Implemented a full fleged Third Party Risk Management Application",
        "Completed ProcessUnity Training",
        "Workflow Automation",
      ],
    },
    {
      name: "HSBC",
      position: "Credit Risk Analyst",
      url: "https://hsbc.com/",
      startDate: "2014-01-01",
      endDate: "2016-01-01",
      summary: "I worked as a Credit Risk Analyst for the Retail Credit",
      highlights: [
        "Got promoted from MIS Analyst to Credit Risk Analyst in 6 Months",
        "Implemented a full fleged MIS automation for Risk Dept",
        "Reduced workload by 85%",
        "Workflow Automation",
      ],
    },
    {
      name: "WNS Global Service",
      position: "Analyst",
      url: "https://hsbc.com/",
      startDate: "2014-01-01",
      endDate: "2016-01-01",
      summary:
        "I worked as an Analyst for the Consumer Healthcare and Pharmaceuticals for Pahrma Major",
      highlights: [
        "Got promoted from Junior Analyst to Analyst in 3 Months",
        "Implemented a full fleged MIS automation for Russia CIS division of the Pharma Major",
        "Reduced workload by 90% in 3 months with VBA Automation for Global Consumer HealthCare",
        "Reduced workload by 75% in 1 month for a Corporate Travel Service",
      ],
    },
  ],
  education: [
    {
      institution: "Post Graduation",
      url: "https://institution.com/",
      area: "Business Management",
      studyType: "Masters",
      startDate: "2012-01-01",
      endDate: "2014-01-01",
      score: "4.0",
      courses: ["DB1101 - Basic SQL"],
    },
    {
      institution: "Graduation",
      url: "https://institution.com/",
      area: "Business Adminitration",
      studyType: "Bachelor",
      startDate: "2008-01-01",
      endDate: "2012-01-01",
      score: "4.0",
      courses: ["DB1101 - Basic SQL"],
    },
    {
      institution: "Higher Secondary",
      url: "https://institution.com/",
      area: "Software Development",
      studyType: "Higher Secondary",
      startDate: "2008-01-01",
      endDate: "2006-01-01",
      score: "4.0",
      courses: ["DB1101 - Basic SQL"],
    },
    {
      institution: "Secondary",
      url: "https://institution.com/",
      area: "English, Mathematics, Science, Social Studies, Computer",
      studyType: "Secondary",
      endDate: "2006-01-01",
      score: "4.0",
      courses: ["DB1101 - Basic SQL"],
    },
  ],
  certificates: [
    {
      name: "Full Stack Developer",
      date: "2022-07-01",
      issuer: "Guvi",
      url: "https://guvi_certificate.com",
    },
  ],
  skills: [
    {
      name: "Web Development",
      level: "Master",
      keywords: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Business Analytics",
      level: "Master",
      keywords: ["SQL", "Tableu", "Microsoft Excel"],
    },
    {
      name: "Data Science",
      level: "Master",
      keywords: ["Python", "Pandas", "SciKit Learn"],
    },
  ],
  languages: [
    {
      language: "English",
      fluency: "Good",
    },
    {
      language: "Hindi",
      fluency: "Fluent",
    },
    {
      language: "Bengali",
      fluency: "Native Speaker",
    },
  ],
  interests: [
    {
      name: "Wildlife",
      keywords: ["Ferrets", "Unicorns"],
    },
  ],
  projects: [
    {
      name: "Project",
      description: "Description…",
      highlights: ["Won award at AIHacks 2022"],
      keywords: ["HTML"],
      startDate: "2019-01-01",
      endDate: "2021-01-01",
      url: "https://project.com/",
      roles: ["Team Lead"],
      entity: "Entity",
      type: "application",
    },
  ],
};

// store select html object in a varable sel_dd

let sel_dd = document.getElementById("ritems"); // set select options dropdown html element to sel_dd variable

let arr_of_keys = Object.keys(resume_json); //get list of keys in the json object

// loop through all the keys and put them in the dropdown
arr_of_keys.forEach((x) => {
  let opt = document.createElement("option");
  opt.innerText = x;
  opt.value = x;
  sel_dd.add(opt);
});

//Add functionality to submit button
function selectFromList() {
  // if statement if my list exists remove it
  if (document.getElementById("myListId")) {
    document.getElementById("myListId").remove();
  }
  //create new unordered list element and append to the Div
  let mylist = document.createElement("ul");
  mylist.id = "myListId"; // give id
  // run a for each loop over the keys array in resume_json first level keys array selescted in the dropdown
  document.getElementById("showSelected").appendChild(mylist); //append list to div
  Object.keys(resume_json[sel_dd.value]).forEach((element) => {
    let listElement = document.createElement("li");
    listElement.innerText = `${element} : ${
      resume_json[sel_dd.value][element]
    }`;
    console.log(listElement.innerText);
    listElement.value = element;
    document.getElementById("myListId").appendChild(listElement);
  });
  //   document.getElementById("showSelected").innerHTML = resume_json[sel_dd.value];
}

// console.log();
// *************Final thoughts : Requires nested for loops to iterate over all the Nested JSON
