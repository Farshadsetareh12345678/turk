let chart;
const ctx = document.getElementById('priceChart').getContext('2d');

async function fetchLivePrice(coin) {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`;
    const res = await fetch(url);
    const data = await res.json();
    document.getElementById('livePrice').textContent = `$${data[coin].usd}`;
}

async function fetchChartData(coin) {
    const url = `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=1&interval=hourly`;
    const res = await fetch(url);
    const data = await res.json();
    return {
        labels: data.prices.map(p => new Date(p[0]).toLocaleTimeString('fa-IR')),
        prices: data.prices.map(p => p[1])
    };
}

async function updateChart() {
    const coin = document.getElementById('coinSelect').value;
    await fetchLivePrice(coin);
    const chartData = await fetchChartData(coin);

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartData.labels,
            datasets: [{
                label: `${coin} Price`,
                data: chartData.prices,
                borderColor: '#38bdf8',
                backgroundColor: 'rgba(56,189,248,0.2)',
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } }
        }
    });
}

function calculateProfit() {
    const buy = parseFloat(document.getElementById('buyPrice').value);
    const sell = parseFloat(document.getElementById('sellPrice').value);
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(buy) || isNaN(sell) || isNaN(amount)) {
        document.getElementById('result').textContent = "لطفا همه مقادیر را وارد کنید.";
        return;
    }

    const profit = (sell - buy) * amount;
    document.getElementById('result').style.color = profit >= 0 ? 'lime' : 'red';
    document.getElementById('result').textContent = `سود/ضرر شما: ${profit.toFixed(2)} USD`;
}

updateChart();
setInterval(updateChart, 60000);
