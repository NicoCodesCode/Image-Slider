const albums = document.querySelectorAll(".album");
const albumName = document.getElementById("album-name");
let currentAlbum = 0;

function showSlide() {
  if (currentAlbum > albums.length - 1) {
    currentAlbum = 0;
  } else if (currentAlbum < 0) {
    currentAlbum = albums.length - 1;
  }

  albums.forEach((album) => {
    album.classList.add("hidden");
  });

  albums[currentAlbum].classList.remove("hidden");
  albumName.textContent = albums[currentAlbum].id;
}

function previous() {
  currentAlbum--;
  showSlide();
}

function next() {
  currentAlbum++;
  showSlide();
}
