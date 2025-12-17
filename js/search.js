/* =========================
   AI Vision – Smart Search
   ========================= */

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  const results = contentData.filter(item =>
    item.caption.toLowerCase().includes(query) ||
    item.tags.join(" ").toLowerCase().includes(query)
  );

  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  currentIndex = 0;

  results.slice(0, ITEMS_PER_LOAD).forEach(item => {
    createCard(item, currentIndex++);
  });
});
