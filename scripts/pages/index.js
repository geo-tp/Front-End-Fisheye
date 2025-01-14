async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  // displayPhotographers(photographers);
  const photographersSection = document.querySelector(".photographers");

  photographers.forEach((photographer) => {
    const photographerModel = new ElementsFactory(photographer, "PHOTOGRAPHER");
    const photographerDOM = new PhotographerTemplate(photographerModel)
    photographersSection.appendChild(photographerDOM.createPhotographerCard());
  });
}



init();
