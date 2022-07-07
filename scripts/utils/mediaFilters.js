const filtersButton = document.getElementById("filters-btn");
const activeFilter = document.getElementById("active-filter");
const inactiveFilter1 = document.getElementById("inactive-filter1");
const inactiveFilter2 = document.getElementById("inactive-filter2");
const filtersList = document.getElementById("filters-list");

filtersButton.addEventListener("click", displayOrCloseFilters);
inactiveFilter1.addEventListener("click", () => changeFilter(inactiveFilter1));
inactiveFilter2.addEventListener("click", () => changeFilter(inactiveFilter2));

// filters navigation with keyboards
inactiveFilter1.addEventListener("keydown", (e) =>
  mediaFiltersKeyboardEvent(e, inactiveFilter1)
);
inactiveFilter2.addEventListener("keydown", (e) =>
  mediaFiltersKeyboardEvent(e, inactiveFilter2)
);

// display filter if it close or hide it if open
function displayOrCloseFilters() {
  if (filtersList.style.display == "block") {
    filtersList.style.display = "none";
    filtersButton.setAttribute("aria-expanded", false);
  } else {
    filtersList.style.display = "block";
    filtersButton.setAttribute("aria-expanded", true);
  }
}

// close filters
function closeFilters() {
  filtersList.style.display = "none";
  filtersButton.setAttribute("aria-expanded", false);
}

// Update filter value and sort media list
function changeFilter(filterDOM) {
  let textContent = activeFilter.textContent;
  activeFilter.textContent = filterDOM.textContent;
  filterDOM.textContent = textContent;

  // we remove white space
  currentFilter = activeFilter.textContent.replace(/\s/g, "");

  switch (currentFilter) {
    case "Popularité":
      filterByPopularity();
      break;
    case "Date":
      filterByDate();
      break;
    case "Titre":
      filterByTitle();
      break;
  }

  resetPhotographerMedia();
  displayPhotographerMedia(photographerMedia);
  displayOrCloseFilters();
}

// Filtering media by likes desc
function filterByPopularity() {
  photographerMedia = photographerMedia.sort((a, b) => {
    if (a.likes > b.likes) {
      return -1;
    }

    if (a.likes < b.likes) {
      return 1;
    }

    return 0;
  });
}

// Filtering media by date desc
function filterByDate() {
  photographerMedia = photographerMedia.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }

    if (a.date < b.date) {
      return 1;
    }

    return 0;
  });
}

// Filtering media by title asc
function filterByTitle() {
  photographerMedia = photographerMedia.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }

    if (a.title > b.title) {
      return 1;
    }

    return 0;
  });
}

// Close and select filters with keyboards
function mediaFiltersKeyboardEvent(e, filter) {
  if (e.key === "Escape" || e.key === "Esc") {
    displayOrCloseFilters();
  }
  if (e.key === "Enter") {
    changeFilter(filter);
  }
}
