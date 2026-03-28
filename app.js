async function getGas() {
  try {
    const res = await fetch("https://mainnet.base.org");
    document.getElementById("gas").innerText = "Connected to Base network";
  } catch (err) {
    document.getElementById("gas").innerText = "Error connecting";
  }
}

getGas();
