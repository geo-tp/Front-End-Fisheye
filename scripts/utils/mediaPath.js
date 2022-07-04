function formatMediaPath(media) {
  return `./assets/portfolio/${media.photographerId}/${
    media.video ? media.video : media.image
  }`;
}
