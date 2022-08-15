// used to store media likes clicked by user
let mediaAlreadyLiked = [];

// current all photopgrapher media
let photographerMedia = [];

// display all photographer media
async function displayPhotographerMedia(photographerMedia) {
  const photographerMediaDOM = document.querySelector(".photographer-media");

  for (let media of photographerMedia) {
    const mediaModel = new MediaFactory(media);
    const mediaCardDOM = new MediaTemplate(mediaModel);
    photographerMediaDOM.appendChild(mediaCardDOM.createMediaCard());
  }
}

// reset and hide all media
function resetPhotographerMedia() {
  const photographerMediaDOM = document.querySelector(".photographer-media");
  photographerMediaDOM.innerHTML = "";
}

// format path to include photographerId
function formatMediaPath(media) {
  return `./assets/portfolio/${media.photographerId}/${
    media.video ? media.video : media.image
  }`;
}

// Increment likes for a media
function incrementMediaLikes(mediaId) {
  const likesDOM = document.getElementById(`media-${mediaId}`);
  const likeTotalCountDOM = document.getElementById("likes-total-count");

  if (mediaAlreadyLiked.includes(mediaId)) {
    likesDOM.textContent = parseInt(likesDOM.textContent) - 1;
    likeTotalCountDOM.textContent = parseInt(likeTotalCountDOM.textContent) - 1;
    mediaIndex = mediaAlreadyLiked.indexOf(mediaId);
    mediaAlreadyLiked.splice(mediaIndex, 1);
  } else {
    likesDOM.textContent = parseInt(likesDOM.textContent) + 1;
    likeTotalCountDOM.textContent = parseInt(likeTotalCountDOM.textContent) + 1;
    mediaAlreadyLiked.push(mediaId);
  }
}
