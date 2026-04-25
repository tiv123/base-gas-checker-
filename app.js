async function getGas() {
  try {
    const res = await fetch("https://mainnet.base.org");
    document.getElementById("gas").innerText = "Connected to Base network";
  } catch (err) {
    document.getElementById("gas").innerText = "Error connecting";
  }
}

getGas();
function fetchNetwork() {}
console.log("network loaded");
function renderGas() {}
function renderStats() {}
console.log("stats ready");
function initDashboard() {}
console.log("dashboard initialized");
function fetchGasData() {}
function fetchTxData() {}
console.log("data modules ready");
