function getTipByDate(dateStr) {
  const baseDate = new Date("2025-01-01");
  const targetDate = new Date(dateStr);
  const diffDays = Math.floor((targetDate - baseDate) / (1000 * 60 * 60 * 24));
  const index = ((diffDays % tips.length) + tips.length) % tips.length;
  return tips[index];
}

function displayTip(tip) {
  document.getElementById("title").textContent = tip.title;
  document.getElementById("tip").textContent = tip.tip;
  document.getElementById("explanation").textContent = tip.explanation;
}

// JSTの今日の日付を "YYYY-MM-DD" 形式で取得
function getTodayDateStr() {
  const now = new Date();
  const jst = new Date(now.getTime() + (9 * 60 * 60 * 1000)); // UTC→JST
  return jst.toISOString().split('T')[0];
}

const todayStr = getTodayDateStr();
document.getElementById("datePicker").value = todayStr;
displayTip(getTipByDate(todayStr));

document.getElementById("datePicker").addEventListener("change", (e) => {
  const selectedDate = e.target.value;
  if (selectedDate) {
    const tip = getTipByDate(selectedDate);
    displayTip(tip);
  }
});
