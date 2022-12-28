// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line




const galleryEl = document.querySelector(".gallery");

const galleryImg = galleryItems.map((element) =>

    `<div class="gallery__item">
<a class="gallery__link" href="${element.original}">
<img
    class="gallery__image"
    src="${element.preview}"
    data-source= "${element.original}"
    alt="${element.description}"
/>
</a>
</div>`).join("");

galleryEl.innerHTML = galleryImg;

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});