import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { photoRequest } from "./js/pixabay-api";
import { galleryMarkup } from "./js/render-functions";

const formEl = document.querySelector(".forms");
const galleryEl = document.querySelector(".gallery");
const loader = document.querySelector(".js-loader");
const loadMoreBtn = document.querySelector(".js-load-more-btn");

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  overlayOpacity: 0.8,
});

let page = 1;
let el = "";
let cardHeigth = 0;

const loading = () => {
  loader.classList.remove("hidden");   
}
const hideloading = () => {
  loader.classList.add("hidden");
}
  
const searchAndDisplayImages = async (event) => {

  loading();

  try {
  event.preventDefault();
  el = formEl.elements.user.value.trim();
  page = 1;

  if (el === "") {
    iziToast.warning({
    position: "topRight",
    message: "Fill in the input field",
    });
    hideloading();
    return;
  }
     
  const element = await photoRequest(el, page);
    
  if (element.data.hits.length === 0) {
    iziToast.error({
      position: "topRight",
      message: "Sorry, there are no images matching your search query. Please try again!",
    });
    
    galleryEl.innerHTML = "";
    
    return;
  }
    
  const creatingGaleri = element.data.hits.map(imginfo => galleryMarkup(imginfo)).join("");
  galleryEl.innerHTML = creatingGaleri;
  lightbox.refresh();
    
  loadMoreBtn.classList.remove("is-hidden");
  }
  catch (error) {
    iziToast.error({
      position: "topRight",
      message: "An error occurred",
    });
  }
  finally {
    hideloading();
  }

  formEl.reset();
}

const pageScrollMarkup = () => {
  const galleryElement = document.querySelector(".gallery-item");
  cardHeigth = galleryElement.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeigth * 2,
    behavior: 'smooth',
  });
}


const buttonToDownloadMorePhotos = async () => {
  try {
    page++
    const element = await photoRequest(el, page);

    const creatingGaleri = element.data.hits.map(imginfo => galleryMarkup(imginfo)).join('');
    galleryEl.insertAdjacentHTML("beforeend", creatingGaleri);
    lightbox.refresh();

    pageScrollMarkup();
    
    const totalHits = Math.ceil(element.data.totalHits / 15);
    if (page >= totalHits) {
      iziToast.info({
        position: "topRight",
        message: "We're sorry, but you've reached the end of search results.",
      })
      loadMoreBtn.classList.add("is-hidden");
    }
  }
  catch (error) {
    iziToast.error({
      position: "topRight",
      message: "An error occurred",
    });
  }
}

formEl.addEventListener("submit", searchAndDisplayImages);
loadMoreBtn.addEventListener("click", buttonToDownloadMorePhotos);
