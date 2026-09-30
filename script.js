const searchInput=document.querySelector("#search");
const locationInput=document.querySelector("#location")
const searchResult = document.querySelector("#searchResult");
const searchForm=document.querySelector("#searchForm");
searchForm.addEventListener("submit" ,function(event){
     event.preventDefault();
    if(searchInput.value.trim()=== ""){
        searchResult.textContent="Please enter a job title."
    }else if(locationInput.value.trim() === ""){
        searchResult.textContent="Please enter a Job loaction"

    }else{
         searchResult.textContent=` Searching for ${searchInput.value}  jobs in ${locationInput.value}`;
    
        
    }

    

   
    
    
});
