
import { fetchImages } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const input = form.querySelector('input[name="query"]');
  const loader = document.querySelector('.loader');

  let lightbox = null;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = input.value.trim();

    if (query === '') {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search query.',
      });
      return;
    }

    loader.style.display = 'block';

  
      const images = await fetchImages(query);
      loader.style.display = 'none';

      if (images.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please, try again!',
        });
      } else {
        renderImages(images);
        if (lightbox) {
          lightbox.refresh();
        } else {
          lightbox = new SimpleLightbox('.gallery a', {});
        }
      }

    input.value = '';
  });
});

