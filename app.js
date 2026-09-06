const months = [
  "Gen.",
  "Febr.",
  "Març",
  "Abr.",
  "Maig",
  "Juny",
  "Jul.",
  "Ag.",
  "Set.",
  "Oct.",
  "Nov.",
  "Des.",
];

const fullMonths = [
  "gener",
  "febrer",
  "març",
  "abril",
  "maig",
  "juny",
  "juliol",
  "agost",
  "setembre",
  "octubre",
  "novembre",
  "desembre",
];

const seasons = {
  all: [...Array(12)].map((_, index) => index + 1),
  spring: [3, 4, 5],
  summer: [6, 7, 8],
  autumn: [9, 10, 11],
  winter: [12, 1, 2],
};

const currentMonth = new Date().getMonth() + 1;
const currentSeason =
  Object.entries(seasons).find(
    ([name, seasonMonths]) => name !== "all" && seasonMonths.includes(currentMonth),
  )?.[0] || "all";

const crops = [
  { name: "Tomàquet", category: "Fruits", icon: "◉", seedbed: [[2, 3]], planting: [[4, 5]], harvest: [[6, 10]] },
  { name: "Pebrot", category: "Fruits", icon: "♢", seedbed: [[1, 3]], planting: [[5, 5]], harvest: [[7, 10]] },
  { name: "Albergínia", category: "Fruits", icon: "●", seedbed: [[1, 3]], planting: [[5, 5]], harvest: [[7, 10]] },
  { name: "Carbassó", category: "Fruits", icon: "◒", seedbed: [[3, 4]], direct: [[5, 6]], planting: [[5, 6]], harvest: [[6, 10]] },
  { name: "Cogombre", category: "Fruits", icon: "◐", seedbed: [[3, 4]], direct: [[5, 6]], planting: [[5, 6]], harvest: [[6, 9]] },
  { name: "Carbassa", category: "Fruits", icon: "◉", seedbed: [[3, 4]], direct: [[5, 5]], planting: [[5, 5]], harvest: [[9, 10]] },
  { name: "Meló", category: "Fruits", icon: "◎", seedbed: [[3, 4]], direct: [[5, 5]], planting: [[5, 5]], harvest: [[7, 9]] },
  { name: "Síndria", category: "Fruits", icon: "◉", seedbed: [[3, 4]], direct: [[5, 5]], planting: [[5, 5]], harvest: [[7, 9]] },
  { name: "Mongeta", category: "Lleguminoses", icon: "⌁", direct: [[4, 6], [8, 8]], harvest: [[6, 10]] },
  { name: "Pèsol", category: "Lleguminoses", icon: "••", direct: [[1, 3], [10, 11]], harvest: [[3, 5]] },
  { name: "Fava", category: "Lleguminoses", icon: "⌇", direct: [[1, 2], [10, 12]], harvest: [[3, 5]] },
  { name: "Tramús (lupí)", category: "Lleguminoses", icon: "♧", direct: [[2, 3], [10, 12]], harvest: [[5, 7]] },
  { name: "Enciam", category: "Fulles", icon: "≋", seedbed: [[1, 5], [8, 11]], direct: [[2, 4], [9, 10]], planting: [[2, 6], [9, 12]], harvest: [[1, 6], [9, 12]] },
  { name: "Canonges", category: "Fulles", icon: "✣", direct: [[9, 11]], harvest: [[1, 3], [11, 12]] },
  { name: "Ruca", category: "Fulles", icon: "⌇", direct: [[2, 5], [9, 11]], harvest: [[1, 6], [10, 12]] },
  { name: "Espinac", category: "Fulles", icon: "◆", direct: [[1, 4], [9, 11]], harvest: [[1, 5], [10, 12]] },
  { name: "Bleda", category: "Fulles", icon: "♠", seedbed: [[2, 4], [8, 9]], direct: [[3, 6], [9, 10]], planting: [[3, 5], [9, 10]], harvest: [[1, 12]] },
  { name: "Escarola", category: "Fulles", icon: "≋", seedbed: [[6, 8]], direct: [[7, 8]], planting: [[8, 10]], harvest: [[1, 3], [10, 12]] },
  { name: "Kale", category: "Fulles", icon: "♣", seedbed: [[7, 8]], direct: [[9, 10]], planting: [[9, 10]], harvest: [[1, 3], [10, 12]] },
  { name: "Mostassa", category: "Fulles", icon: "⌇", direct: [[2, 4], [9, 11]], harvest: [[3, 5], [10, 12]] },
  { name: "Pak choi", category: "Fulles", icon: "♜", seedbed: [[8, 9]], direct: [[9, 10]], planting: [[9, 10]], harvest: [[10, 12]] },
  { name: "Bròcoli", category: "Cols", icon: "♣", seedbed: [[7, 8]], planting: [[9, 10]], harvest: [[1, 3], [11, 12]] },
  { name: "Coliflor", category: "Cols", icon: "✾", seedbed: [[7, 8]], planting: [[9, 10]], harvest: [[1, 3], [11, 12]] },
  { name: "Romanesco", category: "Cols", icon: "♢", seedbed: [[7, 8]], planting: [[9, 10]], harvest: [[1, 3], [12, 12]] },
  { name: "Col llombarda", category: "Cols", icon: "◉", seedbed: [[7, 8]], planting: [[9, 10]], harvest: [[1, 3], [11, 12]] },
  { name: "Col", category: "Cols", icon: "◎", seedbed: [[1, 2], [7, 8]], planting: [[3, 4], [9, 10]], harvest: [[1, 3], [5, 6], [11, 12]] },
  { name: "Col de Brussel·les", category: "Cols", icon: "⁙", seedbed: [[6, 7]], planting: [[9, 9]], harvest: [[1, 3], [12, 12]] },
  { name: "Pastanaga", category: "Arrels", icon: "▼", direct: [[2, 6], [9, 10]], harvest: [[1, 2], [5, 12]] },
  { name: "Rave", category: "Arrels", icon: "●", direct: [[2, 5], [9, 11]], harvest: [[3, 6], [10, 12]] },
  { name: "Remolatxa", category: "Arrels", icon: "●", seedbed: [[2, 4], [8, 9]], direct: [[2, 6], [8, 10]], planting: [[3, 5], [9, 10]], harvest: [[1, 2], [5, 7], [10, 12]] },
  { name: "Nap", category: "Arrels", icon: "◆", direct: [[2, 4], [8, 10]], harvest: [[4, 6], [10, 12]] },
  { name: "Patata", category: "Arrels", icon: "●", planting: [[2, 3], [8, 9]], harvest: [[5, 7], [11, 12]] },
  { name: "Ceba", category: "Bulbs i tiges", icon: "◉", seedbed: [[1, 2], [8, 10]], direct: [[1, 3], [9, 10]], planting: [[3, 4], [10, 12]], harvest: [[5, 8]] },
  { name: "Calçot", category: "Bulbs i tiges", icon: "╽", seedbed: [[10, 12]], planting: [[2, 3], [7, 8]], harvest: [[1, 3], [11, 12]] },
  { name: "All", category: "Bulbs i tiges", icon: "♢", planting: [[1, 1], [10, 12]], harvest: [[5, 7]] },
  { name: "Porro", category: "Bulbs i tiges", icon: "╿", seedbed: [[1, 4], [8, 9]], planting: [[4, 6], [10, 11]], harvest: [[1, 4], [8, 12]] },
  { name: "Api", category: "Bulbs i tiges", icon: "♜", seedbed: [[2, 4], [7, 8]], planting: [[5, 6], [9, 10]], harvest: [[1, 3], [9, 12]] },
  { name: "Carxofa", category: "Perennes", icon: "♠", seedbed: [[2, 3]], planting: [[4, 5], [9, 10]], harvest: [[1, 5], [10, 12]] },
  { name: "Maduixa", category: "Perennes", icon: "♥", planting: [[2, 3], [10, 11]], harvest: [[4, 6]] },
  { name: "Alfàbrega", category: "Aromàtiques", icon: "♣", seedbed: [[3, 4]], direct: [[5, 6]], planting: [[5, 6]], harvest: [[6, 10]] },
  { name: "Julivert", category: "Aromàtiques", icon: "✣", direct: [[2, 6], [9, 10]], harvest: [[1, 12]] },
  { name: "Coriandre (cilantre)", category: "Aromàtiques", icon: "✣", direct: [[2, 4], [9, 11]], harvest: [[1, 5], [11, 12]] },
  { name: "Camamilla", category: "Flors", icon: "✿", seedbed: [[2, 3]], direct: [[3, 4], [9, 10]], planting: [[3, 4]], harvest: [[4, 7]] },
  { name: "Calèndula", category: "Flors", icon: "✺", seedbed: [[2, 3], [8, 9]], direct: [[2, 4], [9, 11]], planting: [[3, 4], [10, 11]], harvest: [[2, 6], [10, 12]] },
  { name: "Crisantem", category: "Flors", icon: "✹", seedbed: [[2, 4]], planting: [[3, 5], [9, 10]], harvest: [[9, 11]] },
  { name: "Margarida", category: "Flors", icon: "✿", seedbed: [[2, 5], [6, 8]], direct: [[3, 5], [9, 10]], planting: [[4, 5], [9, 10]], harvest: [[3, 8]] },
  { name: "Rosella", category: "Flors", icon: "✽", direct: [[2, 3], [10, 11]], harvest: [[4, 6]] },
  { name: "Narcís", category: "Flors", icon: "✦", planting: [[10, 12]], harvest: [[2, 4]] },
  { name: "Muscari", category: "Flors", icon: "♟", planting: [[10, 12]], harvest: [[2, 4]] },
];

const actionMeta = {
  seedbed: { label: "Planter", shortLabel: "Planter", compactLabel: "Plant.", symbol: "⌑" },
  direct: { label: "Sembra directa", shortLabel: "Sembra", compactLabel: "Sem.", symbol: "•" },
  planting: { label: "Plantar", shortLabel: "Plantar", compactLabel: "Planta", symbol: "↓" },
  harvest: { label: "Collita o floració", shortLabel: "Collita", compactLabel: "Coll.", symbol: "✦" },
};
const actionTypes = Object.keys(actionMeta);

const state = {
  season: currentSeason,
  search: "",
  category: "all",
  actions: new Set(actionTypes),
};

const monthsHeader = document.querySelector("#monthsHeader");
const cropRows = document.querySelector("#cropRows");
const cropSearch = document.querySelector("#cropSearch");
const categorySelect = document.querySelector("#categorySelect");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const gantt = document.querySelector("#gantt");
const ganttScroll = document.querySelector("#ganttScroll");
const scrollHint = document.querySelector("#scrollHint");
const helpDialog = document.querySelector("#helpDialog");
const helpButton = document.querySelector("#helpButton");
const closeHelp = document.querySelector("#closeHelp");

document.documentElement.style.setProperty("--current-month", currentMonth);

function visibleMonths() {
  return seasons[state.season];
}

function renderMonths() {
  const selectedMonths = visibleMonths();
  gantt.style.setProperty("--visible-months", selectedMonths.length);
  monthsHeader.innerHTML = selectedMonths
    .map(
      (monthNumber) =>
        `<div class="month-label ${monthNumber === currentMonth ? "current" : ""}">${months[monthNumber - 1]}</div>`,
    )
    .join("");
}

function getActiveMonths(crop) {
  return actionTypes
    .filter((type) => state.actions.has(type))
    .flatMap((type) => crop[type] || [])
    .flatMap(([start, end]) =>
      Array.from({ length: end - start + 1 }, (_, index) => start + index),
    );
}

function normalizeText(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function periodLabel(type, start, end) {
  const startMonth = fullMonths[start - 1];
  const preposition = ["abril", "agost", "octubre"].includes(startMonth) ? "d’" : "de ";
  const date =
    start === end ? startMonth : `${preposition}${startMonth} a ${fullMonths[end - 1]}`;
  return `${actionMeta[type].label}: ${date}`;
}

function visibleSegments(start, end) {
  const displayedMonths = visibleMonths();
  const segments = [];
  let segmentStart = null;

  displayedMonths.forEach((month, index) => {
    const isVisible = month >= start && month <= end;
    if (isVisible && segmentStart === null) segmentStart = index;
    if (segmentStart !== null && (!isVisible || index === displayedMonths.length - 1)) {
      const segmentEnd = isVisible && index === displayedMonths.length - 1 ? index : index - 1;
      segments.push({
        start: segmentStart + 1,
        end: segmentEnd + 1,
        startMonth: displayedMonths[segmentStart],
        endMonth: displayedMonths[segmentEnd],
        continuesBefore: displayedMonths[segmentStart] !== start,
        continuesAfter: displayedMonths[segmentEnd] !== end,
      });
      segmentStart = null;
    }
  });

  return segments;
}

function renderPeriods(periods, type, lane) {
  return (periods || [])
    .flatMap(([periodStart, periodEnd]) =>
      visibleSegments(periodStart, periodEnd).map((segment) => ({
        ...segment,
        periodStart,
        periodEnd,
      })),
    )
    .map(
      ({ start, end, periodStart, periodEnd, continuesBefore, continuesAfter }) => `
        <span
          class="period ${type}${continuesBefore ? " continues-before" : ""}${continuesAfter ? " continues-after" : ""}"
          style="--start: ${start}; --end: ${end}; --lane: ${lane}"
          role="img"
          tabindex="0"
          aria-label="${periodLabel(type, periodStart, periodEnd)}"
          title="${periodLabel(type, periodStart, periodEnd)}"
        >
          <span class="period-symbol" aria-hidden="true">${actionMeta[type].symbol}</span>
          <span class="period-label" aria-hidden="true">${end === start ? actionMeta[type].compactLabel : actionMeta[type].shortLabel}</span>
        </span>`,
    )
    .join("");
}

function cropTemplate(crop) {
  const currentMonthPosition = visibleMonths().indexOf(currentMonth) + 1;
  const visibleActions = actionTypes.filter(
    (type) =>
      state.actions.has(type) &&
      (crop[type] || []).some(([start, end]) => visibleSegments(start, end).length > 0),
  );
  const laneOffset = visibleActions.length === 1 ? 21 : visibleActions.length === 2 ? 10 : 7;
  return `
    <article class="crop-row" style="--lane-count: ${visibleActions.length}; --lane-offset: ${laneOffset}px">
      <div class="crop-meta">
        <span class="crop-icon" aria-hidden="true">${crop.icon}</span>
        <span>
          <strong class="crop-name">${crop.name}</strong>
          <small class="crop-category">${crop.category}</small>
        </span>
      </div>
      <div class="timeline" aria-label="Calendari de ${crop.name}">
        ${currentMonthPosition ? `<span class="month-highlight" style="--position: ${currentMonthPosition}"></span>` : ""}
        ${visibleActions
          .map((type, lane) => renderPeriods(crop[type], type, lane))
          .join("")}
      </div>
    </article>`;
}

function filteredCrops() {
  const selectedMonths = seasons[state.season];
  const search = normalizeText(state.search);

  return crops.filter((crop) => {
    const matchesSeason =
      state.season === "all" || getActiveMonths(crop).some((month) => selectedMonths.includes(month));
    const matchesSearch = !search || normalizeText(crop.name).includes(search);
    const matchesCategory = state.category === "all" || crop.category === state.category;
    return matchesSeason && matchesSearch && matchesCategory;
  });
}

function renderCrops() {
  const visibleCrops = filteredCrops();
  renderMonths();
  cropRows.innerHTML = visibleCrops.map(cropTemplate).join("");
  resultCount.textContent = `${visibleCrops.length} ${visibleCrops.length === 1 ? "cultiu" : "cultius"}`;
  emptyState.hidden = visibleCrops.length !== 0;
  gantt.hidden = visibleCrops.length === 0;
  requestAnimationFrame(() => {
    scrollHint.hidden = ganttScroll.scrollWidth <= ganttScroll.clientWidth;
  });
}

function focusSeason(season, behavior = "smooth") {
  ganttScroll.scrollTo({ left: 0, behavior });
  if (!window.matchMedia("(max-width: 800px)").matches) return;

  const seasonTab = document.querySelector(`[data-season="${season}"]`);
  const tabs = document.querySelector(".season-tabs");
  const tabOffset = seasonTab.offsetLeft - (tabs.clientWidth - seasonTab.offsetWidth) / 2;

  tabs.scrollTo({ left: Math.max(0, tabOffset), behavior });
}

function populateCategories() {
  const categories = [...new Set(crops.map((crop) => crop.category))].sort((a, b) =>
    a.localeCompare(b, "ca"),
  );
  categorySelect.insertAdjacentHTML(
    "beforeend",
    categories.map((category) => `<option value="${category}">${category}</option>`).join(""),
  );
}

function syncActionFilters() {
  const allSelected = state.actions.size === actionTypes.length;
  document.querySelectorAll(".action-filter").forEach((button) => {
    const action = button.dataset.action;
    const selected = action === "all" ? allSelected : state.actions.has(action);
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function syncSeasonTabs() {
  document.querySelectorAll(".season-tab").forEach((button) => {
    const selected = button.dataset.season === state.season;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

document.querySelectorAll(".season-tab").forEach((button) => {
  button.addEventListener("click", () => {
    state.season = button.dataset.season;
    syncSeasonTabs();
    renderCrops();
    focusSeason(state.season);
  });
});

document.querySelectorAll(".action-filter").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;

    if (action === "all") {
      state.actions = new Set(actionTypes);
    } else if (state.actions.size === actionTypes.length) {
      state.actions.delete(action);
    } else if (state.actions.has(action)) {
      state.actions.delete(action);
      if (state.actions.size === 0) state.actions = new Set(actionTypes);
    } else {
      state.actions.add(action);
    }

    syncActionFilters();
    renderCrops();
  });
});

cropSearch.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderCrops();
});

categorySelect.addEventListener("change", (event) => {
  state.category = event.target.value;
  renderCrops();
});

helpButton.addEventListener("click", () => {
  helpDialog.showModal();
  helpButton.setAttribute("aria-expanded", "true");
});

closeHelp.addEventListener("click", () => helpDialog.close());
helpDialog.addEventListener("close", () => helpButton.setAttribute("aria-expanded", "false"));
helpDialog.addEventListener("click", (event) => {
  if (event.target === helpDialog) helpDialog.close();
});

populateCategories();
syncSeasonTabs();
renderCrops();
focusSeason(state.season, "auto");
