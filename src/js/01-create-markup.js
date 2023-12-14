export const addImagesToGallery = images => {
  return images
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery-item">
        <a class="gallery-link" href="${original}">
            <img
            class="gallery-image"
            src="${preview}" 
            alt="${description}" 
            width="360" 
            height="200" 
            loading="lazy"/>
        </a>
    </li>
    `;
    })
    .join('');
};
