mediaAlreadyLiked = [];
let photographerMedia = [];

async function displayPhotographerMedia(media) {
  photographerMedia = media;
  const photographerMediaDOM = document.querySelector(".photographer-media");
  const photographerMediaModel = mediaFactory(media);
  const mediaCardDOM = photographerMediaModel.getMediaCardDOM();

  photographerMediaDOM.appendChild(mediaCardDOM);
}

function formatMediaPath(media) {
  return `./assets/portfolio/${media.photographerId}/${
    media.video ? media.video : media.image
  }`;
}

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
