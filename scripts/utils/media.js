function formatMediaPath(media) {
  return `./assets/portfolio/${media.photographerId}/${
    media.video ? media.video : media.image
  }`;
}

function incrementMediaLikes(mediaId) {
  const likesDOM = document.getElementById(`media-${mediaId}`);
  const likeTotalCountDOM = document.getElementById("likes-total-count");
  likesDOM.textContent = parseInt(likesDOM.textContent) + 1;
  likeTotalCountDOM.textContent = parseInt(likeTotalCountDOM.textContent) + 1;
}
