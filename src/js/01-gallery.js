// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
console.log(galleryItems);

const listGallery = document.querySelector(".gallery");

const galleryItem = galleryItems.map(({ preview, original, description }) => {
  const galleryList = `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
  return galleryList;
});

listGallery.insertAdjacentHTML("beforeend", galleryItem.join(""));

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

