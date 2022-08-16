// display list of photographers
async function displayPhotographers(photographers) {
  const photographersSection = document.querySelector(".photographers");

  photographers.forEach((photographer) => {
    const photographerModel = ElementsFactory(photographer, "PHOTOGRAPHER");
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}
