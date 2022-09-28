// Initialize variables
let _state, _city;
let stateOpt = document.querySelector(".stateOpt")
let cityOpt = document.getElementsByClassName(".cityOpt")
let SselecT = document.getElementById("state");
let CselecT = document.getElementById("city");

// JSON
const Select = '{"state":[{"stateName":"Maharastra","city":["Mumbai","Beed","Kaij"]},{"stateName":"Rajasthan","city":["Jodhpur","Jaipur","Udaipur"]}]}';

// Convert into object
const values = JSON.parse(Select);

// Fetching all states and displaying in option tag
values["state"].forEach((fetchstate) => {
values["state"].forEach((fetchstate, stateIndex) => {
    console.log(fetchstate, stateIndex);
    _state = `<option class="stateOpt" value=${fetchstate.stateName}>${fetchstate.stateName}</option>`;
    SselecT.innerHTML += _state;
    if(this[this.selectedIndex]){
        console.log(fetchstate.city)
        
    }
});

// on every change 
SselecT.addEventListener("change",function(e){
    
    // Fetch state
    values.state.forEach((ele, i)=>{
        
        // whether selected option match or not
        if(this[this.selectedIndex].text === ele.stateName){

            // Fetch city and display in option tag
            ele.city.forEach((fetchcity)=>{
                _city = `<option class="cityOpt" value=${fetchcity}>${fetchcity}</option>`;
                CselecT.innerHTML += _city;
            });
        }
    })
});
