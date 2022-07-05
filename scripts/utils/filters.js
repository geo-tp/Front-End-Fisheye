const filtersButton = document.getElementById("filters-btn");
const activeFilter = document.getElementById("activer-filter");
const inactiveFilter1 = document.getElementById("inactive-filter1");
const inactiveFilter2 = document.getElementById("inactive-filter2");
const filtersList = document.getElementById("filters-list");

filtersButton.addEventListener("click", ShowOrHideFilters);

function ShowOrHideFilters() {
  if (filtersList.style.display == "block") {
    filtersList.style.display = "none";
  } else {
    filtersList.style.display = "block";
  }
}
