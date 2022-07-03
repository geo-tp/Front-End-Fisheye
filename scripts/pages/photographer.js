// DOM ELEMENT
// const photographerMedia = document.querySelector("");

async function getPhotographerById(id) {
  var photographer = await fetch(
    "http://localhost:8000/Front-End-Fisheye/data/photographers.json"
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw response;
    })
    .then((data) => {
      console.log(data);
      for (let photographer of data.photographers) {
        if (photographer.id == id) {
          return photographer;
        }
      }

      throw data;
    })
    .catch((err) => {
      throw new Error("La requete a echoué");
    });

  return photographer;
}

async function getMediaByPhotographerId(id) {
  var media = await fetch(
    "http://localhost:8000/Front-End-Fisheye/data/photographers.json"
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw response;
    })
    .then((response) => {
      let photographerMedia = [];
      for (let media of response.media) {
        if (media.photographerId == id) {
          photographerMedia.push(media);
        }
      }

      return photographerMedia;
    })
    .catch((err) => {
      throw new Error("La requete a échoué");
    });

  return media;
}

async function displayPhotographerHeader(photographer) {
  const photographerHeader = document.querySelector(".photographer-header");
  const photographerHeaderModel = photographerHeaderFactory(photographer);
  const userHeaderDom = photographerHeaderModel.getUserHeaderDOM();
  photographerHeader.innerHTML = userHeaderDom;
}

async function displayMedia(media) {
  const photographerMedia = document.querySelector(".photographer-media");
  const photographerMediaModel = mediaFactory(media);
  const mediaCardDOM = photographerMediaModel.getMediaCardDOM();

  photographerMedia.appendChild(mediaCardDOM);
}

async function init() {
  let params = new URL(document.location).searchParams;
  let id = params.get("id");
  const photographer = await getPhotographerById(id);
  const photographerMedia = await getMediaByPhotographerId(id);

  displayPhotographerHeader(photographer);

  for (let media of photographerMedia) {
    displayMedia(media);
  }

  console.log(photographer);
  console.log(media);
}

init();
