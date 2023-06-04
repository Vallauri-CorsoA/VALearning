const nuovoBadgeArgomento = (argomento) => {
  const badge = document.createElement("span");
  badge.className = "badge rounded-pill text-bg-secondary mx-1";
  badge.textContent = argomento;

  badge.style.cursor = "pointer";
  badge.onclick = (e) => e.target.remove();

  return badge;
};

const nuovoOpzioneRisposteMultiple = () => {
  const html = `
    <div class="input-group my-2">
      <div class="input-group-text">
        <input
          class="form-check-input mt-0"
          type="radio"
          name="risposteMultiple-opzione"
        />
      </div>
      <input
        type="text"
        class="form-control"
        aria-label="Text input with radio button"
        placeholder="Nuova opzione"
      />
    </div>
  `;
  return new DOMParser()
    .parseFromString(html, "text/html")
    .querySelector("div.input-group");
};

const cercaParola = (arr, target) => {
  target = target.toLowerCase();
  for (const item of arr) {
    if (item.toLowerCase().startsWith(target)) return item;
  }
  return null;
};

const nuovoAlert = (success, messaggio) => {
  console.log(messaggio)
  const html = `
    <div class="alert alert-${success ? 'success' : 'warning'} alert-dismissible fade show" role="alert">
      ${messaggio}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
  return new DOMParser()
    .parseFromString(html, "text/html")
    .querySelector(".alert");
};
