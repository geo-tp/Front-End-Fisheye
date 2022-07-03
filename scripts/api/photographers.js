const photographerUrl =
  "http://localhost:8000/Front-End-Fisheye/data/photographers.json";

async function getPhotographers() {
  var photographers = await fetch(photographerUrl)
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
      throw new Error("La requete a échoué");
    });

  return photographers;
}

async function getPhotographerById(id) {
  var photographer = await fetch(photographerUrl)
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
