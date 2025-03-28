document.querySelector("#HeadCitcle").addEventListener("mouseover", HeadHighligt);
document.querySelector("#HeadCitcle").addEventListener("mouseout", HeadUnHighligt);
document.querySelector("#HeadCitcle").addEventListener("click", HeadInfo);

function HeadHighligt() {
  console.log("HeadHighligt");
  document.querySelector("#HeadCitcle").style.fill = "#fff";
}
function HeadUnHighligt() {
  console.log("HeadUnHighligt");
  document.querySelector("#HeadCitcle").style.fill = "#f00";
}
function HeadInfo() {
  console.log("HeadInfo");
  document.querySelector(".info-text > h2").textContent = "Hovedet!";
  document.querySelector(".info-text > article > p").textContent = "Ailens er lidt klogere end menneske Det er derfor klogt i, at stå sammen mod trugten";
}

document.querySelector("#StomachCitcle").addEventListener("mouseover", StomachHighligt);
document.querySelector("#StomachCitcle").addEventListener("mouseout", StomachUnHighligt);
document.querySelector("#StomachCitcle").addEventListener("click", StomachInfo);

function StomachHighligt() {
  document.querySelector("#StomachCitcle").style.fill = "#fff";
}
function StomachUnHighligt() {
  document.querySelector("#StomachCitcle").style.fill = "#f00";
}
function StomachInfo() {
  console.log("StomachInfo");
  document.querySelector(".info-text > h2").textContent = "Mave!";
  document.querySelector(".info-text > article > p").innerHTML = "Våben";
  document.querySelector(".info-text > article > p").innerHTML += "<br>De to beste våben er pistol og tennisbold du kan dræbe dem med pistol, du skal bare remme maven ";
  document.querySelector(".info-text > article > p").innerHTML += "<br> Tennisbold kaste du imod dem og de bliver lammet";
}

document.querySelector("#LegCitcle").addEventListener("mouseover", LegHighligt);
document.querySelector("#LegCitcle").addEventListener("mouseout", LegUnHighligt);
document.querySelector("#LegCitcle").addEventListener("click", LegInfo);

function LegHighligt() {
  document.querySelector("#LegCitcle").style.fill = "#fff";
}
function LegUnHighligt() {
  document.querySelector("#LegCitcle").style.fill = "#f00";
}
function LegInfo() {
  console.log("LeghInfo");
  document.querySelector(".info-text > h2").textContent = "Ben!";
  document.querySelector(".info-text > article > p").textContent = "Deres ben er så tynde, at du kan nå, at løbe dra dem, men du skal være hurtig, så de ikke nårh hen til deres skib";
}
