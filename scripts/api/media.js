// const mediaUrl = "./data/photographers.json";
const mediaUrl = "http://localhost:8000/Front-End-Fisheye/data/photographers.json";

async function getMediaByPhotographerId(id) {
  var media = await fetch(mediaUrl)
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
