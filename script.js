// گرفتن قیمت‌ها از API رایگان CoinGecko
async function fetchPrices() {
    const symbols = ['bitcoin', 'ethereum', 'tether'];
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${symbols.join(',')}&vs_currencies=usd&include_24hr_change=true`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        const table = document.getElementById('priceTable');
        table.innerHTML = '';

        for (let key in data) {
            const price = data[key].usd.toFixed(2);
            const change = data[key].usd_24h_change.toFixed(2);
            const row = `<tr>
                <td>${key}</td>
                <td>$${price}</td>
                <td style="color:${change >= 0 ? 'lime' : 'red'}">${change}%</td>
            </tr>`;
            table.innerHTML += row;
        }
    } catch (err) {
        console.error(err);
    }
}

// ماشین‌حساب سود/ضرر
function calculateProfit() {
    const buy = parseFloat(document.getElementById('buyPrice').value);
    const sell = parseFloat(document.getElementById('sellPrice').value);
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(buy) || isNaN(sell) || isNaN(amount)) {
        document.getElementById('result').textContent = "لطفا همه مقادیر را وارد کنید.";
        return;
    }

    const profit = (sell - buy) * amount;
    document.getElementById('result').textContent = `سود/ضرر شما: ${profit.toFixed(2)} USD`;
}

fetchPrices();
setInterval(fetchPrices, 60000); // هر ۱ دقیقه آپدیت
