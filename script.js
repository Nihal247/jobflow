const searchInput=document.querySelector("#search");
const locationInput=document.querySelector("#location")
const searchResult = document.querySelector("#searchResult");
const searchForm=document.querySelector("#searchForm");
const jobGrid=document.querySelector(".job-grid")

const jobs = [
    {
        title: "Frontend Developer",
        company: "Google",
        location: "Bangalore",
        workMode: "Remote",
        salary: "₹8–12 LPA",
        skills: "React | JavaScript | CSS",
        type: "Full-time"
    },
    {
        title: "React Developer",
        company: "Microsoft",
        location: "Hyderabad",
        workMode: "Hybrid",
        salary: "₹10–16 LPA",
        skills: "React | TypeScript | Azure",
        type: "Full-time"
    },
    {
        title: "Backend Developer",
        company: "Amazon",
        location: "Kochi",
        workMode: "Remote",
        salary: "₹7–12 LPA",
        skills: "Node.js | Express | MongoDB",
        type: "Full-time"
    }
];

searchForm.addEventListener("submit" ,function(event){
     event.preventDefault();
     
    
    if(searchInput.value.trim()=== ""){
        searchResult.textContent="Please enter a job title."
    }else if(locationInput.value.trim() === ""){
        searchResult.textContent="Please enter a Job loaction"

    }else{
 const searchTerm = searchInput.value.toLowerCase();
 const locationTerm = locationInput.value.toLowerCase();
     const filteredJobs = jobs.filter(function(job) {
    return job.title.toLowerCase().includes(searchTerm) && job.location.toLowerCase().includes(locationTerm) ;
});
console.log(filteredJobs);
if (filteredJobs.length === 0) {
    searchResult.textContent = "No jobs found. Try a different job title or location.";
}else{


         searchResult.textContent=` Searching for ${searchInput.value}  jobs in ${locationInput.value}`;
}
 const jobCards=filteredJobs.map(function(job){
        return `
    <div class="job-card">
        <h3>${job.title}</h3>
        <p>${job.company}</p>
        <p>${job.location}</p>
        <p>${job.workMode}</p>
        <p>${job.salary}</p>
        <p>${job.skills}</p>
        <p>${job.type}</p>
    </div>
`;
    })
    console.log(jobCards);
        const jobHTML = jobCards.join(" ");
jobGrid.innerHTML = jobHTML;

    }


   
    
    
});

