async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  displayPhotographers(photographers);
}

init();
