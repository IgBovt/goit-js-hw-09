import { images } from './01-img-data.js';
import { addImagesToGallery } from './01-create-markup.js';

const listRef = document.querySelector('.gallery');
listRef.innerHTML = addImagesToGallery(images);

// ======== LIBRARY ======== //
// ======== LIBRARY ======== //

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
