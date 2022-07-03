async function getPhotographers() {
  var photographers = await fetch(
    "http://localhost:8000/Front-End-Fisheye/data/photographers.json"
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw response;
    })
    .then((response) => {
      return response.photographers;
    })
    .catch((err) => {
      throw new Error("La requete api a echouée");
    });

  return {
    photographers,
  };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographers");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
