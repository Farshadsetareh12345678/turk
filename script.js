function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('fa-IR');
    document.getElementById('clock').textContent = timeString;
}

const quotes = [
    "هر روز یک شروع تازه است.",
    "بهترین زمان برای شروع، همین حالاست.",
    "باور کن که می‌توانی و در نیمه راهی.",
    "موفقیت نتیجه تلاش‌های کوچک روزانه است.",
    "امروز را شگفت‌انگیز بساز."
];

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

setInterval(updateClock, 1000);
updateClock();
showRandomQuote();
