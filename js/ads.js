/* =========================
   AI Vision – Advertising Engine
   ========================= */

function createAdCard() {
  const ad = document.createElement("div");
  ad.className = "card";
  ad.id = "adCard";

  ad.innerHTML = `
    <div style="padding:20px;text-align:center;">
      <h3>${adsConfig.fallback.title}</h3>
      <p>Promote your brand on AI Vision</p>
      <a href="${adsConfig.fallback.link}" target="_blank">Visit</a>
    </div>
  `;

  return ad;
}
