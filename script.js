
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

const today = new Date();
document.getElementById("datePicker").valueAsDate = today;
displayTip(getTipByDate(today.toISOString().split('T')[0]));

document.getElementById("datePicker").addEventListener("change", (e) => {
  const selectedDate = e.target.value;
  if (selectedDate) {
    const tip = getTipByDate(selectedDate);
    displayTip(tip);
  }
});
