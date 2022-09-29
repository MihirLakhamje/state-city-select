// Initialize variables
let stateKey,cityValue;
let _state, _city;
let onSelectState;
let stateOpt = document.querySelector(".stateOpt")
let cityOpt = document.getElementsByClassName(".cityOpt")
let SselecT = document.getElementById("state");
let CselecT = document.getElementById("city");

// JSON
const Select = '{"Maharastra":["Mumbai","Beed","Kaij"], "Rajasthan":["Jodhpur","Jaipur","Udaipur"]}';

// Convert into object
const jsonData = JSON.parse(Select);
// Fetching all states and displaying in option tag
for(stateKey in jsonData){
    console.log(stateKey)
    _state = `<option class="stateOpt value="${stateKey}">${stateKey}</option>`;
    SselecT.innerHTML += _state;
}

SselecT.addEventListener("change",function(e){
    onSelectState = this[this.selectedIndex].text;
    for(stateKey in jsonData){
        if(onSelectState === stateKey){
            _city = `<option class="cityOpt value="${stateKey}">${stateKey}</option>`;
            CselecT.innerHTML += _city;
        }
    }
});

// on every change 
