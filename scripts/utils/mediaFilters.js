const filtersButton = document.getElementById("filters-btn");
const activeFilter = document.getElementById("active-filter");
const inactiveFilter1 = document.getElementById("inactive-filter1");
const inactiveFilter2 = document.getElementById("inactive-filter2");
const filtersList = document.getElementById("filters-list");

filtersButton.addEventListener("click", displayOrCloseFilters);
inactiveFilter1.addEventListener("click", () => changeFilter(inactiveFilter1));
inactiveFilter2.addEventListener("click", () => changeFilter(inactiveFilter2));

function displayOrCloseFilters() {
  if (filtersList.style.display == "block") {
    filtersList.style.display = "none";
    filtersButton.setAttribute("aria-expanded", false);
  } else {
    filtersList.style.display = "block";
    filtersButton.setAttribute("aria-expanded", true);
  }
}

function closeFilters() {
  filtersList.style.display = "none";
  filtersButton.setAttribute("aria-expanded", false);
}

function changeFilter(filterDOM) {
  let textContent = activeFilter.textContent;
  activeFilter.textContent = filterDOM.textContent;
  filterDOM.textContent = textContent;

  currentFilter = activeFilter.textContent.replace(/\s/g, "");

  switch (currentFilter) {
    case "Popularité":
      filterByPopularity();
      break;
    case "Date":
      filterByDate();
      console.log("in date");
      break;
    case "Titre":
      filterByTitle();
      break;
  }

  resetPhotographerMedia();
  displayPhotographerMedia(photographerMedia);
  displayOrCloseFilters();
}

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
