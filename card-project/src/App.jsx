import React from "react";

import Card from './components/Card'



function App() {

  const jobOpenings = [
  {
    brandLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    company: "Amazon",
    posted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.Kg2FF2wpIK_HLyo8Q56ycAHaFj?w=236&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    company: "Google",
    posted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/024/273/862/original/meta-logo-transparent-free-png.png",
    company: "Meta",
    posted: "10 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$90/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.jNMS1d13tSBDT8JSkbtb9AHaHa?w=178&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    company: "Microsoft",
    posted: "1 week ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://th.bing.com/th?q=Apple+Logo+Transparent+Icon&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    company: "Apple",
    posted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$140/hr",
    location: "Delhi, India",
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.G1Tv7zcg9qw5ZH_EINSm-QHaHk?w=176&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    company: "Netflix",
    posted: "4 weeks ago",
    post: "UI Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://th.bing.com/th?q=Tesla+Logo+Full+HD&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    company: "Tesla",
    posted: "6 days ago",
    post: "Visual Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://th.bing.com/th?q=Walmart+Logo+Vector&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    company: "Walmart Global Tech",
    posted: "8 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$105/hr",
    location: "Gurgaon, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    company: "IBM",
    posted: "12 days ago",
    post: "Cloud Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$115/hr",
    location: "Kolkata, India",
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.3t7oAaSgcCsTpW397WTuogHaE2?w=279&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    company: "Oracle",
    posted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$100/hr",
    location: "Ahmedabad, India",
  },
];
console.log(jobOpenings)


  return(
    <div className="parent">
    {jobOpenings.map(function(elem ,idx){
      return <div key={idx}>
        <Card company={elem.company} post ={elem.post}
        tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay}  location={elem.location}  posted={elem.posted}  
        brandLogo={elem.brandLogo}/>
      </div>
    })}
      

    </div>
  )
}

export default App;