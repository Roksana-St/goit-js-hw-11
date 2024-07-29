
import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const input = form.querySelector('input[name="query"]');
  const loader = document.querySelector('.loader');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = input.value.trim();

    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query!',
        });
        return;
    }

    clearGallery();
    loader.classList.remove('hidden');

    fetchImages(query)
        .then(data => {
            loader.classList.add('hidden');

            if (data.hits.length === 0) {
                iziToast.error({
                  position: 'topRight',
                title: 'Error',
                        message: "Sorry, there are no images matching your search query. Please try again!",
                    });
                return;
            }

            renderImages(data.hits);
            lightbox.refresh();
        })
        .catch(error => {
            loader.classList.add('hidden');
            console.error('Error fetching images:', error);
        });
    form.reset();
  
});


  
  });
