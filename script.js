// TradingView Chart
new TradingView.widget({
  "container_id": "tradingview_chart",
  "symbol": "BINANCE:BTCUSDT",
  "interval": "60",
  "theme": "dark",
  "style": "1",
  "locale": "fa",
  "autosize": true
});

// اخبار کریپتو
async function loadNews() {
  const res = await fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN');
  const data = await res.json();
  const newsList = document.getElementById('news');
  newsList.innerHTML = data.Data.slice(0,5).map(n => `<li><a href="${n.url}" target="_blank">${n.title}</a></li>`).join('');
}
loadNews();

// چت دستیار
function sendMessage() {
  let input = document.getElementById('userInput').value;
  let chatbox = document.getElementById('chatbox');
  chatbox.innerHTML += `<p><strong>شما:</strong> ${input}</p>`;
  chatbox.innerHTML += `<p><strong>دستیار:</strong> تحلیل این بخش رو بعداً اضافه می‌کنیم 😉</p>`;
  document.getElementById('userInput').value = '';
}
