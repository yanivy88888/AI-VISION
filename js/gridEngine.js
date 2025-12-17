/* =========================
   AI Vision – Dynamic Grid Engine
   ========================= */

function randomSpan() {
  return Math.floor(Math.random() * 3) + 2; // 2–4
}

function applyRandomGrid() {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const rowSpan = randomSpan();
    card.style.gridRowEnd = `span ${rowSpan * 10}`;
  });
}

// Re-randomize layout every refresh
window.addEventListener("load", () => {
  setTimeout(applyRandomGrid, 300);
});

// Re-randomize when new cards load
const observer = new MutationObserver(() => {
  applyRandomGrid();
});

observer.observe(document.getElementById("grid"), {
  childList: true
});
