/* =========================
   AI Vision – Data Loader
   ========================= */

let currentIndex = 0;

function loadCategoryOptions() {
  const select = document.getElementById("categorySelect");
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat.id;
    option.textContent = cat.name;
    select.appendChild(option);
  });
}

function loadContent(reset = false) {
  const grid = document.getElementById("grid");
  if (reset) {
    grid.innerHTML = "";
    currentIndex = 0;
  }

  const slice = contentData
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(currentIndex, currentIndex + ITEMS_PER_LOAD);

  slice.forEach((item, i) => {
    createCard(item, currentIndex + i);
  });

  currentIndex += ITEMS_PER_LOAD;
}

function createCard(item, index) {
  const grid = document.getElementById("grid");

  if (adsConfig.enabled && index % adsConfig.frequency === 0) {
    grid.appendChild(createAdCard());
  }

  const card = document.createElement("div");
  card.className = "card";
  card.dataset.category = item.category;

  let media;
  if (item.type === "video") {
    media = document.createElement("video");
    media.src = item.src;
    media.muted = true;
    media.loop = true;
    media.autoplay = true;
  } else {
    media = document.createElement("img");
    media.src = item.src;
    media.alt = item.alt || "AI Vision Media";
  }

  card.appendChild(media);

  card.onclick = () => openFullView(item);
  card.ondblclick = () => window.open(item.link || "#", "_blank");

  grid.appendChild(card);
}

function openFullView(item) {
  window.open(item.src, "_blank");
}

// Initial load
window.onload = () => {
  loadCategoryOptions();
  loadContent();

  document.getElementById("loadMoreBtn").onclick = () => loadContent();

  document.getElementById("categorySelect").onchange = (e) => {
    const selected = e.target.value;
    const filtered = selected === "all"
      ? contentData
      : contentData.filter(c => c.category === selected);

    window.contentData = filtered;
    loadContent(true);
  };
};
