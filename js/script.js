// Initialize variables
let stateKey,cityValue, opt;
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
console.log(jsonData)
// Fetching all states and displaying in option tag
for(stateKey in jsonData){
    _state += `<option class="stateOpt" value="${stateKey}">${stateKey}</option>`;
    SselecT.innerHTML = _state;
    console.log(jsonData[stateKey]);
    for(cityValue of jsonData[stateKey]){
        console.log(cityValue);
        if(SselecT[SselecT.selectedIndex].value === stateKey)
        _city += `<option class="cityOpt" value="${cityValue}">${cityValue}</option>`;
        CselecT.innerHTML = _city;
    }
}

SselecT.addEventListener("change",()=>{
    _city = "";
    onSelectState = SselecT[SselecT.selectedIndex].value
    for(stateKey in jsonData){
        for(cityValue of jsonData[stateKey]){
            console.log(cityValue);
            if(SselecT[SselecT.selectedIndex].value === stateKey)
            _city += `<option class="cityOpt" value="${cityValue}">${cityValue}</option>`;
            CselecT.innerHTML = _city;
        }
    }
});