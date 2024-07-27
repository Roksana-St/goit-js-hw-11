export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';

  const markup = images.map(image => {
    return `
      <div class="photo-card">
        <a href="${image.largeImageURL}">

        </a>
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />

        <div class="info">
          <p class="info-item">
            Likes <span>${image.likes}</span>
          </p>
          <p class="info-item">
            Views <span>${image.views}</span>
          </p>
          <p class="info-item">
            Comments<span>${image.comments}</span>
          </p>
          <p class="info-item">
            Downloads <span>${image.downloads}</span>
          </p>
        </div>
      </div>
    `;
  }).join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
