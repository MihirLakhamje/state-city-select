let _state, _city;
let stateOpt = document.querySelector(".stateOpt")
let cityOpt = document.querySelector(".cityOpt")
let SselecT = document.getElementById("state");
let CselecT = document.getElementById("city");

const Select = '{"state":[{"stateName":"Maharastra","city":["Mumbai","Beed","Kaij"]},{"stateName":"Rajasthan","city":["Bambir","rajasthan state 1","rajasthan state 2"]}]}';
const values = JSON.parse(Select);

values["state"].forEach((fetchstate, stateIndex) => {
    _state = `<option class="stateOpt" value=${fetchstate.stateName}>${fetchstate.stateName}</option>`;
    SselecT.innerHTML += _state;
});

SselecT.addEventListener("change",function(e){
    console.log(this[this.selectedIndex].text);
    values.state.forEach((ele, i)=>{
        if(this[this.selectedIndex].text == ele.stateName){
            console.log(ele.city);
            ele.city.forEach((fetchcity)=>{
                _city = `<option class="stateOpt" value=${fetchcity}>${fetchcity}</option>`;
                CselecT.innerHTML += _city;

            });
        }
    })
});
