let params = new URL(document.location).searchParams;
let id = params.get("id");

const photographerInfos = document.querySelector("photographer-header__infos");
const photographerPicture = document.querySelector(
  "photographer-header__picture"
);
const photographerMedia = document.querySelector("");

function getPhotographerById(id) {
  var photographer = await fetch(
    "http://localhost:8000/Front-End-Fisheye/data/photographers.json"
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw response;
    })
    .then((response) => {
      for (let photographer of response.photographers) {
        if (photographer.id === id) {
          return response.photographers;
        }
      }

      throw response;
    })
    .catch((err) => {
      throw new Error("La requete api a echouée");
    });

  return photographer;
}

function getMediaByPhotographerId(id) {
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
        if (media.photographerId === id) {
          photographerMedia.push(media);
        }
      }

      return photographerMedia;
    })
    .catch((err) => {
      throw new Error("La requete api a echouée");
    });

  return media;
}
