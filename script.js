async function showPrices() {
  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
  const data = await response.json();
  const pricesDiv = document.getElementById('prices');
  pricesDiv.innerHTML = `
    <h3>💰 قیمت لحظه‌ای:</h3>
    <p>Bitcoin: $${data.bitcoin.usd}</p>
    <p>Ethereum: $${data.ethereum.usd}</p>
  `;
}
