document.getElementById("futureForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = e.target.name.value;
  const age = parseInt(e.target.age.value);
  const interests = e.target.interests.value.toLowerCase();
  const job = e.target.job.value.toLowerCase();

  let aiCompanion = interests.includes("هوش مصنوعی") ? "AI شخصی با شخصیت مشابه تو" : "دستیار دیجیتال عمومی";
  let metaverseLife = interests.includes("بازی") ? "زندگی نیمه‌واقعی در متاورس با آواتار اختصاصی" : "حضور محدود در متاورس";
  let futureJob = job.includes("برنامه‌نویس") ? "معمار سیستم‌های کوانتومی" : "مدیر تعاملات انسان و ماشین";

  const result = `
    <h2>سلام ${name} عزیز!</h2>
    <p>در سال ۲۰۴۰، با سن ${age + 15} سال، تو یکی از افراد برجسته‌ی دنیای دیجیتال خواهی بود.</p>
    <p>🔹 شغل آینده‌ات: <strong>${futureJob}</strong></p>
    <p>🔹 سبک زندگی دیجیتال: <strong>${metaverseLife}</strong></p>
    <p>🔹 همراه دیجیتال تو: <strong>${aiCompanion}</strong></p>
    <p>🔹 برند شخصی‌ات در فضای مجازی، با بیش از ۲ میلیون دنبال‌کننده، الهام‌بخش نسل جدید خواهد بود.</p>
  `;

  document.getElementById("result").innerHTML = result;
});
