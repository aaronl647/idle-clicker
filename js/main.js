var meeseeksCount = 0;
var autoClick = 0;
var farms = 0;
var multiplier = 1;

function update() {
  document.getElementById("text").value = meeseeksCount;
  document.title = meeseeksCount + " Meeseeks";
  document.getElementById("perSecond").innerHTML = "You are getting " + (autoClick + farms * 2) * multiplier + " Meeseeks / sec.";
  
  //Multiplier
  document.getElementById("amountMultiplier").innerHTML = "Multiplier Upgrade x" + (multiplier + 1);
  document.getElementById("buyMultiplier").innerHTML = "x" + (multiplier + 1);
  document.getElementById("costMultiplier").innerHTML = (multiplier + 1) * 100 + " Meeseeks.";
  document.getElementById("currentMultiplier").innerHTML = "Your current multiplier is x" + multiplier;

  //AutoClick
  document.getElementById("amountAutoClick").innerHTML = "You Own " + autoClick + " Auto Meeseeks Makers.";
  document.getElementById("costAutoClick").innerHTML = "Cost: " + (autoClick + 1) * 10 + " Meeseeks.";

  //Farm
  document.getElementById("amountFarm").innerHTML = "You Own " + farms + " Meeseeks Farm(s).";
  document.getElementById("costFarm").innerHTML = "Cost: " + (farms + 1) * 15 + " Meeseeks.";
}

function timer() {
  meeseeksCount = meeseeksCount + autoClick * multiplier;
  meeseeksCount = meeseeksCount + farms * 2 * multiplier;
  update();
}
setInterval(timer, 1000);

function add() {
  meeseeksCount = meeseeksCount + 1;
  update();
}

function save() {
  localStorage.setItem("meeseeksCount", meeseeksCount);
  localStorage.setItem("autoClick", autoClick);
  localStorage.setItem("farms", farms);
  console.log(meeseeksCount);
}

function load() {
  meeseeksCount = localStorage.getItem("meeseeksCount");
  meeseeksCount = parseInt(meeseeksCount);
  autoClick = parseInt(localStorage.getItem("autoClick"));
  farms = parseInt(localStorage.getItem("farms"));
  update();
}

function buyAutoClick() {
  if (meeseeksCount >= (autoClick + 1) * 10) {
    meeseeksCount = meeseeksCount - (autoClick + 1) * 10;
    document.getElementById("image").src = "./images/meeseeks.png";
    document.getElementById("lookAtMe").innerHTML = "You bought an auto Meeseeks maker!";
    autoClick = autoClick + 1;
    update();
    console.log("oooo look at me!");
  }
}

function buyFarm() {
  if (meeseeksCount >= (farms + 1) * 15) {
    meeseeksCount = meeseeksCount - (farms + 1) * 15;
    document.getElementById("image").src = "./images/several.jpg";
    document.getElementById("lookAtMe").innerHTML = "You bought a Meeseeks farm!";
    farms = farms + 1;
    update();
  }
}

function buyMultiplier() {
  if (meeseeksCount >= (multiplier + 1) * 100) {
    meeseeksCount = meeseeksCount - (multiplier + 1) * 100;
    multiplier = multiplier + 1;
    update();
  }
}
