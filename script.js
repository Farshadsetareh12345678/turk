const moods = [
    { text: "امروز پر از انرژی و انگیزه‌ای! 💪", color: "#ff9a9e" },
    { text: "یک روز آرام و پر از آرامش داری 🌿", color: "#a1c4fd" },
    { text: "امروز روز خلاقیت و ایده‌های نو است 🎨", color: "#fbc2eb" },
    { text: "یک روز پر از شگفتی در انتظارت است ✨", color: "#fddb92" },
    { text: "امروز روزی برای ماجراجویی است 🚀", color: "#84fab0" }
];

function generateMood() {
    const random = moods[Math.floor(Math.random() * moods.length)];
    document.getElementById('mood').textContent = random.text;
    document.body.style.background = random.color;
}
